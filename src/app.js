import Vue from 'vue'
import AppComponent from './components/AppComponent.vue'
import AnotherComponent from './components/AnotherComponent.vue'
import store from './store'
import './assets/sass/introComponent.scss'

Vue.component('app-component', AppComponent);
Vue.component('another-component', AnotherComponent);

const app = new Vue({
	el: '#app',
	store
});