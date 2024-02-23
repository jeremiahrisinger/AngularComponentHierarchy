import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @Input() buttons: String[] = ['Test', 'Another Test', 'Button'];
  @Input() darkMode: boolean = false;
  @Input() title: String = '';
}
