const state = {
	info: {
		first_name: '',
		last_name: '',
		email_address: ''
	}
};

export const users = {
	state,
	getters: {
		getUserInfo: state => {
			return state.info;
		}
	},
	mutations: {
		setUserFirstName(state, payload) {
			state.info.first_name = payload
		},
		setUserLastName(state, payload) {
			state.info.last_name = payload
		},
		setUserEmailAddress(state, payload) {
			state.info.email_address = payload
		},
		updateUserInfo(state, payload) {
			Object.assign(state.info, payload)
    }
	},
	actions: {}
};