import Vue from "vue";
import VueRouter from "vue-router";
import BgFrame from "../views/BgFrame"
Vue.use(VueRouter);

const routes = [
  {
    path: "/bg-frame",
    name: "bg-frame",
    component: () =>
      import("../views/BgFrame.vue")
  },
  {
    path: "/home-page",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"home-page",
        component: ()=>import("../components/HomePage/HomePage.vue"),
        meta:{
          title:"首页"
        },
      }
    ]
  },
  {
    path: "/paging-form",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"paging-form",
        component: ()=>import("../components/PagingForm/PagingForm.vue"),
        meta:{
          title:"分页表格",
        }
      }
    ]
  },
  {
    path: "/tab-page",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"tab-page",
        component: ()=>import("../components/TabPage/TabPage.vue"),
        meta:{
          title:"标签页",
        }
      }
    ]
  },
  {
    path: "/picture-upload",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"picture-upload",
        component: ()=>import("../components/PictureUpload/PictureUpload.vue"),
        meta:{
          title:"图片上传"
        }
      }
    ]
  },
  {
    path: "/published",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"published",
        component: ()=>import("../components/Published/Published.vue"),
        meta:{
          title:"已发布",
        }
      }
    ]
  },
  {
    path: "/publish-article",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"publish-article",
        component: ()=>import("../components/PublishArticle/PublishArticle.vue"),
        meta:{
          title:"发布文章",
        }
      }
    ]
  },
  {
    path: "/statistics",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"statistics",
        component: ()=>import("../components/Statistics/Statistics.vue"),
        meta:{
          title:"统计",
        }
      }
    ]
  },
  {
    path: "/export-excel",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"export-excel",
        component: ()=>import("../components/ExportExcel/ExportExcel.vue"),
        meta:{
          title:"导出excel表格"
        }
      }
    ]
  },
  {
    path: "/test-paging",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"test-paging",
        component: ()=>import("../components/PagingForm/testPaging.vue")
      }
    ]
  },
  {
    path:"/published-edit",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"published-edit",
        component: ()=>import("../components/PublishedEdit/PublishedEdit.vue"),
        meta:{
          title:"编辑页面"
        }
      }
    ]
  },
  {
    path:"/check",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"check",
        component: ()=>import("../components/Check/Check.vue"),
        meta:{
          title:"查看页面"
        }
      }
    ]
  },
  {
    path:"/exit",
    component: BgFrame,
    children:[
      {
        path:"",
        name:"exit",
        component: ()=>import("../components/Exit/Exit.vue"),
        meta:{
          title:"退出系统"
        }
      }
    ]
  },
  {
    path: "/",
    name: "login",
    component: ()=>import("../components/Login/Login.vue"),
    meta:{
      title:"登录界面"
    }
  },
  {
    path: "/register",
    name: "register",
    component: ()=>import("../components/Register/Register.vue"),
    meta:{
      title:"注册界面"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// let user = this.$store.state.userInfo.username;
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  let user = localStorage.getItem('username')
  // let user = this.$store.state.userInfo.username;
  if (to.path === '/' || to.path === '/register') {
    next()
  } else {
    user? next() : next('/')
  }
})
export default router;
