import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
