<template>
    <div class="maptools-view">
        <span class="maptools-item">行政区导航 </span>
        <span class="maptools-item">距离测量 </span>
        <span class="maptools-item">面积量测</span>
        <span class="maptools-item">清除 </span>
    </div>
</template>

<script>
export default {
    name: 'MapTools',

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
