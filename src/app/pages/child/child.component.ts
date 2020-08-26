import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() childmessage: string;
@Output() messageEvent = new EventEmitter();
// message1 = "Hola Mondo!";
 
  constructor() { }

  ngOnInit() {
  }

  // sendMessage(){
  //   this.messageEvent.emit(this.message1);
  // }

}