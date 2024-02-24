import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() name: String = '';
  @Input() dark: boolean = false;
  @Output() response = new EventEmitter<any>();
  constructor() { }

  getResponse(value: any) {
    this.response.emit(value);
  }
}
