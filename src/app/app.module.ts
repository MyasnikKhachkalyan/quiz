import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OptionComponent } from './option/option.component';
import { OptionContainerComponent } from './option-container/option-container.component';
import { QuestionBoxComponent } from './question-box/question-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OptionComponent,
    OptionContainerComponent,
    QuestionBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
