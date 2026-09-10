import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://<username>.github.io/<repository-name>',
  base: '/website-1/',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
