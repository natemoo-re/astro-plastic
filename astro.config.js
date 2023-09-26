import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  publicDir: './website/public',
  site: 'https://projects.natemoo.re',
  base: '/astro-plastic/',
  srcDir: './website',
})
