import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJquerySliderComponent } from './ngx-jquery-slider.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, NgxJquerySliderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
