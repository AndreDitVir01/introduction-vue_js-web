import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      message: 'Hello Vuex and Vue JS'
  },
  mutations: {
    updateMessage(state, value){
      state.message = value.toUpperCase();
    }
  },
  actions: {
    updateWithNewMessage({ commit }, value){
      commit('updateMessage', value)
    }
  },
  modules: {
  }
})
