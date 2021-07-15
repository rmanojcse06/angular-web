import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModuleComponent } from './login-module/login-module.component';



@NgModule({
  declarations: [
    LoginModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginModuleComponent  
  ]
})
export class LoginModuleModule { }
