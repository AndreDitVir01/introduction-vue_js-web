import Vue from 'vue'
// import App from './App.vue'
// import App from './State-App.vue'
// import App from './Mutations-App.vue'
import App from './Actions-App.vue'
// import store from './store'
// import store from './store/state-index'
// import store from './store/mutations-index'
import store from './store/actions-index'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
