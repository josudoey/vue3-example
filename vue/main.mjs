import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import routes from './routes.mjs'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: routes
})

const vm = window.vm = new Vue({
  router: router
})

vm.$mount('#app')
