import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonRowComponent } from './components/button-row/button-row.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonRowComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
