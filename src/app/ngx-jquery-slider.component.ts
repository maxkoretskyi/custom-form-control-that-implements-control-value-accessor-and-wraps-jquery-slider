import { Component, ViewChild } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'ngx-jquery-slider',
  template: `
      <div #location></div>
  `,
  styles: ['div {width: 100px}'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NgxJquerySliderComponent,
    multi: true
  }]
})
export class NgxJquerySliderComponent implements ControlValueAccessor {
  @ViewChild('location') location;
  widget;
  onChange;
  value;

  ngAfterViewInit() {
    this.widget = $(this.location.nativeElement).slider(this.value);

    this.widget.on('slidestop', (event, ui) => {
      this.onChange(ui.value);
    });
  }

  writeValue(value) {
    this.value = value;
    if (this.widget && value) {
      this.widget.slider('value', value);
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
  }
}
