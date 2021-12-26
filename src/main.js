import App from "./app.vue";
import "./index.css";
import routes from './routes'
import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'


export default viteSSR(
  App,
  { routes },
  // eslint-disable-next-line no-unused-vars
  ({ app, router, isClient, url, initialState, initialRoute, request }) => {
    const head = createHead()
    
    app.use(head)

    app.component(ClientOnly.name, ClientOnly)

    // Before each route navigation we request the data needed for showing the page.
    router.beforeEach(async (to, from, next) => {
      if (!!to.meta.state && Object.keys(to.meta.state).length > 0) {
        // This route has state already (from server) so it can be reused.
        // State is always empty in SPA development, but present in SSR development.
        return next()
      }

      next()
    })

    return { head }
  }
)