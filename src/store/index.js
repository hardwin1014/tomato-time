import { createStore, useStore as baseUseStore } from 'vuex'
import numFactoryModule from './modules/NumFactory'

export const store = createStore({
  state: {
    text: 'This is Vuex Root.state.text'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    numFactoryModule
  }
})
export const key = Symbol('vue-store')
export function useStore() {
  return baseUseStore(key)
}
// # sourceMappingURL=index.js.map
