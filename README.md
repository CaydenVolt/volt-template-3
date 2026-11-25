# volt-template-3 — reusable marketing-site template

A fast, static marketing site built for **Behold No Mold** (mold remediation, Cape Cod & the South Shore, MA) that doubles as **Volt's third reusable website template**. Everything client-specific lives in **one config file** (`src/config/site.config.ts`), validated by a Zod schema that **fails the build** on a missing or malformed field.

The design is **dark, bold, and contractor-grade** (inspired by the brief's reference, rooferzcorp.com): heavy condensed display type, numbered services, big ghost headings. **No gradients, no glow, no AI-pastel colours.** The accent is the client's own brand **green** (`#4CAF50`), taken from their current website. Conversion is **phone-first** (call and email, no lead form), fitting a US local-service business.

---

## Stack

- **[Astro](https://astro.build)** — static output (`output: 'static'`), TypeScript, no server code at launch
- **Tailwind CSS v4** (via `@tailwindcss/vite`, `@theme` in `src/styles/global.css`)
- **Zod** — validates `site.config.ts` at build time
- **Cloudflare Workers static assets** — deployed with **Wrangler** (`wrangler.toml`)
- **GA4 via Cloudflare Zaraz** — `generate_lead` on every call tap and email click
- Fonts: **Anton** (display) + **Barlow** (body), via Google Fonts

Requires **Node ≥ 20.11**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321 (this build was previewed on --port 4330)
npm run build      # -> dist/
npm run preview    # serve the built dist/
```

## Project structure

```
src/
  config/
    site.config.ts   <- THE ONLY FILE YOU EDIT to re-skin (validated at build)
    schema.ts        <- Zod schema + rules (shape only, no values)
  components/         <- Nav, Hero, TrustStrip, About, Services, WhyChoose,
                        Process, Gallery, Reviews, ServiceArea, FAQ, Contact,
                        Footer, FloatingCall, Logo, Icon, Figure, Placeholder,
                        SectionHeading, Schema, SiteScripts, LegalPage
  layouts/BaseLayout.astro
  pages/              <- index, privacy, terms, 404, robots.txt.ts
  assets/images/      <- real photos go here (run through Astro's image pipeline)
public/               <- favicon(s), apple-touch-icon, og-image
```

Clean URLs are emitted as directories (`/privacy/`, `/terms/`) via `build.format: 'directory'`.

---

## The config is everything

`src/config/site.config.ts` holds business details, brand colours, services, the
why-choose points, process, gallery, reviews, FAQ, service area, the offer, SEO,
and the privacy details.

- **No business name, phone number, service, or review is hardcoded in a component.** All of it comes from config.
- Brand colours feed CSS custom properties in `BaseLayout.astro`, which `global.css` maps onto Tailwind utilities (`bg-brand-bg`, `text-brand-accent`, ...). **Change a hex, the whole site re-skins.** The accent is one flat colour; swap `brand.accent` / `brand.accentHover` to re-theme.
- The config is validated by `SiteConfigSchema` on import. A bad or missing field throws a readable error and **fails `astro build` / `astro dev`**.

## Images (placeholders until real photos arrive)

No stock photos. Until the client supplies real job photos, every image slot
renders a **labelled placeholder** (via `Figure.astro` / `Placeholder.astro`)
that says exactly which photo belongs there.

To drop in a real photo: put the file in `src/assets/images/`, then set its
filename in `site.config.ts` (e.g. `hero.backgroundImage`, `about.image`,
`gallery.items[].image`). No component change needed. Astro's `<Image>` then
emits responsive, optimised WebP automatically.

Recommended first photos: a strong **hero** shot (attic remediation or a crew at
work), an **owner/team** photo, and a few **before/after** job shots for the
gallery.

## Conversion + analytics

- **Phone-first, no lead form.** Every CTA is a **phone call** (`tel:`) or an **email** (`mailto:`). The contact section is a call-to-action block with the number, email, hours, and directions.
- A **floating call button** (mobile) and a **sticky call tab** (desktop) are on every page.
- Every call tap and email click fires a GA4 **`generate_lead`** event via `dataLayer` / `zaraz.track` / `gtag`. Wire it in **Cloudflare Zaraz** (dashboard); the measurement-ID placeholder is `analytics.ga4MeasurementId`.

## SEO

- Per-page titles/descriptions in `seo.pages`, canonical URLs, OG + Twitter tags, generated **sitemap**, **robots.txt**, and **JSON-LD** (`LocalBusiness`/`GeneralContractor` + `FAQPage`).
- The **aggregateRating** (5.0 / 57) is emitted only because `reviews.arePlaceholders` is `false` and the figures are the client's real public Google values. Never publish an unverified rating.
- While `deployment.isPreview` is `true`, **every page is noindex and `/robots.txt` disallows everything**, so the workers.dev preview can never be indexed and compete with the real domain.

---

## Confirm with the client before launch

These are flagged `TODO(client)` in `site.config.ts`:

1. **Address.** Now follows the Google Business Profile (**14 Buzzards Bay Ave, Bourne, MA 02532**). Note the current website still shows *10 Washington Ave, Buzzards Bay* — update the website (or confirm which is correct) so the NAP matches everywhere.
2. **Business hours.** The current site only shows "Open today 9:00 AM to 5:00 PM". The config uses Mon–Fri 9–5, Sat by appointment, Sun closed as a placeholder. Confirm the real weekly hours (then they can also be added to the JSON-LD).
3. **Second owner's role.** Paul Tavares is "the owner" per reviews; confirm Esteban Hayes's title.
4. **Social links.** Only the Google profile is linked. Add Facebook / Instagram if they exist.
5. **Photos.** Replace the placeholders (see "Images" above).
6. **GA4 ID** in `analytics.ga4MeasurementId`, wired via Zaraz.
7. **Privacy / Terms** text is a starting template; have it reviewed.

## Going live (in order)

1. Address the client-confirmation list above.
2. In `site.config.ts`:
   - set `deployment.isPreview: false`,
   - confirm `seo.siteUrl` (`https://beholdnomold.com`).
3. `npm run build && npx wrangler deploy` (prints the `*.workers.dev` preview URL).
4. Get client sign-off on the preview, then attach the custom domain in the Cloudflare dashboard (or uncomment `routes` in `wrangler.toml`). **Do not attach the domain until the preview is approved.**

## Cloning this template for the next client

1. Copy the folder and rename it (and `name` in `package.json` and `wrangler.toml`).
2. Edit **`src/config/site.config.ts`** top to bottom. The schema will tell you if anything is missing.
3. Replace the media in `src/assets/images/` and the favicons / `og-image.jpg` in `public/`.
4. `npm run build`, deploy to a workers.dev preview, get sign-off, then go live.

## Content sources (for reference)

Built Nov 2026 from the client's current site (beholdnomold.com) and their Google
Business Profile (5.0, 57 reviews, Bourne MA). Review quotes are real Google
reviews, lightly trimmed, attributed by first name + initial.

## Quality bar targets

- Lighthouse mobile: Performance 90+, Accessibility 95+, SEO 100
- No horizontal scroll at 360px (verified)
- `LocalBusiness` + `FAQPage` JSON-LD, sitemap, robots.txt, OG image
- Keyboard accessible with a visible focus ring; reduced-motion respected
