/**
 * -----------------------------------------------------------------------------
 *  CONFIG SCHEMA (Zod)
 * -----------------------------------------------------------------------------
 *  Every client-specific value the site renders is validated here. `site.config.ts`
 *  calls `SiteConfigSchema.parse(...)` at module load, so a missing or malformed
 *  field throws during `astro build` (and during `npm run dev`): the build FAILS
 *  rather than shipping a half-configured site.
 *
 *  This file defines shape and rules only. The actual values live in
 *  `site.config.ts`.
 */
import { z } from 'zod';

/* -- Primitives ------------------------------------------------------------- */

const hex = z
  .string()
  .regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'must be a hex colour like #1E6FB0');

const url = z.string().url();
const nonEmpty = z.string().min(1);

/** Icon ids understood by `src/components/Icon.astro`. Keep in sync with it. */
export const IconName = z.enum([
  'shield',
  'shield-check',
  'droplet',
  'wind',
  'home',
  'building',
  'leaf',
  'lungs',
  'search',
  'clipboard-check',
  'spray',
  'wrench',
  'truck',
  'clock',
  'phone',
  'mail',
  'map-pin',
  'star',
  'quote',
  'check',
  'check-circle',
  'menu',
  'x',
  'chevron-down',
  'arrow-right',
  'arrow-up-right',
  'facebook',
  'instagram',
  'google',
  'award',
  'calendar',
  'tag',
  'thermometer',
  'alert',
  'users',
  'bolt',
  'sparkles',
]);

/* -- Sections --------------------------------------------------------------- */

const deployment = z.object({
  /**
   * THE GO-LIVE SWITCH. While true, every page is noindex and /robots.txt
   * disallows everything, so an unlaunched preview can never be indexed on the
   * workers.dev address and compete with the real domain later.
   */
  isPreview: z.boolean(),
  /** Where the preview build is hosted (workers.dev). No trailing slash. */
  previewUrl: url,
});

const owner = z.object({ name: nonEmpty, role: z.string().optional() });

const company = z.object({
  name: nonEmpty,
  legalName: z.string().optional(),
  tagline: nonEmpty,
  foundedYear: z.number().int().min(1900).max(2100).optional(),
  owners: z.array(owner).optional(),
});

/**
 * Dark-theme brand palette. Flat colours only (no gradients/glow in this build).
 * `BaseLayout.astro` emits these as CSS custom properties and `global.css` maps
 * them to Tailwind utilities (`bg-brand-bg`, `text-brand-accent`, ...). Change a
 * hex -> the whole site re-skins.
 */
const brand = z.object({
  bg: hex, // page background (near-black)
  bgAlt: hex, // alternate dark band
  surface: hex, // card / panel on dark
  light: hex, // light contrast section background
  accent: hex, // the single brand accent
  accentHover: hex, // accent, darker, for hover
  accentText: hex, // text/icon colour placed on the accent
  text: hex, // body text on dark
  textMuted: hex, // secondary text on dark
  onLight: hex, // heading/body text on the light section
  onLightMuted: hex, // secondary text on the light section
});

const logo = z.object({
  /** Small line under the wordmark, e.g. "MOLD REMEDIATION". */
  subtitle: nonEmpty,
  alt: nonEmpty,
});

const phone = z.object({
  display: nonEmpty,
  /** tel: dial string, leading + and digits only. */
  href: z.string().regex(/^\+\d{8,15}$/),
  label: z.string().optional(),
});

const contact = z.object({
  phonePrimary: phone,
  phoneSecondary: phone.optional(),
  email: z.string().email(),
  addressLine: nonEmpty,
  city: nonEmpty,
  region: nonEmpty,
  postalCode: z.string().optional(),
  country: nonEmpty,
  /** Google Maps link / embed query for the "Directions" button. */
  mapUrl: url.optional(),
  serviceAreas: z.array(nonEmpty).min(1),
  hours: z.array(z.object({ days: nonEmpty, hours: nonEmpty })).min(1),
  /** e.g. "Same-day and emergency service available." */
  emergencyNote: z.string().optional(),
  /** Flag any field above still awaiting client confirmation. */
  unverifiedNote: z.string().optional(),
});

const social = z
  .array(
    z.object({
      platform: z.enum(['facebook', 'instagram', 'google', 'tiktok', 'youtube']),
      url,
      unverified: z.boolean().optional(),
    }),
  )
  .min(1);

const navLink = z.object({ label: nonEmpty, href: nonEmpty });

const cta = z.object({ label: nonEmpty, href: nonEmpty });

const faqItem = z.object({ question: nonEmpty, answer: nonEmpty });

const hero = z.object({
  eyebrow: nonEmpty,
  headline: nonEmpty,
  /** Rendered in the accent colour, on its own line after `headline`. */
  headlineAccent: nonEmpty,
  subheadline: nonEmpty,
  locationBadge: nonEmpty,
  ctaPrimary: cta,
  ctaSecondary: cta,
  badges: z.array(nonEmpty).min(1),
  /** Optional hero photo (in src/assets/images). Empty string -> styled fallback. */
  backgroundImage: z.string(),
  backgroundImageAlt: z.string(),
});

const trustItem = z.object({ icon: IconName, value: nonEmpty, label: nonEmpty });

const about = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  /** Rendered in the accent colour, continues the heading. */
  headingAccent: z.string().optional(),
  body: z.array(nonEmpty).min(1),
  points: z.array(nonEmpty).min(1),
  image: z.string(),
  imageAlt: z.string(),
  stats: z.array(z.object({ value: nonEmpty, label: nonEmpty })).min(1),
  quote: z.string().optional(),
});

const serviceItem = z.object({
  name: nonEmpty,
  description: nonEmpty,
  icon: IconName,
  bullets: z.array(nonEmpty).optional(),
  /** URL-safe slug -> /services/<slug>/ */
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be lowercase-kebab-case'),
  /** Service-page H1: what we do + where. */
  h1: nonEmpty,
  metaTitle: nonEmpty,
  metaDescription: nonEmpty,
  /** One-liner reused in the hero subtitle and cross-link cards. */
  shortDescription: nonEmpty,
  /** Full paragraph for the service-page body. */
  longDescription: nonEmpty,
  includedItems: z.array(nonEmpty).min(1),
  faqs: z.array(faqItem).min(1),
  /** Filename in src/assets/images; '' falls back to a labelled placeholder. */
  image: z.string(),
  imageAlt: nonEmpty,
});

const services = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  subheading: nonEmpty,
  items: z.array(serviceItem).min(1),
});

const whyChoose = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  subheading: z.string().optional(),
  points: z
    .array(z.object({ title: nonEmpty, description: nonEmpty, icon: IconName }))
    .min(2),
});

const process = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  subheading: nonEmpty,
  steps: z
    .array(z.object({ title: nonEmpty, description: nonEmpty, icon: IconName }))
    .min(2),
});

const galleryItem = z.object({
  image: z.string(),
  alt: nonEmpty,
  caption: z.string().optional(),
  tag: z.string().optional(),
});

const gallery = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  subheading: nonEmpty,
  /** Shown while photos are placeholders, e.g. "Photos from recent jobs, coming soon." */
  note: z.string().optional(),
  items: z.array(galleryItem).min(1),
});

const reviews = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  subheading: z.string().optional(),
  /** The client's real Google reviews page. */
  googleReviewUrl: url,
  /** e.g. "Google". */
  platformLabel: nonEmpty,
  /**
   * Real rating/count, or null while unknown. When null, NO aggregateRating is
   * emitted in JSON-LD: publishing an unverified rating is review fraud.
   */
  rating: z.number().min(0).max(5).nullable(),
  count: z.number().int().min(0).nullable(),
  /** Set true while `items` are placeholders awaiting real review text. */
  arePlaceholders: z.boolean(),
  items: z
    .array(
      z.object({
        name: nonEmpty,
        stars: z.number().int().min(1).max(5),
        quote: nonEmpty,
        location: z.string().optional(),
        source: z.string().optional(),
      }),
    )
    .min(3),
});

const serviceArea = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  subheading: nonEmpty,
  towns: z.array(nonEmpty).min(1),
  note: z.string().optional(),
});

const offer = z.object({
  /** Master switch for the promo bar + contact-section badge. */
  enabled: z.boolean(),
  badge: nonEmpty,
  text: nonEmpty,
  finePrint: z.string().optional(),
});

const contactSection = z.object({
  eyebrow: nonEmpty,
  heading: nonEmpty,
  headingAccent: z.string().optional(),
  body: nonEmpty,
  /** Short call-to-action under the phone number, e.g. "Call for a free assessment". */
  callLabel: z.string().optional(),
});

/* -- analytics / SEO / privacy --------------------------------------------- */

const analytics = z.object({
  /** GA4 measurement ID (loaded via Cloudflare Zaraz). Placeholder is fine. */
  ga4MeasurementId: z.string(),
});

const seo = z.object({
  siteUrl: url,
  title: nonEmpty,
  description: nonEmpty,
  locale: nonEmpty,
  ogImage: nonEmpty,
  pages: z.record(
    z.string(),
    z.object({ title: z.string().optional(), description: z.string().optional() }),
  ),
});

const privacy = z.object({
  lastUpdated: nonEmpty,
  entity: nonEmpty,
  contactEmail: z.string().email(),
});

/* -- Root ------------------------------------------------------------------- */

export const SiteConfigSchema = z.object({
  deployment,
  company,
  brand,
  logo,
  contact,
  social,
  nav: z.array(navLink).min(1),
  hero,
  trustStrip: z.array(trustItem).min(1),
  about,
  services,
  whyChoose,
  process,
  gallery,
  reviews,
  serviceArea,
  faq: z.object({
    eyebrow: z.string().optional(),
    heading: nonEmpty,
    subheading: z.string().optional(),
    items: z.array(faqItem).min(1),
  }),
  offer,
  contactSection,
  analytics,
  seo,
  privacy,
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type FaqItem = z.infer<typeof faqItem>;
export type IconNameType = z.infer<typeof IconName>;
export type ServiceItem = z.infer<typeof serviceItem>;
