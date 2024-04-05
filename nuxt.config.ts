import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/alpine',
  ],

  modules: [
    '@nuxtjs/plausible',
    '@nuxt/devtools',
  ],

  css: [
    resolve('./assets/style.css'),
  ],

  devtools: {
    enabled: false,
  },
})
