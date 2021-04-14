<template>
  <div id="app">
    <router-view 
      class="Pages"
      @skybrick-weapon-effect="$music.WeaponEffect.play()"
      @skybrick-hurt-effect="$music.HurtEffect.play()"
      @skybrick-hit-effect="$music.HitEffect.play()"
    />
    <div
      v-if="$route.name!=='MainMenu'"
      class="BottomMenu">
      <b-button
        class="Menu"
        variant="outline-primary"
        @click="$router.push({name: 'MainMenu'})">
        Back to Menu
      </b-button>
    </div>
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

<style scoped>
.BottomMenu{
  width: 300px;
  margin-right: 20px;
  float: right;
}
.Pages{
  min-height: 700px;
}
</style>
