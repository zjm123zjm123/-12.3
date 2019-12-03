import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    list:[]
  },
  mutations: {
    setList(state,data){
     state.data=data
    },
    setData(state,id){
       state.list=state.data.filter(item=>item.id===id)[0];

    }
  },
  actions: {
    getList(context){
     axios.get("/getbook").then(res=>{
      context.commit("setList",res.data)
     })
    }
  },
  modules: {
  }
})
