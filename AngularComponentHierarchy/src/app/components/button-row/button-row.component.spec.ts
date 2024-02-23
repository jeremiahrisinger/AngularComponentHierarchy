import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRowComponent } from './button-row.component';

describe('ButtonRowComponent', () => {
  let component: ButtonRowComponent;
  let fixture: ComponentFixture<ButtonRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
