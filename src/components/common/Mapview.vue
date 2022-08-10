<template>
    <div id="mapview"></div>
</template>

<script>
import { loadModules } from 'esri-loader';
//import Vue from 'vue';

const options = {      //定义一个包含有JS API中js开发包和css样式文件的对象
    url: 'https://js.arcgis.com/4.24/init.js',
    css: 'https://js.arcgis.com/4.24/esri/themes/light/main.css',
};

export default {
    name: 'MapView',
    components: {},
    mounted: function () {
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView'], options);

            const map = new Map({
                basemap: 'osm',
            });

            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [112.556971, 37.878129],
            });

            view.ui.components = [];   //该命令是取消地图右上角的放大缩小窗口；
            console.log(view);
        }
    }
}
</script>

<style>
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
