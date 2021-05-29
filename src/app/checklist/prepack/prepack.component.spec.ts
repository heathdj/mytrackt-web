import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepackComponent } from './prepack.component';

describe('PrepackComponent', () => {
  let component: PrepackComponent;
  let fixture: ComponentFixture<PrepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
