import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://verixaservices.com',
  integrations: [tailwind()],
  build: {
    // Important: keep existing SEO URLs like /services/azure-ai.html
    format: 'file'
  }
});


