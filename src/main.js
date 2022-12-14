import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify';
import VueCookies from 'vue-cookies'
import vtoast from '@/helper/vtoast'

Vue.config.productionTip = false
Vue.use(VueCookies, { expires: '7d'})
Vue.prototype.$vtoast = vtoast

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
