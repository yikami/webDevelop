import Vue from "vue";
import App from "./App.vue";
import axios from "./plugin/vueAxios";

Vue.config.productionTip = false;

console.log(axios);
Vue.use(axios);

var vue = new Vue({
  render: h => h(App)
}).$mount("#app");

console.log(vue);