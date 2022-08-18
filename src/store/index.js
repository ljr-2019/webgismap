import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {

    _defaultView: ' ',       //默认地图view
    _defaultMapTreeVisible: false,  //增加地图的显隐
};

const getters = {

    _getDefaultView() {           //名字随意取
        return state._defaultView;
    },
    _getDefaultMapTreeVisible() {           //名字随意取
        return state._defaultMapTreeVisible;
    }
};

const mutations = {

    _setDefaultView(state, value) {
        state._defaultView = value;
    },
    _setDefaultMapTreeVisible(state, value) {
        state._defaultMapTreeVisible = value;
    }
};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
});

export default store;