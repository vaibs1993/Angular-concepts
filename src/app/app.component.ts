import { Component, VERSION, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

/**
 * Three types of encapsulation method/option avial in angular
 * Emulated - Default ,  not affect any other(child, sibling) component css
 * None - not following angular's encapsulation behaviour
 * Shadow DOM - create its own dom , not affected with any other component css
 */
