import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  uiOneVal:string = "";
  uiTwoVal = "";
  constructor() { }

  ngOnInit(): void {
  }
  updateUiOne(): void {
    var inputValueForUiOne: string = (<HTMLInputElement>document.getElementById('ui-one-txt')).value || 'nothing';
    this.uiOneVal = "Manoj says "+inputValueForUiOne;
    console.log("Inside UserInputComponent :: updateUiOne "+ inputValueForUiOne);
  }
  printUiTwo():void{
    console.log("Inside UserInputComponent :: printUiTwo  => " + this.uiTwoVal);
  }

}
