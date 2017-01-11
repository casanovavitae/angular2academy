import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  template: `
    <h2>String Interpolation</h2>
    <p>
      String Interpolation
    </p>
    <p>{{stringInterpolation}} | {{numberInterpolation}}</p>
    <h2>Property Binding</h2>
    <input type="text" value="{{stringInterpolation}}" >
    <input type="text" [value]="stringInterpolation" >
    <p [ngClass]="{redBorder: onTest()}">Is this Styled?</p>
    <p [ngStyle]="{color: 'blue'}">Is this Styled Blue color</p>
    <app-property-binding [result]="10"></app-property-binding>
    <app-event-binding (clicked)="onClicked($event)"></app-event-binding>
    <hr>
    <app-two-way-binding></app-two-way-binding>
  `,
  styles: [`p{ color: red;}
  .redBorder{
    border: 1px solid yellow;
  }
`]
})
export class InterpolationComponent  {
  stringInterpolation = 'This is String Interpolation!'
  numberInterpolation = 33;


  onTest(){
      return true;
  }

  onClicked(value: string){
    alert(value);
  }

}
