import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from '../router'
import store from '../store/index'
import axios from 'axios'
import Vuex from "vuex"
import VueAxios from 'vue-axios'



 


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
