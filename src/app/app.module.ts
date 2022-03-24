import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { BookingComponent } from './booking/booking.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModeOfPaymentsComponent } from './mode-of-payments/mode-of-payments.component';
import { ApiService } from './api.service'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    BookingComponent,
    TestimonialsComponent,
    PaymentsComponent,
    ReviewsComponent,
    LoginComponent,
    RegisterComponent,
    ModeOfPaymentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [   
    ApiService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
