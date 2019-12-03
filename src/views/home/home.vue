
<template>
  <div class="home">
      <div class="main">
          <router-view></router-view>
      </div>
      <div class="footer">
          <router-link to="/home/home-page">主页</router-link>
          <router-link to="/home/care">关注</router-link>
          <router-link to="/home/message">消息</router-link>
          <router-link to="/home/my">我的</router-link>
      </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .home{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
  }
  .main{
      width: 100%;
      flex: 1;
      overflow: auto;
  }
  .footer{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 5px solid #f8f0f0;
  }
 .footer .router-link-active{
   color: pink;
 }
</style>