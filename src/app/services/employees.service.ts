import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor() { }

  getEmployees() : Employee[] {
    return [
      { id: 1, firstName: 'Joe', gender: 'Male', lastName: 'Black', dob: '17/08/1990', education: 'B.Tech', email: 'joe.black@test.com'}, 
      { id: 2, firstName: 'Annie', gender:'Female', lastName: 'Hathway', dob: '23/11/1980', education: 'Others', email: 'annie.test@com' },
      { id: 2, firstName: 'Ben', gender:'Male', lastName: 'Geller', dob: '23/06/1980', education: 'M.Tech', email: 'annie.test@com' },
      { id: 2, firstName: 'Annie', gender:'Female', lastName: 'Hathway', dob: '23/11/1980', education: 'MBA', email: 'annie.test@com' },
      { id: 2, firstName: 'Mathhew', gender:'Male', lastName: 'Perry', dob: '23/07/1982', education: 'B.Tech', email: 'annie.test@com' },
      { id: 2, firstName: 'Chandler', gender:'Male', lastName: 'Bing', dob: '14/04/1990', education: 'M.Tech', email: 'annie.test@com' },
      { id: 2, firstName: 'Ross', gender:'Male', lastName: 'Geller', dob: '16/03/1981', education: 'B.Tech', email: 'annie.test@com' },
      { id: 2, firstName: 'Rachel', gender:'Female', lastName: 'Green', dob: '20/11/1980', education: 'M.Tech', email: 'annie.test@com' },
      { id: 2, firstName: 'Jennifer', gender:'Female', lastName: 'Aniston', dob: '19/01/1980', education: 'BE', email: 'annie.test@com' },
      { id: 2, firstName: 'Phoebie', gender:'Female', lastName: 'Hathway', dob: '12/11/1992', education: 'BCA', email: 'annie.test@com' },
      { id: 2, firstName: 'Courtney', gender:'Female', lastName: 'Cox', dob: '24/09/1984', education: 'MBA', email: 'annie.test@com' },
      { id: 2, firstName: 'Monica', gender:'Female', lastName: 'Geller', dob: '23/04/1999', education: 'M.Tech', email: 'annie.test@com' },
      { id: 2, firstName: 'David', gender:'Male', lastName: 'Schwimmer', dob: '23/11/1990', education: 'B.E', email: 'annie.test@com' },
      { id: 2, firstName: 'Brad', gender:'Male', lastName: 'Pitt', dob: '22/11/1986', education: 'BCA', email: 'annie.test@com' },
      { id: 2, firstName: 'Tom', gender:'Male', lastName: 'Cruise', dob: '17/05/1983', education: 'MBA', email: 'annie.test@com' },
      { id: 2, firstName: 'Jannice', gender:'Female', lastName: 'Hathway', dob: '09/11/1987', education: 'MCA', email: 'annie.test@com' },
      { id: 2, firstName: 'Adam', gender:'Male', lastName: 'Sandler', dob: '23/12/1988', education: 'MBA', email: 'annie.test@com' },
      { id: 2, firstName: 'Ashton', gender:'Male', lastName: 'Kutcher', dob: '27/01/1983', education: 'B.Tech', email: 'annie.test@com' }
    ];
  }
}
