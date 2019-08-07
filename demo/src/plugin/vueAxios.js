import axios from 'axios';

var axiosPlugin = {};
var axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000
});

axiosPlugin.install = function(Vue, options) {
  // 1. 添加全局方法或属性
  Vue.axios = axiosInstance;

  // 2. 添加全局资源
  // Vue.directive('my-directive', {
  //   bind(el, binding, vnode, oldVnode) {
  //     // 逻辑...
  //   }

  // });

  // 3. 注入组件选项
  // Vue.mixin({
  //   created: function() {
  //   }

  // });

  // 4. 添加实例方法或属性
  Vue.prototype.$http = axiosInstance;
};

export default axiosPlugin;