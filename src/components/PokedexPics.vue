<template>
  <div>
    <h1 id = "pictext">{{ msg }}</h1>  
    hello world
    <div id = "picpokemon" v-for = "eachpokemon in pokemon">
        <div id = "piclinks" v-for = "pic in eachpokemon.sprites">
             <img  v-bind:src="pic"/>             
        </div>
    </div>
  </div>  
</template>

<script>

export default {   
  data () {
    return {
      msg: 'Picture links'
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
  #pictext {
    color: red;
  }

  #piclinks {
    font-size: 1rem;
    color: green;
    float: left;    
        
  }
    #picpokemon {
      width: 100%;
  }

</style>
