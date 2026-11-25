import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { siteUrl } from './src/config/site.config.ts';

// https://astro.build/config
export default defineConfig({
  /**
   * Production origin. Drives canonical URLs and the generated sitemap.
   * Change it in `src/config/site.config.ts` -> `seo.siteUrl`, not here.
   */
  site: siteUrl,

  /**
   * Fully static. Every page is pre-rendered to HTML at build time and the whole
   * `dist/` folder is uploaded to Cloudflare as Workers static assets (see
   * `wrangler.toml`). No adapter, no Worker script: the brief has no server-side
   * code, so serving the assets directly is cheaper and simpler.
   */
  output: 'static',

  build: {
    // Emit `/privacy/index.html` so clean URLs work with a trailing slash.
    format: 'directory',
  },

  image: {
    responsiveStyles: true,
  },

  integrations: [
    sitemap({
      // Legal pages are served `noindex`; keep them out of the sitemap so search
      // engines are not sent contradictory signals.
      filter: (page) => !/\/(privacy|terms)\/?$/.test(page),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
