import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  mensaje:string = "";
  credenciales: FormGroup
  @Output()
  propagar = new EventEmitter<string>();

  constructor( private route: Router,
               private fb: FormBuilder,
               private auth:AuthService) {
                this.credenciales = this.fb.group({
                  correo: ['',[Validators.required, Validators.email]],
                  contrasena: ['',[Validators.required, Validators.minLength(9)]]
                });
                }

  ngOnInit(): void {

  }
  onPropagar() {
    this.propagar.emit(this.mensaje);
  }
  verificacion()
  {
    if (this.credenciales.invalid) {
      return console.log('Datos erroneos'); 
    }else {
      this.auth.loginUsuario(this.credenciales.value).subscribe(
        result => {
          let valores = Object.values(result)          
          localStorage.setItem('auth_token', valores[2]);
          this.route.navigateByUrl('/dashboard');
        },
        err => {
          console.error(err);
        }
      )
      
    }
    
  }
}
