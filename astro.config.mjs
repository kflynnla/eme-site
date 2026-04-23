import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Per spec §5.2 — English at root, /fr/ and /es/ as additive subdirectories.
// Do NOT prefix English URLs: Search Console data (spec §12.2) shows
// /aluminum-gantry-cranes and the /aluminum-gantry-crane-*-series slugs carry
// the bulk of organic traffic and must not move.
export default defineConfig({
  site: 'https://easilymovedequipment.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      fr: 'en',
      es: 'en',
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
