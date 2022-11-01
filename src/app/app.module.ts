import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Component1Component,
    Component2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
