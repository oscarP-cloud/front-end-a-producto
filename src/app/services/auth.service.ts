import { Observable } from 'rxjs';
import { url } from '@models/global';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL:string = url;
  constructor(private _http: HttpClient) { }

  loginUsuario(login:any){
    let params = JSON.stringify(login);
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(`${this.URL}login`,params,{headers:header});
  }
  logout() {
    localStorage.removeItem('auth_token');
  }
 
   logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

}
