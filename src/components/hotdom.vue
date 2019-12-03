<template>
    <dl @click="$router.push({path:'/detail',query:{id:id}})">
        <dd>
            <img :src="img" alt="">
        </dd>
        <dt>
            <h2>{{title}}</h2>
            <p>作者:{{ren}}</p>
            <p>更新至:{{update}}</p>
            <p>简介:{{msg}}</p>
        </dt>
    </dl>
</template>

<script>
export default {
   props:["id","img","title","ren","update","msg"]
}
</script>

<style>
  dl{
      
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
     margin-top: 10px;
  }
  dl dd{
      width: 30%;
      height: 100%;
       display: flex;
      justify-content: space-around;
      align-items: center;
  }
   dl dd img{
       width: 100%;
       height: 100%;
      
   }

   dl dt{
      width: 50%;
      height: 100%;
       display: flex;
        flex-direction: column;
  }
</style>