import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import {auth} from './authentication.js'
import RatingView from '@/views/RatingView.vue'
const {check} = auth()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/loginView',
    name: 'LoginView',
    component: LoginView
  },{
    path: '/RatingView',
    name: 'RatingView',
    component: RatingView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  if (to.name == 'About') {
    if(check.value==true){
      next();
    }else {
    next({ name: 'LoginView' });
    } 
  }else{
    next();
  }
});

export default router