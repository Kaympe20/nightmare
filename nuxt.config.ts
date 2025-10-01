// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/index.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Nightmare - November 1-2',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  }
})
