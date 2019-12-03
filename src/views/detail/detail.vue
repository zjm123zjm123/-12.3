<template>
  <div class="det">
    <h3 class="head">
     详情
    </h3>
    <div class="cont">
    
    <dl>
      <dd>
        <img :src="list.img" alt="">
      </dd>
      <dt><p>{{list.title}}</p><p>{{list.ren}}</p><p>{{list.update}}</p></dt>
    </dl>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import {mapState,mapMutations} from "vuex"
export default {
  // data(){
  //   return{
  //     list:[]
  //   }
  // },
  //  mounted(){
  //    Axios.get("/getdetail",{
  //      params:{
  //        id:this.$route.query.id
  //      }
  //    }).then(res=>{
  //    this.list=res.data[0]
  //      console.log(res.data)
  //    })
  //  },
  computed:{
    ...mapState(["list"])
  },
  created(){
    this.setData(this.$route.query.id)
  }
  ,
  methods:{
    ...mapMutations(["setData"])
  }
   
}
</script>

<style lang="scss" scoped>
 .det{
   width: 100%;
   height:100%;
 }
 .head{
   width: 100%;
   height:40px;
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
</style>