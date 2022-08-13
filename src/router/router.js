import Vue from 'vue';
import VueRouter from 'vue-router';
import DataViewer from './../pages/DataViewer';
import OneMap from './../pages/OneMap';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: DataViewer,
        },
        {
            path: '/onemap',
            component: OneMap,
        },
    ],
    mode: 'history'
});