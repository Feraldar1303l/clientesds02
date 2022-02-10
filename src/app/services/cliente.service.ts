import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[];
  private tipos: TipoCliente[];

  constructor() {
    this.clientes=[];
    this.tipos=[
      {
        id:0,
        descripcion:'Sin definir'
      },
      {
        id:1,
        descripcion:'Activos'
      },
      {
        id:2,
        descripcion:'Inactivos'
      },
      {
        id:3,
        descripcion:'Deudores'
      }
    ];
  }

  // metodo para retornar todos los clientes 

  getClientes(){
    return this.clientes;
  }

  // metodo para retonar los tipos de clientes

  getTipos(){
    return this.tipos;
  }

  //metodo para agregar un cliente al arreglo .push
  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  //metodo que genera un objeto limpio tipoCliente
  nuevoCliente():Cliente{

    return{
      id:this.clientes.length+1,
      nombre: '',
      rfc: '',
      domicilio: '',
      tipo:0
    };
  }
}
