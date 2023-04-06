import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/episodes',
      name: 'Episodes',
      component: () => import('../views/Episodes.vue')
    },
    {
      path: '/personnages',
      name: 'Personnages',
      component: () => import('../views/Personnages.vue')
    },
    {
      path: '/statutperso/:id',
      name: 'fiche-perso',
      component: () => import('../views/FichePerso.vue')
    }
  ]
})

export default router
