import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/TunerView.vue'),
    },
    {
      path: '/camertone',
      component: () => import('@/views/Camertone.vue'),
    },
    {
      path: '/library',
      component: () => import('@/views/Library.vue'),
    },
  ],
})

export default router
