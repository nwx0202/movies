import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movie')
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/views/cinema')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine')
  },
  {
    path: '/',
    redirect: '/movie',
    name: 'movie',
    component: () => import('@/views/mine')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
