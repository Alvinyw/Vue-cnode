import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Register from '../components/Register'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo
      }
    },
    {
      name: 'Register',
      path: '/register',
      components: {
        main: Register
      }
    },
    {
      path: '*',
      name: 'notFound',
      redirect: {
        name: 'root',
      },
    },
  ]
})
