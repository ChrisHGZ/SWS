import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
