<template>
  <header>
    <h3>{{ title }}</h3>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'nienie电影'
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  background-color: #e54847;
  color: #fff;
  line-height: 45px;
}
</style>