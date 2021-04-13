<template>
  <div id="app">
    <router-view 
      @skybrick-play="$music.GameMusic.play()"
      @skybrick-lose="$music.LoseMusic.play()"
      @skybrick-weapon-effect="$music.WeaponEffect.play()"
      @skybrick-hurt-effect="$music.HurtEffect.play()"
      @skybrick-hit-effect="$music.HitEffect.play()"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { },
  data () {
    return {
      
    }
  },
}
</script>

<style>
</style>
