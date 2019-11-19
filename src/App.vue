<template>
  <div id = "app">
    <img id = "pokedex" src="./assets/pokedexopen.png">
    <PokedexShell/>
        
      <!-- Pokiemon left screen -->
      <!-- Pokedex right screen -->
      <!-- Pokedex searchbox -->

    <PokedexPics/>
    
  </div>
</template>

<script>
import PokedexShell from './components/PokedexShell';
import PokedexPics from './components/PokedexPics';
export default {
  name: 'App',
  components: {
    PokedexShell,
    PokedexPics
  }
}
</script>

<style scoped>

  #pokedex {
    font-size: 1em;
  }

  #app {
      display: block;
      text-align: center;
  }

    #picpokemon {
      text-align: center;
  }
</style>