import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyAk_C09Nszih3eGtihwZu3G857ZXfQ7SNI",
      authDomain: "vue10-43704.firebaseapp.com",
      projectId: "vue10-43704",
      storageBucket: "vue10-43704.appspot.com",
      messagingSenderId: "184504756444",
      appId: "1:184504756444:web:7778a06bb2181b6f8c2c19"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')