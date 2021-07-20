import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { LoginModuleModule } from './login-module/login-module.module';
import { UserInputComponent } from './user-input/user-input.component';
import { BindingComponent } from './pages/binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    UserInputComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
