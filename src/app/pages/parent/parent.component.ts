import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import {ChildComponent} from "../child/child.component";
import { DataService } from "../../data.service";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
// parentMessage = "message from parent";
  message:string;
  // @ViewChild(ChildComponent) child;
  constructor(private data: DataService) { }
  // message:string;
  ngOnInit() {
    // this.message = this.child.message;
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  // receiveMessage($event){
  //   this.message = $event;
  // }

}