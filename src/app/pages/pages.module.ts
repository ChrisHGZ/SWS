import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({
  declarations: [
    LoginComponent, 
    RegistrarComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule, // Include FormsModule for form validation
    FormsModule, // Include IonicModule for Ionic components
    ReactiveFormsModule
  ]
})
export class PagesModule { }
