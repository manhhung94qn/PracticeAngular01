import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProcductComponentComponent } from './item-procduct-component/item-procduct-component.component';
import { SmartphoneComponentComponent } from './smartphone-component/smartphone-component.component';
import { ContentComponentComponent } from './content-component.component';
import { LaptopComponentComponent } from './laptop-component/laptop-component.component';

@NgModule({
  declarations: [ItemProcductComponentComponent, SmartphoneComponentComponent, ContentComponentComponent, LaptopComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemProcductComponentComponent,
    ContentComponentComponent
  ]
})
export class ContentModuleModule { }
