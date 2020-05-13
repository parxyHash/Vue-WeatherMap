const state = {
  counter: 0,
};

const getters = {
  count: (state) => state.counter,
};
const actions = {
  increment({ commit }) {
    const newCount = ++state.counter;

    commit('setCount', newCount);
  },
  decrement({ commit }) {
    const newCount = --state.counter;

    commit('setCount', newCount);
  },
};
const mutations = {
  setCount: (state, count) => (state.counter = count),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
