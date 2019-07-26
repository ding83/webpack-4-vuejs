import Vue from 'vue'
import Vuex from 'vuex'
import { users } from './modules/users'

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		errors: '',
		error_input: []
	},
	modules: {
		users: users
	},
	getters: {},
	mutations: {},
	actions: {}
});