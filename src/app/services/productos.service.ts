import { url } from '@models/global';
import { Observable } from 'rxjs';
import { producto } from '@models/productos.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL:string = url;
  constructor(private _http: HttpClient) { }


  getProducts(): Observable<producto>{
    
   return this._http.get<producto>(`${this.URL}find_product`)
  }
  createProduct(datos:producto) {
    let params = JSON.stringify(datos);
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(`${this.URL}new_product`, params,{headers:header})
    
  }
  deleteProduct(id:number){
 
    return this._http.delete(`${this.URL}delete_product/${id}`);
  }
  updateProduct(datos:any) {
    let params = JSON.stringify(datos); 
   let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(`${this.URL}update_product/${datos.id}`, params,{headers:header})
  }
}
