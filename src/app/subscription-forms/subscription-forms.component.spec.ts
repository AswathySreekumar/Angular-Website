import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFormsComponent } from './subscription-forms.component';

describe('SubscriptionFormsComponent', () => {
  let component: SubscriptionFormsComponent;
  let fixture: ComponentFixture<SubscriptionFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
