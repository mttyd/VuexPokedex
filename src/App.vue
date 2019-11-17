<template>
  <div id = "app">
    <img id = "pokedex" src="./assets/pokedexopen.png">
    <PokedexShell>

      <!-- Pokiemon left screen -->
      <!-- Pokedex right screen -->
      <!-- Pokedex searchbox -->

    </PokedexShell>
  </div>
</template>

<script>
import PokedexShell from './components/PokedexShell';

export default {
  name: 'App',
  components: {
    PokedexShell
  }
}
</script>

<style scoped>

  #pokedex {
    
  }

  #app {
      display: block;
      text-align: center;
  }
</style>