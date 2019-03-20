import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "../domain/axiosConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lyrics: "Lyrics will appear here after submitting the form."
  },
  mutations: {
    setLyrics(state, payload) {
      state.lyrics = payload.data.lyrics;
    }
  },
  actions: {
    getLyrics(context, payload) {
      HTTP.get(`${payload.band}/${payload.title}`).then(response => {
        context.commit("setLyrics", response);
      });
    }
  },
  getters: {
    outputLyrics: state => {
      return state.lyrics;
    }
  }
});
