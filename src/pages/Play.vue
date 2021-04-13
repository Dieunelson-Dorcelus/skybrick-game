<template>
  <div class="Play">
    <h1>Play</h1>
  </div>
</template>

<script>
export default {
  name: 'Play',
  props: {},
  mounted () {
    this.$music.MenuMusic.pause()
    this.$music.GameMusic.autoplay = true
    this.$music.GameMusic.loop = true
    this.$music.GameMusic.play()
  },
  destroyed () {
    this.$music.GameMusic.pause()
    this.$music.GameMusic.currentTime = 0
    this.$music.MenuMusic.currentTime = 0
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
