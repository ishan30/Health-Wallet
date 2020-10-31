import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyinformationComponent } from './emergencyinformation.component';

describe('EmergencyinformationComponent', () => {
  let component: EmergencyinformationComponent;
  let fixture: ComponentFixture<EmergencyinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
