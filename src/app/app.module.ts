import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Rutas
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { productosComponent } from '@components/productos/productos.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { CrearComponent } from '@components/crear/crear.component';
import { ModificarComponent } from '@components/modificar/modificar.component';
import { EliminarComponent } from '@components/eliminar/eliminar.component';
import { LoginComponent } from '@components/login/login.component';
// Angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox'

// Servicio
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    productosComponent,
    NavbarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
