import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgandonationComponent } from './organdonation.component';

describe('OrgandonationComponent', () => {
  let component: OrgandonationComponent;
  let fixture: ComponentFixture<OrgandonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgandonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgandonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
