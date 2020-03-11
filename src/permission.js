import router from './router'

router.beforeEach(async (to, from, next) => {

  next()

})

router.afterEach(() => {

  // 添加百度统计代码
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d0810e7d9a657a901832451f6d199c82";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

})
