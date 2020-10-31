import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmergencyinformationComponent } from './emergencyinformation/emergencyinformation.component';
import { FamilydoctorComponent } from './familydoctor/familydoctor.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MedicalrecordComponent } from './medicalrecord/medicalrecord.component';
import { OrgandonationComponent } from './organdonation/organdonation.component';
import { SignupformComponent } from './signupform/signupform.component';

const routes: Routes = [
  { path : '', redirectTo :'/home' , pathMatch:'full'},
  { path : 'home', component : HomeComponent},
  { path: 'signup', component : SignupformComponent},
  { path : 'login', component : LoginformComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path: 'dashboard/signup', component : SignupformComponent},
  { path : 'dashboard/familydoctor', component : FamilydoctorComponent},
  { path : 'dashboard/emergency', component : EmergencyinformationComponent},
  { path : 'dashboard/organdonation', component : OrgandonationComponent},
  { path : 'dashboard/medicalrecord', component : MedicalrecordComponent},
  { path : 'dashboard/aboutus', component : AboutusComponent},
  { path : 'dashboard/contactus', component : ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
