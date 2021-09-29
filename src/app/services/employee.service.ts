import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:4000/api/employees';

  selectedEmployee: Employee = {
    name: '',
    position: '',
    office: '',
    salary: 0
  }

  employees : Employee[];

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> { // returns an array of employees from the database
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee): Observable<Employee> { // adds an employee to the database
    return this.http.post<Employee>(this.URL_API, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> { // updates an employee in the database
    return this.http.put<Employee>(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(id: string){ // deletes an employee from the database
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
