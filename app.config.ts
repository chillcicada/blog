// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: "Cc's Blog",
    description: 'A boring blog.',
    image: {
      src: 'https://img.chillcicada.com/i/2024/05/03/66348e20d2e4e.webp',
      alt: 'An image showcasing my past.',
      width: 400,
      height: 300,
    },
    header: {
      // 'left' | 'center' | 'right'
      position: 'right',
      logo: {
        path: '/logo.svg',
        pathDark: '/logo-dark.svg',
        alt: 'chillcicada',
      },
    },
    footer: {
      credits: {
        enabled: false,
        // text: '',
        // link: '',
      },
      navigation: true,
      alignment: 'center',
      message: 'Copyright © 2024 - ChillCicada | CC BY-NC-SA 4.0',
    },
    socials: {
      github: 'chillcicada',
      youtube: '@chillcicada',
      NCM: {
        icon: 'tabler:brand-netease-music',
        label: '-Semi-',
        href: 'https://music.163.com/#/user/home?id=1403030074',
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!',
    },
    backToTop: {
      icon: 'material-symbols:arrow-upward',
      text: 'Back To Top',
    },
  },
})
