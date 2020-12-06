import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  aaaa: any;
 
  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit() {
  }

}
