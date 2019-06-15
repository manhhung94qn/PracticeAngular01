import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProcductComponentComponent } from './item-procduct-component.component';

describe('ItemProcductComponentComponent', () => {
  let component: ItemProcductComponentComponent;
  let fixture: ComponentFixture<ItemProcductComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProcductComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProcductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
