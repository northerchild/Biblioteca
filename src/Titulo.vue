<template>
  <header class="header">
    <div class="container">
      <nav class="text-center">
        <h1>{{title}}</h1>
        <h2>{{fecha}}</h2>
      </nav>
    </div>
  </header>
</template>

<script>
const moment = require('moment'); 
export default {
  name: 'titulo',
  data () {
    return {
      title: 'Biblioteca CUN',
      moment:moment
    }
  },
  computed:{
    fecha(){
      let inicio = moment(new Date()).local().format('MMMM Do YYYY');
      return inicio
    }
  }
}
</script>