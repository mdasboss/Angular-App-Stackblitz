import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { DataService } from './data.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
