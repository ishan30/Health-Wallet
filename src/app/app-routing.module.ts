import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';

const routes: Routes = [
  { path: 'signup', component : SignupformComponent},
  { path : 'login', component : LoginformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
