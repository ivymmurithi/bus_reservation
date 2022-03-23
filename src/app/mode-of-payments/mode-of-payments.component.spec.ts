import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeOfPaymentsComponent } from './mode-of-payments.component';

describe('ModeOfPaymentsComponent', () => {
  let component: ModeOfPaymentsComponent;
  let fixture: ComponentFixture<ModeOfPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeOfPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeOfPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
