import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowHideDirective } from './directives/show-hide.directive';
import { ColorChangeDirective } from './directives/color-change.directive';
import { LoopDirective } from './directives/loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideDirective,
    ColorChangeDirective,
    LoopDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
