<template>
<div class="home-page">
  <hotdom v-for="(item,index) in data" :key="index"
   :id="item.id"
   :img="item.img"
   :title="item.title"
   :ren="item.ren"
   :update="item.update"
   :msg="item.msg"
  ></hotdom>
  </div>
</template>

<script>
import axios from "axios" 
import {mapState,mapActions} from "vuex"//引用vuex  结

//引入主件
import hotdom from "../../../components/hotdom.vue"
export default {
  // data(){
  //   return{
  //     data:[]
  //   }
  // },
  //结构数据，拿到数据
  computed:{
   ...mapState(["data"])
  },
  components:{
    hotdom
  },
  //调用方法

  created(){
    this.getList()
  },
  //结构方法
  methods:{
    ...mapActions(["getList"])
  }
  // mounted(){
  //   axios.get("/getbook").then(res=>{
  //     this.data=res.data

  //     // console.log(res.data)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
 .home-page{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
 
</style>