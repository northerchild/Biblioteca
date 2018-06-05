<template>
	 <div class="container mt-5">
      <form class="mb-5" @submit.prevent="agregarTarea">
        <input class="mr-2 text-center" type="text" placeholder="Escribe tu nombre" v-model="tareas.nombre">
        <input class="mr-2 text-center" type="text" placeholder="Escribe tu apellido" v-model="tareas.apellido">
        <input class="mr-2 text-center" type="text" placeholder="Carrera que estudias" v-model="tareas.carrera">
        <input class="mr-2 text-center" type="text" placeholder="Escribe el libro que buscas" v-model="tareas.libro">
      <input class="" type="submit" value="Añadir Libro" class="btn btn-success">
       </form>
          <div class="row">
            <div class="col">
             <table class="table">
            <thead class="table-bordered">
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Carrera</th>
                <th>Libro</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="tarea in tareas">
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.nombre}}</td>
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.apellido}}</td>
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.carrera}}</td>
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
        nombre: 'Pepito',
        apellido: 'Perez',
        carrera: 'Contaduria',
        titulo: 'libro',
        hecho: false
      },
      {
        nombre: 'Sutanito',
        apellido: 'Gonzales',
        carrera: 'Sistemas',
        titulo: 'libro',
        hecho: false
      },
      {
        nombre: 'Ximena',
        apellido: 'Gutierrez',
        carrera: 'Comunicación',
        titulo: 'libro',
        hecho: false
      },
      ]
    }
  },methods:{
    agregarTarea:function(tarea){
      this.tareas.push({
        titulo: this.tareas.libro,
        nombre: this.tareas.nombre,
        apellido: this.tareas.apellido,
        carrera: this.tareas.carrera,
        hecho: false,
      })

      swal({
        title: "Solicitaste el libro: " + this.tareas.libro,
        text: "¡Recuerda las fechas de entrega!",
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