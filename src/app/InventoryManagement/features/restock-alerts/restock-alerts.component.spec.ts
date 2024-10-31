import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockAlertsComponent } from './restock-alerts.component';

describe('RestockAlertsComponent', () => {
  let component: RestockAlertsComponent;
  let fixture: ComponentFixture<RestockAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestockAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestockAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
