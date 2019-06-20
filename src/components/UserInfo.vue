<template>
  <div class="UserInfo">
    <!-- 在数据未返回的时候显示正在加载的 gif -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <div class="userInfomation">
      <section>
        <img :src="userinfo.avatar_url" alt="">
        <span>{{userinfo.loginname}}</span>
        <p>{{userinfo.score}}积分</p>
        <p class="time">注册时间：{{userinfo.create_at | fromatDate}}</p>
      </section>
      <div class="replies">
        <p>最近参与的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies">
            <router-link :to="{
              name: 'post_content',
              params: {
                id: item.id
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>最近创建的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics">
            <router-link :to="{
              name: 'post_content',
              params: {
                id: item.id
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        isLoading: false,
        userinfo: {}
      }
    },
    methods: {
      getData: function(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res=>{
            if(res.data.success == true){
              this.isLoading = false
              this.userinfo = res.data.data
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getData()
    }
  }
</script>

<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation section span {
    font-size: 15px;
    color: #778087;
    position: relative;
    top: -15px;
    left: 5px;
  }
  .userInfomation section p.time {
    color: #ababab;
  }
  .userInfomation img {
    width: 40px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.8rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #0088cc;
    font-size: 15px;
    text-decoration: none;
  }
  .userInfomation > div >ul > li > a:hover {
    color: #005580;
  }
</style>

