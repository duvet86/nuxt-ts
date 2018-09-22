export const rootState = () => ({
  people: []
});

export const mutations = {
  setPeople(state: any, people: any) {
    state.people = people;
  }
};

export const actions = {
  async nuxtServerInit({ commit }: any, { app }: any) {
    const people = await app.$axios.$get("./random-data.json");
    commit("setPeople", people.slice(0, 10));
  }
};
