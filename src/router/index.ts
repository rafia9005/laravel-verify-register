import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue'
import DashboardIndex from '@/views/dashboard/Index.vue'
const router = createRouter({
  history: createWebHistory(``),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardIndex
    }
  ]
})

export default router
