import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueEditor from 'vue2-editor'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueEditor)

Vue.use(ElementUI, { size: 'small' })

import FormMaking from './index'
Vue.use(FormMaking)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
