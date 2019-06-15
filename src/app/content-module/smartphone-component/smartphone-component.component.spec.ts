import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneComponentComponent } from './smartphone-component.component';

describe('SmartphoneComponentComponent', () => {
  let component: SmartphoneComponentComponent;
  let fixture: ComponentFixture<SmartphoneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
