import { Component, OnInit } from '@angular/core';
import {Emplo,EmployeeserviceService} from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {
  service:EmployeeserviceService;
  constructor(service:EmployeeserviceService,public router:Router) { 
    this.service=service;
  }
  Employee:Emplo[]=[];
  delete(id:number)
  {
    this.service.delete(id);
  }
  ngOnInit(){
    this.service.fetchEmp();
    this.Employee=this.service.getEmp();
  }
  update(eid:number)
  {
    console.log('in view update');
    this.router.navigate(['app-updateemployee']);
  }
}
