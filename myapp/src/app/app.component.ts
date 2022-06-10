import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label [class.danger]="foodWarning">Has food allergy.</label>
  <input type="checkbox" [(ngModel)]="foodWarning" />
  `,

  styles: [`
    .danger {
    color:orange;
    font-weight:bold;
    }`
  ]
})

export class AppComponent {
  foodWarning:Boolean
  constructor() {
    // Set default value to false.
    this.foodWarning = false;
  }
}
