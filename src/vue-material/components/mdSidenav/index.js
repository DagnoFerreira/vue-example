import mdSidenav from './mdSidenav.vue';
import mdSidenavTheme from './mdSidenav.theme';

export default function install(Vue) {
  Vue.component('md-sidenav', Vue.extend(mdSidenav));

  window.VueMaterial.styles.push(mdSidenavTheme);
}
