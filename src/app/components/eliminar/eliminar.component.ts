import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@services/productos.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['../productos/productos.component.scss']
})
export class EliminarComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nombre', 'Categoria', 'Precio','Inventario'];
  dataSource:any;
  estado:boolean;
  estadoUpdate:boolean;
  constructor(private servicio: ProductosService) { 
    this.estado = true;
    this.estadoUpdate = false;
  }

  ngOnInit(): void {
    this.datosProducto();
  }
  idProduct(id:number){
    this.servicio.deleteProduct(id).subscribe(
      result => {
        console.log(result);
        this.datosProducto();
      },
      err => {
        console.error(err);
      }
    )
  }
  datosProducto(){
    this.servicio.getProducts().subscribe(
      result => {
        this.dataSource = result;       
      },
      err => {
        console.error(err)
      }
    )
  }
}
