import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  

  transform(value: any, arg: any):any{
   
    if(arg == "" || arg.length < 3) return value;


    const resultadoEmpl = [];

    for(const empleado of value){
      if(empleado.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){

        resultadoEmpl.push(empleado);

      }

    };

    return resultadoEmpl;

  }

 

}
