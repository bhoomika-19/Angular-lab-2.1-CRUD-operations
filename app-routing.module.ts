import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'app-show-employee',
    component:ShowemployeeComponent
  },
  {
    path:'app-updateemployee',
    component:UpdateemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
