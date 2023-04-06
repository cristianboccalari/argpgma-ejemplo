import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormacionListComponent } from './components/formacion-list/formacion-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FormacionComponent,
    TecnologiaComponent,
    NavbarComponent,
    FormacionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
