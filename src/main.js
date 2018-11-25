import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'xeicon'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'



import 'xeicon';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
