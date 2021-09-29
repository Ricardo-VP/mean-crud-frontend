import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:4000/api/employees';

  employees : Employee[];

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> { // returns an array of employees from the database
    return this.http.get<Employee[]>(this.URL_API);
  }
}
