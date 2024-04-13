import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexmcleod.netlify.app',
  outDir: './dist',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'static',
  adapter: netlify(),
  image: {
    domains: ['portfolio-s3.fly.storage.tigris.dev'],
  },
});
