import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//font
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"

//http
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, //required animation module
    ToastrModule.forRoot(),            //toaster module added
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
