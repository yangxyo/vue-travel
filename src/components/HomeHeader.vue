<template>
  <header>
    <div class="header-left">
      <span class="iconfont back-icon">&#xe663;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe625;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span class="iconfont">&#xe64a;</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader"
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  header
    height: 4rem
    display: flex
    background: $bgColor
    color: #fff
    line-height: 4rem
    .header-left
      width: 2rem
      float: left
      .back-icon
        text-align: center
        font-size: 1rem
    .header-input
      color: #ccc
      background: #fff
      flex: 1
      height: 2rem
      line-height: 2rem
      margin-top: 1rem
    .header-right
      width: 2rem
      float: right
</style>
