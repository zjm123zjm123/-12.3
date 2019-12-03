<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<style lang="scss">
   *{
     padding: 0;
     margin: 0;
     list-style: none;
     text-decoration: none;
   }

   html,body,#app{
     width: 100%;
     height: 100%;
   }
   #app{
     display: flex;
     flex-direction: column;
   }
</style>
