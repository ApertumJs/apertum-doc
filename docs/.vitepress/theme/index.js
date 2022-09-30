// .vitepress/theme/index.js
import Layout from './Layout.vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  // root component to wrap each page
  //Layout,

  // this is a Vue 3 functional component
  //NotFound: () => 'custom 404',
  locales: {
    '/': {
      selectLanguageName: 'English',
      label:'espasas'
    },
    '/en/': {
      selectLanguageName: '简体中文',
      label:'espasas'
    },
  },

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
}
