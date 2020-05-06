import Vue from "vue";
import App from "./App.vue";
import router from './router'
import "./index.js";
import axios from "axios";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
