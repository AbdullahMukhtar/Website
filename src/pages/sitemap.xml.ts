import type { APIRoute } from 'astro';

type SitemapEntry = {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const ENTRIES: SitemapEntry[] = [
  { path: '/', changefreq: 'monthly', priority: 1.0 },
  { path: '/privacy-policy.html', changefreq: 'yearly', priority: 0.3 },
  { path: '/services/ai-development.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/azure-ai.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/document-ai-ocr.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/computer-vision.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/mobile-app-development.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/services/custom-software-development.html', changefreq: 'monthly', priority: 0.7 }
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


