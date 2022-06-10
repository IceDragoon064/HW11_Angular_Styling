import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <label [class.danger]="foodWarning">Has food allergy.</label>
  <input type="checkbox" [(ngModel)]="foodWarning" />
  <br>
  <label [class.greenDanger]="greenWarning">Turn this green.</label>
  <input type="checkbox" [(ngModel)]="greenWarning"/>
  `,

  styles: [`
    .danger {
    color:orange;
    font-weight:bold;
    }

    .greenDanger{
      color:green;
      font-weight:bold;
    }`
  ]
})

export class AppComponent {
  foodWarning:Boolean
  greenWarning:Boolean
  constructor() {
    // Set default value to false.
    this.foodWarning = false;
    this.greenWarning = false;
  }
}
