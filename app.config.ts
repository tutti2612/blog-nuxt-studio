// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Kohei Tsuchiya',
    description: 'Kohei Tsuchiya\'s blog',
    image: false,
    // image: {
    //   src: '/social-card-preview.png',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300
    // },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: false
      // logo: {
      //   path: '/32.jpeg', // path of the logo
      //   pathDark: '/32.jpeg', // path of the logo in dark mode, leave this empty if you want to use the same logo
      //   alt: 'Kohei Tsuchiya' // alt of the logo
      // }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'tutti2612',
      github: 'tutti2612',
      // instagram: 'atinuxt',
      // linkedin: {
      //   icon: 'uil:linkedin',
      //   label: 'LinkedIn',
      //   href: 'https://www.linkedin.com/company/nuxtlabs'
      // }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
