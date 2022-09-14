import { createRouter, createWebHashHistory } from 'vue-router'
import ServicesView from '../views/ServicesView.vue'
import HomeOut from '../views/HomeOut.vue'
import HomeView from '../views/HomeView.vue'



const routes = [
  // {
  //   path: '/',
  //   name: 'homeview',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'home',
    component: HomeOut
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/:catchAll(.*)',
    name: 'HomeView',
    component: HomeView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
