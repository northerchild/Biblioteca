import Vue from 'vue'
import App from './App.vue'
//Dependencias De desarrollo
import JQuery from 'jquery/dist/jquery.js'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import SweetAlert from 'sweetalert/dist/sweetalert.min.js'
//Importar Modulos Front-End o vista
import Titulo from './Titulo.vue'
import Table from './Table.vue'
import Footer from './Footer.vue'
Vue.component('titulo',Titulo);
Vue.component('vueTable',Table);
Vue.component('vueFooter',Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
