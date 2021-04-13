import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'


import App from '@/App.vue'
import MainMenu from '@/pages/MainMenu'
import Play from '@/pages/Play'
import Help from '@/pages/Help'
import Credits from '@/pages/Credits'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/style.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.prototype.$music = {
  MenuMusic: new Audio(require('./assets/music/lose.mp3'), ),
  GameMusic: new Audio(require('./assets/music/game.mp3')),
  LoseMusic: new Audio(require('./assets/music/lose.mp3')),
  WeaponEffect: new Audio(require('./assets/effect/weapon.mp3')),
  HurtEffect: new Audio(require('./assets/effect/hurt.mp3')),
  HitEffect: new Audio(require('./assets/effect/hit.mp3')),
}

Vue.config.productionTip = false

const routes = [
  { path: '/', component: MainMenu },
  { path: '/Play', component: Play },
  { path: '/Help', component: Help },
  { path: '/Credits', component: Credits },
  { path: '/*', redirect:'/' },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
