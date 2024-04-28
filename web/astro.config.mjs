import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://xandermcleod.com',
  outDir: './dist',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'static',
  adapter: netlify(),
  image: {
    domains: ['portfolio-s3.fly.storage.tigris.dev'],
  },
});
