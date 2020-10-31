import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupformComponent } from './signupform/signupform.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiddleheaderComponent } from './middleheader/middleheader.component';
import { FamilydoctorComponent } from './familydoctor/familydoctor.component';
import { EmergencyinformationComponent } from './emergencyinformation/emergencyinformation.component';
import { OrgandonationComponent } from './organdonation/organdonation.component';
import { MedicalrecordComponent } from './medicalrecord/medicalrecord.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    HeaderComponent,
    LoginformComponent,
    HomeComponent,
    DashboardComponent,
    MiddleheaderComponent,
    FamilydoctorComponent,
    EmergencyinformationComponent,
    OrgandonationComponent,
    MedicalrecordComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
