import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeeserviceService } from './employeeservice.service';
import { HttpClient,HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ShowemployeeComponent,
    UpdateemployeeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeserviceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
