<template>
  <div id="app">
    <el-container class="app-Out-pannel">
      <el-header class="sys-header">系统标题</el-header>
      <el-container class="app-Content-pannel">
        <el-aside width="200px">左侧菜单</el-aside>
        <el-main>地图区域</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

.app-Out-pannel,
.app-Content-pannel {
  height: 100%;
}

.sys-header {
  background-color: #409EFF;
}
</style>
