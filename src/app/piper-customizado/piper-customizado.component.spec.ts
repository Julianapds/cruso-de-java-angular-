import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiperCustomizadoComponent } from './piper-customizado.component';

describe('PiperCustomizadoComponent', () => {
  let component: PiperCustomizadoComponent;
  let fixture: ComponentFixture<PiperCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiperCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiperCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
