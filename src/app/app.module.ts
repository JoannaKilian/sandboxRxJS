import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LeftComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
