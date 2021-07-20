import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  firstName: string = "First";
  lastName: string = "Last"; 
  @Input() configs:Configuration;
  @ViewChild('showInputLbl') showInputLbl:ElementRef<HTMLLabelElement>;
  @ViewChild('showInput') showInput : ElementRef<HTMLInputElement>;
 

  
 // strictPropertyInitialization: false in tsconfig.json
  constructor(private rd: Renderer2) {

  }

  ngOnInit(): void {
    this.configs = new Configuration('0xB010','GPS_Period')
  }

  submitForm(bindingForm : NgForm){
    console.log(bindingForm);
    console.log("b4 - First :: "+this.firstName);
    console.log("b4 - Last  :: "+this.lastName);
    this.firstName = bindingForm.form.value ? bindingForm.form.value.firstName:this.firstName ;
    this.lastName = bindingForm.form.value ? bindingForm.form.value.lastName: this.lastName ;
    console.log("after - First :: "+this.firstName);
    console.log("after - Last  :: "+this.lastName);
  }
  submitForm2(event:MouseEvent){
    console.log(event);
    console.log(" this.configs => "+JSON.stringify(this.configs));
  }
  submitForm3(){
    var el = this.showInput.nativeElement;
    el.focus();
    
    var lblEl = this.showInputLbl.nativeElement;
    lblEl.innerText = "Update >> "+el.value;
    lblEl.style.color = "red";
    lblEl.style.background = "yellow";
    // console.log("this.showInput => "+JSON.stringify(.));
  }
  submitFormOneWayBind(oneWayDid:HTMLInputElement, oneWayDidVal:HTMLInputElement){
    this.configs.did = oneWayDid.value;
    this.configs.didName = oneWayDidVal.value;
    console.log(" submitFormOneWayBind ::: this.configs => "+JSON.stringify(this.configs));
  }
  setDid(event:any){
    this.configs.did = event.target.value;
  }
  setDidName(event:any){
    this.configs.didName = event.target.value;
  }
}

class Configuration {
  constructor(public did:string = '0000', public didName:string = 'NO_CONFIG'){}
}