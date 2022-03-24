import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ModeOfPaymentsComponent } from './mode-of-payments/mode-of-payments.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {
    path: 'services',
    component: BookingComponent
  },
  {
    path: 'mod',
    component: ModeOfPaymentsComponent
  },
  {
    path: 'landing',
    component: LandingSectionComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
