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

 




}
