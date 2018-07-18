<template>
	 <div class="container mt-5">
      <form class="mb-5" @submit.prevent="agregarTarea">
        <input class="mr-2 text-center" type="text" placeholder="Escribe tu nombre" v-model="tareas.nombre">
        <input class="mr-2 text-center" type="text" placeholder="Escribe tu apellido" v-model="tareas.apellido">
        <select class="mr-3 text-center" v-model="tareas.carrera">
          <option disabled value="" v-bind:value="cursos.value">Selecciona tú carrera</option>
          <option  v-for="curso in cursos">{{curso.name}}</option>
        </select>
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
                <th>Fecha</th>
                <th>Días restantes</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="tarea in tareas">
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.nombre}}</td>
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.apellido}}</td>
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.carrera}}</td>
                <td :class="{tareaRealizada: tarea.hecho}">{{tarea.titulo}}</td>
                <td>{{fecha}}</td>
                <td>{{diferencia}}</td>
                <!--<td><button @click="eliminarTarea(index)" class="btn btn-danger ">eliminar</button></td>-->
              </tr>
            </tbody>
           </table>
            </div>
          </div>
        </div>
</template>
<script>
const moment = require('moment');   
export default {
  name: 'vueTable',
  data () {
    return {
      cursos: [
          { id: 1, name: 'Ing Sistemas' },
          { id: 2, name: 'Diseño' },
          { id: 3, name: 'Financiera' },
          { id: 4, name: 'Ing Mecatronica' },
          { id: 5, name: 'Administrativa' }],
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
        icon: "success",
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
  },
  computed:{
    fecha(){
      let inicio = moment().subtract(10, 'days').calendar()
      return inicio
    },
    diferencia(){
      let fecha1 = moment().subtract(31, 'days').calendar()
      let fecha2 = moment().add(-1, 'days');
      return fecha2.diff(fecha1, 'days')+' Días';
    }
  }
}
</script>