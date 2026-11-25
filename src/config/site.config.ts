/**
 * =============================================================================
 *  SITE CONFIG  --  Behold No Mold  (volt-template-3)
 * =============================================================================
 *  THE ONLY FILE YOU EDIT TO RE-SKIN THE SITE.
 *
 *  Every business detail, colour, service, review, FAQ, and SEO string lives
 *  here and is validated by `SiteConfigSchema` (see schema.ts) at build time.
 *  A missing or malformed field throws a readable error and FAILS the build.
 *
 *  SOURCES used to fill this in (Nov 2026):
 *    - the client's current site:  https://beholdnomold.com
 *    - the client's Google Business Profile (5.0, 57 reviews, Bourne MA)
 *
 *  Items still needing the client's confirmation are tagged `TODO(client)`.
 * =============================================================================
 */
import { SiteConfigSchema, type SiteConfig } from './schema.ts';

const config: SiteConfig = {
  deployment: {
    // GO-LIVE SWITCH. true => every page noindex + robots.txt disallows all.
    // Flip to false only at launch (see README -> "Going live").
    isPreview: true,
    previewUrl: 'https://volt-template-3.volltsagency.workers.dev',
  },

  company: {
    name: 'Behold No Mold',
    tagline: 'Fast. Thorough. Guaranteed results.',
    // Owners named on the current site. Paul is referred to as "the owner" in
    // Google reviews; Esteban's exact role is unconfirmed.
    owners: [
      { name: 'Paul Tavares', role: 'Owner' },
      { name: 'Esteban Hayes', role: 'Co-owner' }, // TODO(client): confirm role
    ],
  },

  /* -- Brand palette (dark theme, flat colours, no gradients/glow) ----------- */
  // Change a hex and the whole site re-skins. The accent is the client's own
  // brand green, taken from their current website (buttons #4CAF50, links
  // #39853C), applied flat on a near-black base (their site uses #161616 too).
  brand: {
    bg: '#0F1110', // page background (near-black, faint green-grey cast)
    bgAlt: '#161A18', // alternate dark band
    surface: '#1B211D', // cards / panels on dark
    light: '#F3F5F2', // light contrast section (clean off-white)
    accent: '#4CAF50', // the client's brand green (from their current site)
    accentHover: '#3E9142', // green, darker, for hover/active
    accentText: '#0C120D', // near-black text/icons placed on the green
    text: '#EDF1EC', // body text on dark
    textMuted: '#99A39C', // secondary text on dark
    onLight: '#14181A', // headings/body on the light section
    onLightMuted: '#54605A', // secondary text on the light section
  },

  logo: {
    subtitle: 'MOLD REMEDIATION',
    alt: 'Behold No Mold, mold remediation on Cape Cod and the South Shore',
  },

  /* -- Contact -------------------------------------------------------------- */
  contact: {
    phonePrimary: { display: '(508) 942-5794', href: '+15089425794', label: 'Paul' },
    phoneSecondary: { display: '(857) 505-7299', href: '+18575057299' },
    email: 'beholdnomold@gmail.com',
    // Address per the Google Business Profile (authoritative for local SEO / map pin).
    addressLine: '14 Buzzards Bay Ave',
    city: 'Bourne',
    region: 'MA',
    postalCode: '02532',
    country: 'United States',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Behold+No+Mold+Bourne+MA',
    serviceAreas: [
      'Bourne',
      'Buzzards Bay',
      'Sandwich',
      'Falmouth',
      'Mashpee',
      'Barnstable',
      'Plymouth',
      'Wareham',
    ],
    hours: [
      { days: 'Monday to Friday', hours: '9:00 AM to 5:00 PM' },
      { days: 'Saturday', hours: 'By appointment' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    emergencyNote: 'Same-day service available for urgent situations.',
    // TODO(client): confirm full weekly hours (the site only shows 9-5). Address
    // now follows the Google Business Profile (14 Buzzards Bay Ave, Bourne).
    unverifiedNote: 'Weekly hours to be confirmed with the client before launch.',
  },

  /* -- Social --------------------------------------------------------------- */
  social: [
    {
      platform: 'google',
      url: 'https://share.google/QtRr3LUjgMXUQfRTa',
    },
    // TODO(client): add Facebook / Instagram URLs if the business has them.
  ],

  /* -- Primary navigation --------------------------------------------------- */
  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'Why Us', href: '/#why' },
    { label: 'Process', href: '/#process' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Service Area', href: '/#service-area' },
    { label: 'Contact', href: '/#contact' },
  ],

  /* -- Hero ----------------------------------------------------------------- */
  hero: {
    eyebrow: 'Local, family-run mold remediation',
    headline: 'MOLD REMOVAL & REMEDIATION',
    headlineAccent: 'ON CAPE COD & THE SOUTH SHORE.',
    subheadline:
      'Remove the mold. Restore the air. Fast, thorough mold removal for attics, basements, and homes across Cape Cod and the South Shore, with free assessments and honest, upfront pricing.',
    locationBadge: 'Based in Bourne, MA',
    ctaPrimary: { label: 'Request a Free Assessment', href: '/#contact' },
    ctaSecondary: { label: 'Call (508) 942-5794', href: 'tel:+15089425794' },
    badges: ['Same-day service', 'Free assessments', '5.0 rating on Google'],
    backgroundImage: 'hero-attic.jpg',
    backgroundImageAlt: 'Behold No Mold technician remediating mold in an attic',
  },

  /* -- Trust strip (just under the hero) ------------------------------------ */
  trustStrip: [
    { icon: 'star', value: '5.0', label: 'Rated on Google, 57 reviews' },
    { icon: 'clock', value: 'Same-day', label: 'Service available' },
    { icon: 'tag', value: 'Free', label: 'Mold assessments' },
    { icon: 'home', value: 'Local', label: 'Family-run, Cape Cod based' },
  ],

  /* -- About / commitment --------------------------------------------------- */
  about: {
    eyebrow: 'Who we are',
    heading: 'LOCAL GUYS,',
    headingAccent: 'DOING LOCAL BUSINESS.',
    body: [
      'Behold No Mold is a local, family-run mold remediation company serving Cape Cod and the South Shore. We are dedicated to eliminating mold and giving families healthier spaces to live and breathe.',
      'When you call, you deal with the owners directly. We show up fast, explain exactly what we find, remove the mold at its source, and leave your home cleaner than we found it.',
    ],
    points: [
      'Straight answers and honest, upfront pricing',
      'Thorough remediation, done right the first time',
      'Clear communication from assessment to final walkthrough',
    ],
    image: 'about-crew.jpg',
    imageAlt: 'The Behold No Mold team on a job site',
    stats: [
      { value: '5.0', label: 'Google rating' },
      { value: '57', label: 'Five-star reviews' },
      { value: 'Same-day', label: 'Response available' },
      { value: 'Free', label: 'Assessments' },
    ],
    quote: 'We do not just remove mold. We restore peace of mind.',
  },

  /* -- Services ------------------------------------------------------------- */
  services: {
    eyebrow: 'What we do',
    heading: 'OUR SERVICES.',
    subheading:
      'Full-service mold remediation for homes and offices, from the first inspection to the final air quality walkthrough.',
    items: [
      {
        name: 'Mold Remediation & Removal',
        description:
          'Complete removal of mold at the source, with containment to keep spores from spreading through the rest of your home.',
        icon: 'spray',
        bullets: ['Surface and structural mold', 'Safe containment and cleanup', 'Treated to prevent regrowth'],
        slug: 'mold-remediation',
        h1: 'Mold Removal & Remediation on Cape Cod & the South Shore',
        metaTitle: 'Mold Removal & Remediation on Cape Cod | Behold No Mold',
        metaDescription:
          'Professional mold removal and remediation for homes and businesses across Cape Cod and the South Shore. We remove mold at the source and stop it coming back. Free assessment.',
        shortDescription:
          'Complete mold removal at the source, with containment so spores do not spread through the rest of your home.',
        longDescription:
          'Mold is more than a stain. It is a health and structural problem that keeps spreading when it is left alone. We handle the full remediation from start to finish: we contain the affected area, remove the mold at its source, clean and treat the surfaces, and fix the moisture problem that let it grow. Whether it is on drywall, framing, or tucked into an attic or basement, we take care of it properly so it does not come back. Every job starts with a free assessment and an honest, upfront quote, and we serve homes and businesses across Cape Cod and the South Shore of Massachusetts.',
        includedItems: [
          'Containment to stop spores spreading',
          'Removal of mold at the source',
          'Cleaning and anti-microbial treatment',
          'Moisture and airflow fixes so it stays gone',
          'Free assessment and upfront pricing',
        ],
        faqs: [
          {
            question: 'How do you remove mold for good?',
            answer:
              'We remove the mold at its source, treat the surfaces, then fix the moisture and airflow that let it grow. Mold is a moisture problem, so addressing the cause is what keeps it from coming back.',
          },
          {
            question: 'Do you handle both homes and businesses?',
            answer:
              'Yes. We remediate mold in houses, rentals, and commercial properties across Cape Cod and the South Shore, and we work around your schedule to keep disruption low.',
          },
          {
            question: 'Is the assessment free?',
            answer:
              'Yes. We come out, inspect the problem, explain what we find, and give you a clear, fair quote at no cost and with no pressure.',
          },
        ],
        image: 'gallery-attic-insulation.jpg',
        imageAlt: 'Mold remediation work inside an attic',
      },
      {
        name: 'Attic Mold Removal & Prep',
        description:
          'Our specialty. We treat mold on attic sheathing and framing, then prep the space so the problem does not come back.',
        icon: 'home',
        bullets: ['Roof sheathing and rafters', 'Insulation removal where needed', 'Attic prep and treatment'],
        slug: 'attic-mold-removal',
        h1: 'Attic Mold Removal on Cape Cod & the South Shore',
        metaTitle: 'Attic Mold Removal on Cape Cod | Behold No Mold',
        metaDescription:
          'Attic mold removal and prep across Cape Cod and the South Shore. We treat mold on sheathing and rafters, fix airflow, and stop it returning. Free assessment.',
        shortDescription:
          'Our specialty. We treat mold on attic sheathing and framing, then prep the space so the problem does not come back.',
        longDescription:
          'Attics are the most common place we find mold on Cape Cod, usually from poor ventilation, roof leaks, or warm damp air rising from the house below. We remove mold from the roof sheathing and rafters, take out ruined insulation where needed, and treat the wood to kill what is there. Then we correct the airflow and sealing that caused it, so the attic stays dry. A mold-free attic protects your roof structure, your insulation, and the air that circulates down into the rest of your home. Every attic job starts with a free assessment, across Cape Cod and the South Shore.',
        includedItems: [
          'Mold treatment on sheathing and rafters',
          'Removal of ruined insulation where needed',
          'Attic prep and surface treatment',
          'Ventilation and air-sealing corrections',
          'Free assessment and upfront pricing',
        ],
        faqs: [
          {
            question: 'Why does attic mold keep coming back?',
            answer:
              'Almost always because the airflow and moisture were never fixed. We treat the mold and then correct the ventilation and sealing that caused it, which is what keeps it from returning.',
          },
          {
            question: 'Do I need to replace my attic insulation?',
            answer:
              'Only where it is contaminated or soaked. We remove and replace what is affected and leave the rest, so you are not paying for more than the job needs.',
          },
          {
            question: 'How long does attic mold removal take?',
            answer:
              'Most attic jobs are done in a day or two depending on size and severity. We give you a clear timeline with your free quote.',
          },
        ],
        image: 'gallery-attic-mold.jpg',
        imageAlt: 'Mold-stained attic sheathing and rafters before remediation',
      },
      {
        name: 'Basement & Crawlspace Mold',
        description:
          'Damp basements and crawlspaces are where mold loves to grow. We remove it and address the moisture that feeds it.',
        icon: 'droplet',
        bullets: ['Basements and crawlspaces', 'Moisture source review', 'Surface treatment and cleanup'],
        slug: 'basement-crawlspace-mold-removal',
        h1: 'Basement & Crawl Space Mold Removal on Cape Cod',
        metaTitle: 'Basement & Crawl Space Mold Removal | Cape Cod | Behold No Mold',
        metaDescription:
          'Basement and crawl space mold removal across Cape Cod and the South Shore. We remove the mold, dry the space, and address the moisture that feeds it. Free assessment.',
        shortDescription:
          'Damp basements and crawl spaces are where mold loves to grow. We remove it and address the moisture that feeds it.',
        longDescription:
          'Basements and crawl spaces are dark, damp, and poorly ventilated, which makes them one of the most common places mold takes hold. Left alone, it spreads to framing, insulation, and stored belongings, and it affects the air throughout the house. We remove the mold, clean and treat the surfaces, and dry the space, then get to the root of the humidity and water intrusion that caused it. The result is a basement or crawl space that is clean, dry, and far less likely to have a mold problem again. We serve homeowners across Cape Cod and the South Shore, and every job starts with a free assessment.',
        includedItems: [
          'Mold removal from walls, framing, and floors',
          'Cleaning and anti-microbial treatment',
          'Drying and moisture control',
          'Review of water intrusion and humidity sources',
          'Free assessment and upfront pricing',
        ],
        faqs: [
          {
            question: 'What causes mold in a basement or crawl space?',
            answer:
              'Usually standing moisture, high humidity, or water getting in. We remove the mold and then address the source, because treating the surface alone will not keep it away.',
          },
          {
            question: 'Can you get into tight crawl spaces?',
            answer:
              'Yes. Tight, low crawl spaces are routine for us. We come prepared with the right equipment and protective gear to work safely in them.',
          },
          {
            question: 'Will a dehumidifier fix it?',
            answer:
              'A dehumidifier helps control humidity, but it will not remove mold that is already there or stop water getting in. We handle the removal and point you to the right long-term moisture fix.',
          },
        ],
        image: 'gallery-wall-mold.jpg',
        imageAlt: 'Mold at the base of a basement wall',
      },
      {
        name: 'Mold Inspection & Assessment',
        description:
          'A free, no-pressure assessment of your mold issue. We inspect, explain what we find, and give you a clear, fair quote.',
        icon: 'search',
        bullets: ['Free assessment', 'Clear explanation of the problem', 'Honest, upfront pricing'],
        slug: 'mold-inspection',
        h1: 'Mold Inspection & Testing on Cape Cod & the South Shore',
        metaTitle: 'Mold Inspection & Testing on Cape Cod | Behold No Mold',
        metaDescription:
          'Free, no-pressure mold inspection and assessment across Cape Cod and the South Shore. We find the source, explain it plainly, and give an honest quote.',
        shortDescription:
          'A free, no-pressure assessment of your mold issue. We inspect, explain what we find, and give you a clear, fair quote.',
        longDescription:
          'If you can see mold, smell a musty odor, or you have had a leak or a damp spot, it is worth getting looked at before it spreads. We inspect attics, basements, crawl spaces, bathrooms, and anywhere moisture collects, and we take moisture readings to find the hidden source feeding the problem. Then we explain exactly what we find in plain language and give you an honest, upfront quote, with no scare tactics and no pressure. The assessment is free, so you get a clear picture of what is going on and what it will take to fix it. We serve Bourne, Buzzards Bay, and the towns across Cape Cod and the South Shore.',
        includedItems: [
          'Visual inspection of the problem areas',
          'Moisture readings to find the source',
          'Plain-language explanation of the problem',
          'Honest, upfront written quote',
          'Free, with no pressure',
        ],
        faqs: [
          {
            question: 'Is the mold inspection really free?',
            answer:
              'Yes. We inspect the issue, explain what we find, and give you a clear quote at no cost. There is no pressure to book the work with us.',
          },
          {
            question: 'Do you do mold testing?',
            answer:
              'We inspect and take moisture readings to find the source and extent of the problem, which is what most homeowners need to move forward. If lab air sampling is required, we will tell you.',
          },
          {
            question: 'How soon can you come out?',
            answer:
              'Fast. We respond quickly and offer same-day visits for urgent situations across Cape Cod and the South Shore.',
          },
        ],
        image: 'gallery-inspection.jpg',
        imageAlt: 'Technician taking a moisture reading during a mold inspection',
      },
      {
        name: 'Air Sealing & Ventilation',
        description:
          'Mold is a moisture problem. We improve air sealing and ventilation so your home stays dry and healthy long term.',
        icon: 'wind',
        bullets: ['Air sealing', 'Ventilation improvements', 'Healthier indoor air'],
        slug: 'air-sealing-ventilation',
        h1: 'Air Sealing & Ventilation for Mold Control on Cape Cod',
        metaTitle: 'Air Sealing & Ventilation for Mold Control | Behold No Mold',
        metaDescription:
          'Air sealing and ventilation to stop mold at the source across Cape Cod and the South Shore. We control moisture and airflow so mold does not return. Free assessment.',
        shortDescription:
          'Mold is a moisture problem. We improve air sealing and ventilation so your home stays dry and healthy long term.',
        longDescription:
          'Removing mold is only half the job. If the moisture and airflow that caused it are still there, it comes back. We air seal and improve ventilation in attics, crawl spaces, and problem areas so humidity stays under control and the space stays dry. That means sealing the gaps that let warm, damp air collect, and improving airflow so moisture has somewhere to go. It is the difference between a quick surface fix and a long-term solution. We pair this with our remediation work, or handle it on its own, for homes across Cape Cod and the South Shore. Every job starts with a free assessment.',
        includedItems: [
          'Air sealing of gaps and problem areas',
          'Ventilation and airflow improvements',
          'Humidity and moisture control',
          'A long-term fix, not a surface patch',
          'Free assessment and upfront pricing',
        ],
        faqs: [
          {
            question: 'Why does air sealing matter for mold?',
            answer:
              'Mold needs moisture. Sealing the gaps that let warm, damp air collect, and improving airflow, keeps surfaces dry so mold has nothing to grow on.',
          },
          {
            question: 'Can you do this without full remediation?',
            answer:
              'Yes. If you do not have an active mold problem but want to prevent one, or keep one from returning, we can handle the air sealing and ventilation on its own.',
          },
          {
            question: 'Will this help my energy bills too?',
            answer:
              'Often, yes. Better air sealing reduces drafts and the damp air your home has to deal with, which can help comfort and efficiency as well as mold control.',
          },
        ],
        image: 'gallery-ventilation.jpg',
        imageAlt: 'Attic ductwork and ventilation improvements',
      },
      {
        name: 'Demolition & Cleanup',
        description:
          'When materials are too far gone, we handle the demolition and full cleanup, and leave the space ready to restore.',
        icon: 'wrench',
        bullets: ['Removal of affected materials', 'Full site cleanup', 'Ready for restoration'],
        slug: 'mold-demolition-cleanup',
        h1: 'Mold Demolition & Cleanup on Cape Cod & the South Shore',
        metaTitle: 'Mold Demolition & Cleanup on Cape Cod | Behold No Mold',
        metaDescription:
          'Mold demolition and full cleanup across Cape Cod and the South Shore. We remove materials too far gone, clean the space, and leave it ready to restore.',
        shortDescription:
          'When materials are too far gone, we handle the demolition and full cleanup, and leave the space ready to restore.',
        longDescription:
          'Sometimes mold has gone too far for surface treatment, and the affected drywall, insulation, or framing needs to come out. We handle that demolition safely, with containment so the rest of your home stays protected, then remove and dispose of the contaminated materials and clean and sanitize the space. What you are left with is a clean, mold-free foundation that is ready for rebuilding and restoration. We keep the work area sealed and tidy from start to finish, and we serve homes and businesses across Cape Cod and the South Shore. Every job starts with a free assessment and a clear, upfront quote.',
        includedItems: [
          'Safe demolition with full containment',
          'Removal and disposal of affected materials',
          'Cleaning and sanitizing of the space',
          'Left ready for rebuilding and restoration',
          'Free assessment and upfront pricing',
        ],
        faqs: [
          {
            question: 'Do you remove and dispose of the materials?',
            answer:
              'Yes. We bag and remove the contaminated drywall, insulation, and framing, and dispose of it properly so nothing spreads on the way out.',
          },
          {
            question: 'Do you rebuild afterward?',
            answer:
              'We leave the space clean and ready to restore. We focus on the mold work and demolition, and can point you in the right direction for the rebuild.',
          },
          {
            question: 'How do you keep the rest of my home clean?',
            answer:
              'We seal off the work area with containment before any demolition starts, so dust and spores stay contained and the rest of your home is protected.',
          },
        ],
        image: 'gallery-demolition.jpg',
        imageAlt: 'Demolition and removal of mold-damaged materials',
      },
    ],
  },

  /* -- Why choose us -------------------------------------------------------- */
  whyChoose: {
    eyebrow: 'Why Behold No Mold',
    heading: 'WHY HOMEOWNERS CALL US FIRST.',
    subheading:
      'The same things show up in review after review: fast, fair, thorough, and easy to talk to.',
    points: [
      {
        title: 'Same-day, fast response',
        description:
          'Mold does not wait, and neither do we. We respond quickly and offer same-day service for urgent situations.',
        icon: 'bolt',
      },
      {
        title: 'Honest, upfront pricing',
        description:
          'Free assessments and fair quotes with no surprises. Homeowners tell us we beat the other quotes they got.',
        icon: 'tag',
      },
      {
        title: 'Thorough, done right',
        description:
          'We remove mold at the source and treat the space so it does not come back. The job is done when it is actually done.',
        icon: 'shield-check',
      },
      {
        title: 'Clear communication',
        description:
          'You deal with the owners directly and always know what is happening, from the first call to the final walkthrough.',
        icon: 'users',
      },
      {
        title: 'Local and family-run',
        description:
          'Local guys doing local business. We live and work here on the Cape, and we treat your home like our own.',
        icon: 'map-pin',
      },
      {
        title: 'Healthier home, guaranteed',
        description:
          'The goal is simple: cleaner air and a healthier home for your family, with results we stand behind.',
        icon: 'lungs',
      },
    ],
  },

  /* -- Process -------------------------------------------------------------- */
  process: {
    eyebrow: 'How it works',
    heading: 'A CLEAR, SIMPLE PROCESS.',
    subheading: 'No jargon, no runaround. Here is exactly what to expect when you call us.',
    steps: [
      {
        title: 'Free assessment',
        description: 'We inspect the area, find the source, and explain the problem in plain language.',
        icon: 'search',
      },
      {
        title: 'Containment & prep',
        description: 'We seal off the work area and protect the rest of your home before anything starts.',
        icon: 'shield',
      },
      {
        title: 'Remediation & removal',
        description: 'We remove the mold at the source and treat the space so it does not return.',
        icon: 'spray',
      },
      {
        title: 'Air sealing & ventilation',
        description: 'We address the moisture and airflow that let mold grow in the first place.',
        icon: 'wind',
      },
      {
        title: 'Final walkthrough',
        description: 'We clean up, walk the job with you, and leave you with a healthier home.',
        icon: 'check-circle',
      },
    ],
  },

  /* -- Gallery / recent work ------------------------------------------------ */
  // Images are placeholders until the client sends real job photos. Each item
  // renders a labelled placeholder now; set `image` to a filename in
  // src/assets/images to swap in the real photo (no other change needed).
  gallery: {
    eyebrow: 'Our work',
    heading: 'RECENT JOBS.',
    subheading: 'Real mold remediation work from homes across Cape Cod and the South Shore.',
    note: 'Job photos coming soon. Share your best before-and-after shots to feature here.',
    items: [
      { image: 'gallery-attic-mold.jpg', alt: 'Mold-stained attic sheathing before remediation', tag: 'Attic', caption: 'Attic mold, before' },
      { image: 'gallery-attic-insulation.jpg', alt: 'Fresh insulation after attic remediation', tag: 'Attic', caption: 'Remediated and re-insulated' },
      { image: 'gallery-wall-mold.jpg', alt: 'Mold at the base of an interior wall', tag: 'Mold Damage', caption: 'Mold found at the wall' },
      { image: 'gallery-ventilation.jpg', alt: 'Attic ductwork and ventilation work', tag: 'Ventilation', caption: 'Air sealing and ventilation' },
      { image: 'gallery-inspection.jpg', alt: 'Technician using a moisture meter on site', tag: 'Inspection', caption: 'On-site moisture testing' },
      { image: 'gallery-finished.jpg', alt: 'Clean, finished room after remediation', tag: 'Finished', caption: 'Clean, healthier space' },
    ],
  },

  /* -- Reviews -------------------------------------------------------------- */
  // Rating/count are the REAL public Google values (verified Nov 2026). The
  // quotes below are real Google reviews, lightly trimmed, attributed by first
  // name + initial. `arePlaceholders: false` => aggregateRating is emitted in
  // JSON-LD.
  reviews: {
    eyebrow: 'Reviews',
    heading: 'REAL STORIES FROM REAL CUSTOMERS.',
    subheading: 'Rated 5.0 from 57 reviews on Google.',
    googleReviewUrl: 'https://share.google/QtRr3LUjgMXUQfRTa',
    platformLabel: 'Google',
    rating: 5.0,
    count: 57,
    arePlaceholders: false,
    items: [
      {
        name: 'Kim P.',
        stars: 5,
        quote:
          'Paul, the owner, is one of the nicest, most prompt, thorough, and communicative people I have worked with. He had the best price for the job, came out, and worked hard removing the mold in our attic. I would highly recommend them.',
        location: 'West Barnstable, MA',
        source: 'Google',
      },
      {
        name: 'Lisa B.',
        stars: 5,
        quote:
          'Five-star service from start to finish. Behold No Mold gave an incredibly quick response when I reached out about a mold issue. Paul was professional, highly responsive, and communicative through the demolition and cleanup.',
        location: 'Harwich Port, MA',
        source: 'Google',
      },
      {
        name: 'Ali M.',
        stars: 5,
        quote:
          'Paul provided excellent service at a great price. Our attic mold problem is completely taken care of, and we now have peace of mind knowing our children can have a healthier home.',
        location: 'Cape Cod, MA',
        source: 'Google',
      },
    ],
  },

  /* -- Service area --------------------------------------------------------- */
  serviceArea: {
    eyebrow: 'Where we work',
    heading: 'SERVING CAPE COD & THE SOUTH SHORE.',
    subheading:
      'Based in Bourne and covering the towns across the Cape and the South Shore of Massachusetts.',
    towns: [
      'Bourne',
      'Buzzards Bay',
      'Sandwich',
      'Falmouth',
      'Mashpee',
      'Barnstable',
      'West Barnstable',
      'Hyannis',
      'Yarmouth',
      'Dennis',
      'Harwich',
      'Plymouth',
      'Wareham',
      'Marion',
    ],
    note: 'Do not see your town? Give us a call. If you are on the Cape or the South Shore, we can help.',
  },

  /* -- FAQ ------------------------------------------------------------------ */
  faq: {
    eyebrow: 'Questions',
    heading: 'FREQUENTLY ASKED QUESTIONS.',
    subheading: 'Straight answers to the questions we hear most.',
    items: [
      {
        question: 'Is the assessment really free?',
        answer:
          'Yes. We come out, inspect the mold issue, explain what we find, and give you a clear, fair quote at no cost and with no pressure.',
      },
      {
        question: 'How fast can you come out?',
        answer:
          'Fast. We respond quickly and offer same-day service for urgent situations. Call us and we will get you on the schedule right away.',
      },
      {
        question: 'Do you handle attic and basement mold?',
        answer:
          'Those are our most common jobs. We remediate mold on attic sheathing and framing, in basements and crawlspaces, and anywhere else it has taken hold.',
      },
      {
        question: 'Will the mold come back after you treat it?',
        answer:
          'Mold is a moisture problem. We remove it at the source and address the air sealing and ventilation that let it grow, so your home stays dry and healthy.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We are based in Buzzards Bay and serve Cape Cod and the South Shore, including Bourne, Sandwich, Falmouth, Mashpee, Barnstable, Plymouth, Wareham, and the surrounding towns.',
      },
      {
        question: 'How much does mold removal cost?',
        answer:
          'Every job is different, so pricing depends on the size and severity of the problem. That is why the assessment is free: you get an honest, upfront quote before any work begins.',
      },
    ],
  },

  /* -- Offer ---------------------------------------------------------------- */
  offer: {
    enabled: true,
    badge: 'New customers',
    text: 'Get 10% off your first mold removal service.',
    finePrint: 'Mention this offer when you request your assessment. Cannot be combined with other discounts.',
  },

  /* -- Contact section / final CTA (phone-first, no form) ------------------- */
  contactSection: {
    eyebrow: 'Get in touch',
    heading: 'CALL FOR YOUR FREE',
    headingAccent: 'MOLD ASSESSMENT.',
    body:
      'Give us a call and tell us about your mold issue. We will talk it through, set up your free assessment, and get you a clear, fair quote. Same-day service is available for urgent situations.',
    callLabel: 'Call for a free assessment',
  },

  /* -- Analytics ------------------------------------------------------------ */
  analytics: {
    ga4MeasurementId: 'G-XXXXXXXXXX', // TODO(client): real GA4 id, wired via Zaraz
  },

  /* -- SEO ------------------------------------------------------------------ */
  seo: {
    siteUrl: 'https://beholdnomold.com',
    title: 'Behold No Mold | Mold Remediation on Cape Cod & the South Shore',
    description:
      'Fast, thorough mold removal for attics, basements, and homes across Cape Cod and the South Shore. Free assessments, honest pricing, same-day service. Rated 5.0 on Google.',
    locale: 'en_US',
    ogImage: '/og-image.jpg',
    pages: {
      home: {
        title: 'Behold No Mold | Mold Remediation on Cape Cod & the South Shore',
        description:
          'Local, family-run mold remediation in Buzzards Bay, MA. Attic, basement, and whole-home mold removal. Free assessment and same-day service. Rated 5.0 on Google.',
      },
      privacy: {
        title: 'Privacy Policy | Behold No Mold',
        description: 'How Behold No Mold collects, uses, and protects your information.',
      },
      terms: {
        title: 'Terms of Service | Behold No Mold',
        description: 'The terms that apply to the Behold No Mold website.',
      },
      '404': {
        title: 'Page Not Found | Behold No Mold',
        description: 'The page you were looking for could not be found.',
      },
    },
  },

  /* -- Privacy -------------------------------------------------------------- */
  privacy: {
    lastUpdated: '24 November 2026',
    entity: 'Behold No Mold',
    contactEmail: 'beholdnomold@gmail.com',
  },
};

/* -- Validate at import. A bad field fails the build. ----------------------- */
const parsed = SiteConfigSchema.parse(config);

export default parsed;
export const siteUrl = parsed.seo.siteUrl;
export const isPreview = parsed.deployment.isPreview;
