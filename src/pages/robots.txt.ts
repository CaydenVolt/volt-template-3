import type { APIRoute } from 'astro';
import { isPreview, siteUrl } from '../config/site.config.ts';

/**
 * While `deployment.isPreview` is true, disallow everything so the workers.dev
 * preview can never be indexed. At launch (isPreview: false) allow crawling and
 * point to the sitemap.
 */
export const GET: APIRoute = () => {
  const body = isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap-index.xml\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
