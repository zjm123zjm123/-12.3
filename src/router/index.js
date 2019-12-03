import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
   path:"/",
   redirect:"/home"
  },
  {
    path: '/home',
    component:()=>import("../views/home/home.vue"),
    children:[
      {
        path:"home-page",
        component:()=>import("../views/home/home-page/home-page.vue")
      },
      {
        path:"care",
        component:()=>import("../views/home/care/care.vue")
      },
      {
        path:"message",
        component:()=>import("../views/home/message/message.vue")
      },
      {
        path:"my",
        component:()=>import("../views/home/my/my.vue")
      }
    ]
  },{
    path:"/detail",
    component:()=>import("../views/detail/detail.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
