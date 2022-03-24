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
import { ServiceComponent } from './service/service.component';

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
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
