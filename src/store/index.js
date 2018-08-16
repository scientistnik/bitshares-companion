import Vue from 'vue';
import Vuex from 'vuex';     
import CompanionStore from './modules/CompanionStore.js';
import vb from 'vuex-bitshares';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        CompanionStore
    }
  });
vb(store);

export default store;