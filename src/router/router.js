import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import PostPages from "@/pages/PostPages"
import About from "@/pages/About"
import PostIdPage from "@/pages/PostIdPage"
import PostPagesWithStore from "@/pages/PostPagesWithStore"
import PostPagesCompositionApi from "@/pages/PostPagesCompositionApi"

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPages
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/store',
    component: PostPagesWithStore
  },
  {
    path: '/composition',
    component: PostPagesCompositionApi
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;