import Vue from 'vue'
import App from './App.vue'
// import 'xui/theme-chalk/index.css'
// import { Alert } from 'xui'

// Vue.use(Alert)

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#app')