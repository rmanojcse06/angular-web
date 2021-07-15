import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedInAppName = 'feedback-app';
  appMethod(){
    console.log("Inside AppComponent :: appMethod on "+new Date());
  }
  receivedDataFromChild(data: any){
    console.log("Inside AppComponent :: receivedDataFromChild on "+new Date());
    console.log("Inside AppComponent :: receivedDataFromChild data = "+data);
  }
}
