import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { EmployeeComponent } from './sign-up/employee/employee.component';
import { EmployeeListComponent } from './sign-up/employee-list/employee-list.component';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './sign-up/shared/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DateComponent } from './contact-person/date/date.component';
const ROUTES: Routes=[
  {path:'' ,component: HomeComponent},
  {path:'log-in',component: LogInComponent},
  {path:'sign-up',component: SignUpComponent},
  {path:'contact-person',component:ContactPersonComponent},
  {path:'about',component:AboutComponent},
  {path:'contactdetail',component:ContactComponent},
  {path:'home-page',component:HomePageComponent},
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    ContactPersonComponent,
    EmployeeComponent,
    EmployeeListComponent,
    AboutComponent,
    ContactComponent,
    HomePageComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
