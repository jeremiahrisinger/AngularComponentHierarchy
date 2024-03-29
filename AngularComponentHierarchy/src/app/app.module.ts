import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonRowComponent } from './components/button-row/button-row.component';
import { TitleComponent } from './components/title/title.component';
import { ContentComponent } from './components/content/content.component';
import { InputComponent } from './components/input/input.component';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonRowComponent,
    TitleComponent,
    ContentComponent,
    InputComponent,
    PageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
