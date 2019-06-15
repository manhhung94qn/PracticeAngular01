import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {ContentModuleModule} from './content-module/content-module.module';
import {FooterModuleModule} from './footer-module/footer-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ContentModuleModule,
    FooterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
