import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCutomStyle]'
})
export class CutomStyleDirective {

  constructor( el:ElementRef) { 
    el.nativeElement.style.color="green"
  }

}
