import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmployeesService } from '../services/employees.service';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})


export class EmployeeListComponent implements OnInit {
  constructor(private _employeesService: EmployeesService) {
  }
  columnHeaders: string[] = ['firstName', 'lastName', 'gender', 'dob', 'email', 'education'];
  dataSource = new MatTableDataSource<Employee>([]);
  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this._employeesService.getEmployees());
  }

  announceSortChange(sortState: Sort | any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
