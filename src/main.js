// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'

import axios from 'axios'

//axios.defaults.withCredentials=true   //全局请求头,这是比较常用的携带cookie
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest' //另一个例子
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(ElementUI)
Vue.use(Vuex)
