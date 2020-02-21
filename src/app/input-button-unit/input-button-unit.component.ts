import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent {
  @Output() submitEmitter: EventEmitter<string> = new EventEmitter();
  public title = 'Hello World';

  public submitValue(newTitle: string) {
    this.submitEmitter.emit(newTitle);
  }
}
