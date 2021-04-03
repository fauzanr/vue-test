import VueRouter from 'vue-router'
import Users from "../components/Users";
import UserDetail from "../components/UserDetail";
import Calculator from "../components/Calculator";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/users/:id',
    component: UserDetail,
  },
  {
    path: '/calculator',
    component: Calculator,
  },
  {
    path: '*',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') return next('/users')
  next()
})

export default router