import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../demo/Home.vue'
import Layout from './Layout.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          // component: Home
          component: () => import( /* webpackChunkName: "Home" */  '../views/Home.vue')
        }
      ]
    }
  ]
})