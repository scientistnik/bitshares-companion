import Vue from 'vue';
import Vuex from 'vuex';

import vb from 'vuex-bitshares';

Vue.use(Vuex);

const store = new Vuex.Store();
vb(store);

export default store;