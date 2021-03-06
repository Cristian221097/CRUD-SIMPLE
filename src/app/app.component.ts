import { Component } from '@angular/core';
import {Empleado} from './Modelos/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public empleados:Empleado[]=[
    {id:1,nombre:'Cristian',apellido:'Amancio',edad:23,sueldo:5000},
    {id:2,nombre:'emeli',apellido:'Amancio',edad:18,sueldo:8000},
    {id:3,nombre:'Eunice',apellido:'herra',edad:39,sueldo:5000}

  ];

  empleadoSeleccionado:Empleado = new Empleado();

  guardarEditarEmpleado()
  {
    if(this.empleadoSeleccionado.id == 0 ){
      this.empleadoSeleccionado.id = this.empleados.length + 1;
      this.empleados.push(this.empleadoSeleccionado);

    }
   
    this.empleadoSeleccionado = new Empleado();
    
  }

  eliminarEmpleado(){

    if(confirm("estas seguro de borrar este empleado?")){
      this.empleados = this.empleados.filter(x => x !=this.empleadoSeleccionado);
      this.empleadoSeleccionado =  new Empleado();

    }

   
  }

  clickListaEmpleado(empleado)
  {

    this.empleadoSeleccionado = empleado;

    let verAgregarEmpleado = document.getElementById('verAgregarEmpleado');
    let contenedorAgregar = document.getElementById('ContenedorAgregar');

    contenedorAgregar.style.display = "block";
    verAgregarEmpleado.style.display = "none";



  }


  presentarEmpleado(){
    let contenedorAgregar = document.getElementById('ContenedorAgregar');
    let verAgregarEmpleado = document.getElementById('verAgregarEmpleado');

    contenedorAgregar.style.display = "none";
    verAgregarEmpleado.style.display = "block";
  }

  vistaAgregarEmpleado()
  { 
    let contenedorAgregar = document.getElementById('ContenedorAgregar');
    let verAgregarEmpleado = document.getElementById('verAgregarEmpleado');

    contenedorAgregar.style.display = "block";
    verAgregarEmpleado.style.display = "none";

  }



 




}
