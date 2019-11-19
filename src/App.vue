<template>
  <div id = "app">
    <img id = "pokedex" src="./assets/pokedexopen.png">
    <PokedexShell/>
    <PokedexPics/>   
    <PokedexAPI/>    
  </div>
</template>

<script>
import PokedexShell from './components/PokedexShell';
import PokedexPics from './components/PokedexPics';
import PokedexAPI from './components/PokedexAPI';
export default {
  name: 'App',
  components: {
    PokedexShell,
    PokedexPics,
    PokedexAPI
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