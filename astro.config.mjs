import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare/server';

export default defineConfig({
  site: 'https://siam-healing.example.com',
  output: 'static',
  adapter: cloudflare(),
  scopedStyleStrategy: 'where'
});
