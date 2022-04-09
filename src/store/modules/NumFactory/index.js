// Create a new store Modules.
const numFactoryModule = {
    namespaced: true,
    state: {
        name: 'numFactory-module',
        count: 1
    },
    mutations: {
        DOUBLE_COUNT(state) {
            state.count *= 2;
        }
    },
    actions: {}
};
export default numFactoryModule;
//# sourceMappingURL=index.js.map