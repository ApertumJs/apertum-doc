export default {
    title: 'ApertumJS',
    base:'/apertum-doc/',
    locales: {
      /* This is where you place your general locale config */
      '/': {
        lang: 'es-ES',
        label: 'Español',
        description: 'Vite & Vue powered static site generator.',
      },
      '/en/': {
        lang: 'en-US',
        label: 'English',
        description: 'Vite & Vue powered static site generator.',
      }
    },
    
    // Theme related configurations.
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            { icon: 'twitter', link: '...' },
            // You can also add custom icons by passing SVG as string:
            {
              icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
              },
              link: '...'
            }
          ],
        locales: {
          /* This is where you place your theme specific, localized data */
          '/': {
            selectText: 'Idiomas',
            label: 'Español',
            nav: [
              { text: 'Hola', link: '/guide' },
              {
                text: 'Dropdown Menu',
                items: [
                  { text: 'Item A', link: '/item-1' },
                  { text: 'Item B', link: '/item-2' },
                ]
              },
              {
                text: 'Idiomas',
                items: [
                  { text: 'Español', link: '/' },
                  { text: 'English', link: '/en/' },
                ]
              }

            ],
            sidebar: [
                {
                  text: 'Hola',
                  items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                  ]
                }
              ],
            footer: {
              message: 'Released under the MIT License.',
              copyright: 'Copyright © 2019-present Evan You'
            },
            outlineTitle: 'In hac pagina',
            docFooter: {
              prev: 'Pagina prior',
              next: 'Proxima pagina'
            }
          },
          '/en/': {
            // text for the language dropdown
            selectText: 'Languages',
            // label for this locale in the language dropdown
            label: 'English',  
            nav: [
              { text: 'Guide', link: '/guide' },
              {
                text: 'Dropdown Menu',
                items: [
                  { text: 'Item A', link: '/item-1' },
                  { text: 'Item B', link: '/item-2' },
                  { text: 'Item C', link: '/item-3' }
                ]
              },
              {
                text: 'Languages',
                items: [
                  { text: 'Español', link: '/' },
                  { text: 'English', link: '/en/' },
                ]
              }
            ],
            sidebar: [
                {
                  text: 'Guide',
                  items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                  ]
                }
              ],
            footer: {
              message: 'Released under the MIT License.',
              copyright: 'Copyright © 2019-present Evan You'
            }
          },
        },
      }
  }
