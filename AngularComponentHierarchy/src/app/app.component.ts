import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponentHierarchy';
  buttons: String[] = ['Test', 'Another Test', 'Button'];
  darkMode: boolean = false;
}
