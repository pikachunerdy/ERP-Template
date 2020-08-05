import './bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import router from './router'
import Swal from 'sweetalert2'
window.Swal = Swal;

Vue.use (BootstrapVue)
Vue.use (IconsPlugin)
Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast;

import App from './layouts/App.vue'

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
