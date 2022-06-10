import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p [ngClass]="myClasses">class binding example</p>`,
  styles: [`
    .warning {
    font-weight:bold;
  }

  .danger {
    color:red;
  }
  .highrisk {
    text-decoration:underline;
  }`
  ]
})

  export class AppComponent {
    title = 'app';
    property1=true
    property2=true;
    property3=true;
    myClasses = {
    warning:this.property1,
    danger:this.property2,
    highrisk:this.property3
  }
}
