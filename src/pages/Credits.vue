<template>
  <div class="Credits">
    <h1>Credits</h1>
  </div>
</template>

<script>
export default {
  name: 'Credits',
  props: {},
  mounted () {
    this.$music.MenuMusic.autoplay = true
    this.$music.MenuMusic.loop = true
    this.$music.MenuMusic.play()
  },
  destroyed () {
    this.$music.MenuMusic.pause()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
