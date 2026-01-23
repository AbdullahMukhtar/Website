import type { APIRoute } from 'astro';
import { getAllSlugs } from '../data/case-studies';

type SitemapEntry = {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const caseStudySlugs = getAllSlugs();

const ENTRIES: SitemapEntry[] = [
  { path: '/', changefreq: 'monthly', priority: 1.0 },
  { path: '/about.html', changefreq: 'monthly', priority: 0.8 },
  { path: '/portfolio.html', changefreq: 'weekly', priority: 0.9 },
  { path: '/karachi-ai-development.html', changefreq: 'monthly', priority: 0.8 },
  { path: '/pakistan-software-house.html', changefreq: 'monthly', priority: 0.8 },
  { path: '/middle-east-ai-services.html', changefreq: 'monthly', priority: 0.8 },
  { path: '/privacy-policy.html', changefreq: 'yearly', priority: 0.3 },
  { path: '/services/ai-development.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/azure-ai.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/document-ai-ocr.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/computer-vision.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/mobile-app-development.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/custom-software-development.html', changefreq: 'monthly', priority: 0.7 },
  ...caseStudySlugs.map((slug) => ({
    path: `/case-studies/${slug}.html`,
    changefreq: 'monthly' as const,
    priority: 0.6
  }))
];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = ({ site }) => {
  const base = site?.href ?? import.meta.env.SITE ?? 'https://verixaservices.com/';
  const lastmod = new Date().toISOString();

  const body = ENTRIES.map(({ path, changefreq, priority }) => {
    const loc = new URL(path, base).href;
    return [
      '  <url>',
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority.toFixed(1)}</priority>`,
      '  </url>'
    ].join('\n');
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${body}\n` +
    `</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  });
};


