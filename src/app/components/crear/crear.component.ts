import { ProductosService } from '@services/productos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  formulario = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(2)]],
    categoria: ['',[Validators.required]],
    precio: ['',[Validators.required]],
    inventario: ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private service: ProductosService
              ) {
                this.validador();
   }

  ngOnInit(): void {
  
  }
  registrar() {
    console.log(this.formulario);
    
    if ( this.formulario.invalid) {
      console.log('Campos erroneos');
      
    }else
    {
      this.service.createProduct(this.formulario.value).subscribe(
        result =>{
          console.log(result);
          this.formulario.reset()
        },
        err => {
          console.error(err)
        });
    }
  }
  validador() {
    
  }
}
