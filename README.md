# Verixa Services Website

This is a **static website** built with **Astro + Tailwind CSS** and deployed to **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated into `dist/`.

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

- installs dependencies
- builds the site (`npm run build`)
- deploys `dist/` to GitHub Pages

In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.

### Custom domain

If you use a custom domain, keep/update `CNAME` (it is copied into the build output via `public/CNAME`).


