import Vue from 'vue'
import App from './App.vue'
import Search from './components/Search.vue'
import Artist from './components/Artist.vue'
import Events from './components/Events.vue'


Vue.config.productionTip = false
Vue.component('Search', Search)
Vue.component('Artist', Artist)
Vue.component('Events', Events)


new Vue({
  render: h => h(App),
}).$mount('#app')
