import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { ShortBreakComponent } from './components/short-break/short-break.component';
import { LongBreakComponent } from './components/long-break/long-break.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PomodoroComponent,
    ShortBreakComponent,
    LongBreakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
