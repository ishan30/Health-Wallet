import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilydoctorComponent } from './familydoctor.component';

describe('FamilydoctorComponent', () => {
  let component: FamilydoctorComponent;
  let fixture: ComponentFixture<FamilydoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilydoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
