import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShortBreakComponent } from './components/short-break/short-break.component';
import { LongBreakComponent } from './components/long-break/long-break.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';

const routes: Routes = [
  { path: '', component: PomodoroComponent },
  { path: 'short-break', component: ShortBreakComponent },
  { path: 'long-break', component: LongBreakComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
