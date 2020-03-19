import router from './router'

router.beforeEach(async (to, from, next) => {

  next()

})

router.afterEach((to, from) => {

  // 添加百度统计代码
  if (to.path) {
    window._hmt.push(['_trackPageview', location.pathname + '/#' + to.fullPath]);
  }

})
