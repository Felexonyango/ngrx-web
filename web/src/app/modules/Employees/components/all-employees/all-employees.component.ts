import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Paginator } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/model/employees';
import { EmployeeState, getEmployees } from 'src/app/store/reducer/employeeReducer';
import * as EmployeeAction from '../../../../store/actions/employee.action'
@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent implements OnInit {

   employees$: Observable<IEmployee[]>;

  constructor(private store: Store<EmployeeState>) {
    this.store.dispatch(new EmployeeAction.Loademployees());
   
  }
  
  @ViewChild('paginator', { static: true }) paginator: Paginator;

  EmployeesTableColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'department',
    'phoneNumber',
    'startDate',
    'status'
  ];

  ngOnInit(): void {
 
    this.employees$ = this.store.pipe(select(getEmployees  ))
    
    
  }

  
  
}