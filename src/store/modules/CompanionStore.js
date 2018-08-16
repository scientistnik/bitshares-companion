import SecureLS from "secure-ls";

const GET_WALLET = 'GET_WALLET';

const wallet = {};

const mutations = {
    [GET_WALLET](state,wallet
    ) {
    
        state.wallet = wallet;
    }
};

const actions = {
    getWallet({commit}, payload) {
        console.log(payload);
        return new Promise((resolve, reject) => {
            let ls = new SecureLS({
                encodingType: "aes",
                isCompression: true,
                encryptionSecret: payload.wallet_pass
            });
            try {
                let wallet = ls.get(payload.wallet_id);
                console.log(wallet);
                commit(GET_WALLET,wallet);
                resolve();
            } catch (e) {
                reject();
            }
        });
    },
}


const getters = {
    getWallet: state => state.wallet,
};


const initialState = {
    wallet: {}
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters,
};