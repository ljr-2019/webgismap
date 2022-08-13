<template>
  <div id="app">
    <el-container class="app-Out-pannel">
      <el-header class="sys-header">
        <span>项目一张图开发系统</span>
      </el-header>
      <el-container class="app-Content-pannel">
        <el-aside class="sys-menu">
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            @select="handleMenuSelest" :collapse="true" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-monitor"></i>
              <span slot="title">首页大屏</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-picture-outline"></i>
              <span slot="title">一张图</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="sys-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuSelest(index) {
      console.log(index);
      if (index === '1') {
        //跳转到首页大屏
        this.$router.push('/');
      } else if (index === '2') {
        //跳转一张图
        this.$router.push('/onemap');
      }
    }
  },
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
  background-color: #303133;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.sys-menu {
  background-color: #606266;
  width: 64px !important;
  overflow: hidden !important;
  /*去掉下面的滚动条*/
}

.sys-content {
  padding: 5px !important;
}
</style>
