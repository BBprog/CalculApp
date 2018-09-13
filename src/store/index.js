import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const colors = ['black', 'red', 'green', 'blue', 'yellow', 'purple']

export default new Vuex.Store({
  state: {
    operations: [],
    results: [],
    nbItemsPerCard: 5
  },
  mutations,
  actions,
  getters
})
