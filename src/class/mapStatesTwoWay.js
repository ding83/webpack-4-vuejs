import { mapState } from 'vuex'

export default function mapStatesTwoWay (states, callback) {
    const mappedStates = mapState(states)
    const res = {}

    for (const key in mappedStates) {
        res[key] = {
            get () {
                return mappedStates[key].call(this)
            },
            set (value) {
                callback.call(this, { [key]: value })
            }
        }
    }

    return res
}