<template>
    <div class="mapview-pannel">
        <div id="mapview"></div>
        <div id="basemapToggle"></div>
        <div id="scaleBar"></div>
        <div id="zoom"></div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
//import Vue from 'vue';

const options = {      //定义一个包含有JS API中js开发包和css样式文件的对象
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};

export default {
    name: 'MapView',
    components: {},
    mounted: function () {
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar, Zoom] = await loadModules(
                ['esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/widgets/BasemapToggle',
                    'esri/widgets/ScaleBar',
                    'esri/widgets/Zoom'
                ],
                options);

            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
                        title: "Basemap"
                    })
                ],
                title: "basemap",
                id: "basemap"
            });
            const map = new Map({
                basemap: basemap,    //语句可以简写为：basemap,
            });

            const mapView = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [112.556971, 37.878129],
            });

            //实例化底图切换控件
            const basemapToggle = new BasemapToggle({
                view: mapView,
                nextBasemap: "hybrid",
                container: 'basemapToggle',
            });
            mapView.ui.add(basemapToggle);

            //实例化比例尺
            const scaleBar = new ScaleBar({
                view: mapView,
                container: 'scaleBar',
                unit: 'metric',
            });
            mapView.ui.add(scaleBar);
            //实例化缩放控件
            const zoom = new Zoom({
                container: "zoom",
                view: mapView,
            });
            mapView.ui.add(zoom);

            mapView.ui.components = [];   //该命令是取消地图右上角的放大缩小窗口;
            this.$store.commit('_setDefaultView', mapView);

        }
    }
}
</script>

<style>
.mapview-pannel,
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}

#basemapToggle {
    position: absolute;
    right: 15px;
    bottom: 15px;
}

#scaleBar {
    position: absolute;
    left: 15px;
    bottom: 15px;
}

#zoom {
    position: absolute;
    right: 15px;
    bottom: 100px;
}
</style>
