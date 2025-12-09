// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  image: {
    // Authorize Astro to optimize images from your R2 domain
    domains: ["media.clmconstructionservices.com"],
  },
});