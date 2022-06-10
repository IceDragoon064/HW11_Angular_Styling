import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type="checkbox" [(ngModel)]="doesNotExercise"
  (change)="adjustCSS()"/>Does not exercise.
  <input type="checkbox" [(ngModel)]="over55" (change)="adjustCSS()"/>
  Is over 55.
  <div *ngIf="doesNotExercise || over55" [ngClass]="myClasses" >
  Is at risk of heart disease.</div>
  `,
  styles: [`
    .warning {
    font-weight:bold;
  }

  .danger {
    color:red;
  }`
  ]
})

  export class AppComponent {
    title = 'app';
    doesNotExercise = false;
    over55 = false;
    myClasses = {
      warning: false,
      danger: false
    }
    adjustCSS() {
    }
}
