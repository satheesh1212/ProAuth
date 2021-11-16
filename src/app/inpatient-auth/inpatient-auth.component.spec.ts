import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientAuthComponent } from './inpatient-auth.component';

describe('InpatientAuthComponent', () => {
  let component: InpatientAuthComponent;
  let fixture: ComponentFixture<InpatientAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpatientAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
