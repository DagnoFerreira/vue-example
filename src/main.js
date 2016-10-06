import Vue from 'vue';
import VueMaterial from './vue-material/vue-material';
import App from './App';

VueMaterial.enableAll(Vue);

Vue.use(VueMaterial.MdTheme, {
  default: {
    primary: 'blue',
    accent: 'red'
  },
  indigo: {
    primary: 'indigo',
    accent: 'red'
  },
  brown: {
    primary: 'brown',
    accent: 'red'
  }
});

new Vue({
  el: '#app',
  render: (dom) => {
    return dom(App);
  }
});
