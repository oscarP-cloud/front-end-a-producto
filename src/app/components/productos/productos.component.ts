import { ProductosService } from '@services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class productosComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nombre', 'Categoria', 'Precio','Inventario'];
  dataSource:any;
  estado:boolean;
  estadoUpdate: boolean;
  constructor(private servicio: ProductosService) { 
    this.estado = false;
    this.estadoUpdate = false;
  }

  ngOnInit(): void {
    this.datosProducto();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // Metodo de consumo de servicio.
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