import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.css']
})
export class ButtonRowComponent {

  @Input() buttonNames: String[] = [];
  @Input() dark: boolean = false;
}
