import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello {{name}}</h1>
      <span>Current slider value: {{ctrl.value}}</span>
      <ngx-jquery-slider [formControl]="ctrl"></ngx-jquery-slider>
      <input [value]="ctrl.value" (change)="updateSlider($event)">
  `
})
export class AppComponent {
  ctrl = new FormControl(11);

  updateSlider($event) {
    this.ctrl.setValue($event.currentTarget.value, {emitModelToViewChange: true});
  }
}
