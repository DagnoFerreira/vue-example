import mdToolbar from './mdToolbar.vue';
import mdToolbarTheme from './mdToolbar.theme';

export default function install(Vue) {
  Vue.component('md-toolbar', Vue.extend(mdToolbar));

  window.VueMaterial.styles.push(mdToolbarTheme);
}
