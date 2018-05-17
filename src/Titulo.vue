<template>
  <header class="header">
    <div class="container">
      <nav class="text-center">
        <h1>{{title}}</h1>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'titulo',
  data () {
    return {
      title: 'Biblioteca CUN'
    }
  }
}
</script>