<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button v-for="btn in pagebtns"
    @click="changeBtn(btn)"
    :class="[{currentPage:btn == currentPage}, 'pagebtn']">
      {{btn}}
    </button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Pagination',
    data () {
      return {
        pagebtns:[1, 2, 3, 4, 5, '......'],
        currentPage: 1
      }
    },
    methods: {
      changeBtn(page){
        if(typeof page != 'number'){
          switch(page.target.innerText){
            case '上一页':
              $('button.currentPage').prev().click()
              break;
            case '下一页':
              $('button.currentPage').next().click()
              break;
            case '首页':
              this.pagebtns = [1,2,3,4,5,'......'];
              this.changeBtn(1);
              break;
            default:
              break;
          }
          return
        }
        this.currentPage = page
        if(page == this.pagebtns[4]){
          //移除第一个元素
          this.pagebtns.shift()
          //添加最后一个
          this.pagebtns.splice(4,0,this.pagebtns[3]+1)
        }else if(page == this.pagebtns[0] && page != 1){
          //在第一个位置加一个
          this.pagebtns.unshift(this.pagebtns[0]-1)
          //移除最后一个
          this.pagebtns.splice(5,1)
        }
        this.$emit('handlelist', this.currentPage)
      }
    }
  }
</script>

<style scoped>
  .pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  .pagination button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 52px;
    height: 29px;
    font-size: 13px;
    margin: 0 1px;
  }

  .pagination .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .pagination .currentPage {
    color: white;
    background-color: #80bd01;

  }
</style>


