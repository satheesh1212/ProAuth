import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureAuthComponent } from './procedure-auth.component';

describe('ProcedureAuthComponent', () => {
  let component: ProcedureAuthComponent;
  let fixture: ComponentFixture<ProcedureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedureAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
