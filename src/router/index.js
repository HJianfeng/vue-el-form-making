import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../demo/Home.vue'
import LanguageView from './LanguageView.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: LanguageView,
      children: [
        {
          path: '',
          name: 'index',
          // component: Home
          component: () => import( /* webpackChunkName: "Home" */  '../demo/Home.vue')
        }
      ]
    }
  ]
})