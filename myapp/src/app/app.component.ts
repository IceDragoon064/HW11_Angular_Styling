import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<p [ngStyle]="myStyles">stye binding example</p>`,
})

export class AppComponent {
  myStyles = {
    'color':'red',
    'font-weight':'bold'
  }
}
