<template>
    <div class="maptools-view">
        <span class="maptools-item" @click="handleMapToolsitemClick" id="xzqh">行政区导航 </span>
        <span class="maptools-item" @click="handleMapToolsitemClick" id="maptree">目录树管理 </span>
        <span class="maptools-item" @click="handleMapToolsitemClick" id="distence">距离测量 </span>
        <span class="maptools-item" @click="handleMapToolsitemClick" id="area">面积量测</span>
        <span class="maptools-item" @click="handleMapToolsitemClick" id="clear">清除 </span>
    </div>
</template>

<script>
export default {
    name: 'MapTools',
    methods: {
        handleMapToolsitemClick(e) {
            console.log(e.target.id);
            switch (e.target.id) {
                case 'xzqh':
                    break;
                case 'maptree':
                    this.open();
                    break;
                case 'distence':
                    break;
                case 'area':
                    break;
                case 'clear':
                    break;
                default:
                    break;
            }
        },
        open() {
            const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
            this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
        }
    }
};
</script>


<style scoped>
.maptools-view {
    position: absolute;
    /* width: 400px; */
    padding: 0 15px;
    height: 30px;
    background-color: #fff;
    top: 20px;
    right: 10px;
}

.maptools-item {
    line-height: 30px;
    margin-left: 15px;
    color: black;
    cursor: pointer;
}

.maptools-item:first-child {
    margin-left: 0;
}
</style>
