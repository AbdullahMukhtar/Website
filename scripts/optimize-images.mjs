import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const srcDir = path.join(ROOT, 'public/images/stock-src');
const outDir = path.join(ROOT, 'public/images/stock');

const targets = [
  { name: 'hero', alt: 'Laptop and code on screen' },
  { name: 'team', alt: 'Team collaborating in an office' },
  { name: 'workspace', alt: 'Developers working together at a desk' }
];

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function optimizeOne(name) {
  const input = path.join(srcDir, `${name}.jpg`);
  const outJpg = path.join(outDir, `${name}.jpg`);
  const outWebp = path.join(outDir, `${name}.webp`);
  const outAvif = path.join(outDir, `${name}.avif`);

  const img = sharp(input).rotate();
  const metadata = await img.metadata();
  const width = Math.min(2000, metadata.width ?? 2000);

  // Create a reasonably large baseline JPG for legacy fallback.
  await img
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outJpg);

  await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outWebp);

  await img
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 50 })
    .toFile(outAvif);
}

async function main() {
  await ensureDir(outDir);
  for (const t of targets) {
    // eslint-disable-next-line no-console
    console.log(`Optimizing ${t.name}...`);
    await optimizeOne(t.name);
  }
  // eslint-disable-next-line no-console
  console.log('Done.');
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});


