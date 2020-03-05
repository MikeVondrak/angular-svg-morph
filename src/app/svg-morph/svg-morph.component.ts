import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  
})
export class SvgMorphComponent implements OnInit, AfterViewInit {

  @ViewChild('svgContainer', {static: false}) svg: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {

  }
}