<template>
	 <div class="container mt-5">
      <form class="mb-5" @submit.prevent="agregarTarea">
      <input class="mr-5 text-center" type="text" placeholder="Escribe el libro que buscas" v-model="tareas.titulo">
      <input type="submit" value="Añadir tarea" class="btn btn-success">
       </form>
          <div class="row">
            <div class="col">
             <table class="table">
            <thead class="table-bordered">
              <tr>
                <th>¡Hecho!</th>
                <th>Tarea</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="tarea in tareas">
                <td><input type="checkbox" v-model="tarea.hecho"></td>
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.titulo}}</td>
                <td><button @click="eliminarTarea(index)" class="btn btn-danger ">Eliminar</button></td>
              </tr>
            </tbody>
           </table>
            </div>
          </div>
        </div>
</template>
<script>
export default {
  name: 'vueTable',
  data () {
    return {
      tareas:[
      {
        titulo: 'libro',
        hecho: false
      },
      {
        titulo: 'libro 2',
        hecho: false
      },
      {
        titulo: 'libro 3',
        hecho: false
      },
      ]
    }
  },methods:{
    agregarTarea:function(tarea){
      this.tareas.push({
        titulo: this.tareas.titulo,
        hecho: false,
      })
      swal({
        title: "Creaste la tarea: " + this.tareas.titulo,
        text: "¡Vamos con todo, creemos en ti!",
      }),
        this.tareas.titulo = ''
    },
    eliminarTarea:function(index){
      swal({
            title: "¿Estas seguro de borrar la tarea?",
            text: "¡Revisa antes de finalizar la tarea!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) 
            {
              this.tareas.splice(index,1),
              swal("¡Felicidades terminaste la tarea!", "¡Recuerda tomar un descanso!",
              {
                icon: "success",
              });
            } 
            else 
            {
              swal("No se ha borrado la tarea!");
            }
           
          });
    }
  }
}
</script>