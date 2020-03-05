import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'SVG Morph';
  
  @ViewChild('plusCircle', {static:false}) plusCircle: ElementRef;

  ngOnInit() {
    //let native = this.plusCircle.nativeElement;
    //let s1 = Snap(native);
    //let s2 = Snap('#plus');
    //s1.circle(10, 10, 15);
    //s2.circle(100, 100, 450);
  }
}
