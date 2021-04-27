<template>
  <div id="app">
    <div class="fm-header">
      <div class="fm-title" @click="handleHome">快速生成表单</div>
    </div>
    <div  class="fm-container"><router-view/></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleHome () {
      this.$router.push({path: '/'})
    },
  }
}
</script>

<style lang="scss">
.fm-header{
  height: 50px;
  box-shadow: 0 10px 10px rgba(240,242,245, 0.8);
  padding: 0 10px;
  position: relative;
  background: #fff;
  .fm-logo{
    height: 26px;
    vertical-align: middle;
  }
  .fm-title{
    display: inline-block;
    line-height: 50px;
    vertical-align: middle;
    color: #333;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.8;
    margin-left: 6px;
    cursor: pointer;
  }
  .fm-link{
    height: 50px;
    float: right;
    
    a{
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      line-height: 50px;
      font-weight: 500;
      margin-left: 15px;
      
      &:hover{
        opacity: 0.8;
      }

      &.ad{
        color: #f5dab1;
      }
    }

    .action-item{
      display: inline-block;
      margin-left: 15px;
      // .el-dropdown{
      //   // font-size: 16px;
      //   // font-weight: 500;
      // }
      .el-dropdown-link{
        cursor: pointer;
        color: #fff;

        &:hover{
          opacity: 0.8;
        }
      }

      &.action-item-user{
        .el-dropdown-link{
          color: #f5dab1;
        }
      }
    }
  }
}
.fm-container{
  height: calc(100% - 50px);
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html,body{
  height: 100%;
}
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  height: 100%;
}
</style>
