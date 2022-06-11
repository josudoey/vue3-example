import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes.mjs'

const router = createRouter({
  history: createWebHashHistory(),
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes
})

const app = window.app = createApp({})
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
