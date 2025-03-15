import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { ManageEmployeeComponent } from '../manage-employee/manage-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-navbar',
  imports: [ MatToolbarModule, MatButtonModule, MatIconModule, EmployeeListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private _dialog : MatDialog) {}

  addEmployee() {
    this._dialog.open(ManageEmployeeComponent);
  }
}
