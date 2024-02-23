import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonRowComponent } from './components/button-row/button-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
