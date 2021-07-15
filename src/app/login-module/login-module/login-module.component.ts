import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.scss','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class LoginModuleComponent implements OnInit {
  @Input('appName') applName: string = 'No App Name initialized from Parent';
  @Input() callbackMethodToChild: any;
  @Output() childMethod: EventEmitter<any> = new EventEmitter<any>();
  
  
  constructor() { }

    ngOnInit(): void {
    }
    clickedSignInButton() {
      console.log("Inside clickedSignInButton");
      console.log("Calling parent method from child as the callbackMethodToChild is bound to parent method!")
      this.childMethod.emit("Clicked SignIn Button in LoginComponent");
      this.callbackMethodToChild();
    }
    
    
}
