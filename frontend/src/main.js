import Vue from "vue";
import App from "./App.vue";
import router from './router';
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
