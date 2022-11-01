import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom // create a seprate dom for this component , no other css affectd to this component.
})
export class Component2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
