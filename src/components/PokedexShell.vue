<template>
  <div class = "welcome">
    <h1 id = "welcometext">{{ msg }}</h1>
    <div id = "pokemonname" v-for = "eachpokemon in pokemon">
      {{ eachpokemon.name }}
    </div>
  </div>
</template>

<script>

export default {  
  name: 'pokedexshell',
  data () {
    return {
      msg: 'Welcome to your Pokedex'
    }
  },
  computed: {
    pokemon(){
      return this.$store.state.pokemon
    }
  }
}
</script>

<style scoped>
  #welcometext {
    color: red;
  }

  #pokemonname {
    font-size: 5rem;
    color: green;
  }
</style>
