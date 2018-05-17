<template>
  <div id="app">
  <titulo></titulo>
   <!--Estructura de las tablas-->   
    <vueTable></vueTable>
    <!--Fin de las tablas-->
    <!--Footer-->
      <vueFooter></vueFooter>
     <!--Fin Footer-->
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      nameApp: 'Biblioteca'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

th,td,p{
  color: #000;
}
.app-form input{
  border-radius: 0;
}
.tareaRealizada {
  text-decoration: line-through;
  text-decoration-color: #ff0000;
}
</style>
