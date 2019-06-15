import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { SlideComponentComponent } from './slide-component/slide-component.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponentComponent, SlideComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
