import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p [style.font-weight]="myWeight">style binding example</p>`,
})

export class AppComponent {
  myWeight = "bold";
}
