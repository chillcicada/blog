// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Alpine',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300,
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'chillcicada', // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: true,
        text: '',
        link: '',
      },
      navigation: true,
      alignment: 'center',
      message: 'Copyright © 2024 - ChillCicada | CC BY-NC-SA 4.0',
    },
    socials: {
      github: 'chillcicada',
    },
    form: {
      successMessage: 'Message sent. Thank you!',
    },
  },
})
