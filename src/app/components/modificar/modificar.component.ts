import { producto } from '@models/productos.model';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@services/productos.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['../productos/productos.component.scss',
                './modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nombre', 'Categoria', 'Precio','Inventario'];
  dataSource:any;
  estado:boolean;
  public dataUpdate:producto[] = [];
  formUpdate = this.fb.group({
    id:  '',
    nombre: ['',[Validators.required, Validators.minLength(2)]],
    categoria: ['',[Validators.required]],
    precio: ['',[Validators.required]],
    inventario: ['',[Validators.required]]
  });

  constructor(private servicio: ProductosService,
              private fb: FormBuilder) {
    this.estado = true;
   }
  ngOnInit(): void {
    this.datosProducto()
  }
  Product(producto:producto)
  {
    this.estado = false;
    this.dataUpdate.push(producto);
    console.log(this.dataUpdate);
    
    
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
  updateProducto(){
    this.formUpdate.value.id = this.dataSource[0].id;   
     console.log(this.formUpdate.value);
    this.servicio.updateProduct(this.formUpdate.value).subscribe(
      result => {
        this.formUpdate.reset();
        console.log("Hecho");
        
      },
      err => {
        console.error(err);
        
      }
    )
  }
}
