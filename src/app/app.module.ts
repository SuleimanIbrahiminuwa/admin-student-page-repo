import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponentComponent } from './component/table-component/table-component.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    Ng2FilterPipeModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
