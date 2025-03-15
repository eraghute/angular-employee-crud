import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-manage-employee',
  imports: [MatDialogModule, MatInputModule, FormsModule , MatDividerModule, MatSelectModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule,MatRadioModule],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class ManageEmployeeComponent {
  readonly dialogRef = inject(MatDialogRef<ManageEmployeeComponent>);
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    return '';
  };
  educationList = [
    { value: '1', viewValue: 'B.Tech' },
    { value: '2', viewValue: 'M.Tech' },
    { value: '3', viewValue: 'MCA' },
    { value: '4', viewValue: 'BCA' },
    { value: '5', viewValue: 'MBA' },
    { value: '6', viewValue: 'BE' },
    { value: '7', viewValue: 'Others' }
  ];
  genderList = [
    { value: '1', viewValue: 'Male'
    },
    { value: '2', viewValue: 'Female' },
    { value: '3', viewValue: 'Other' }
  ];
  selectedValue = this.educationList[0].value;
  employeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    dob: new FormControl(''),
    education: new FormControl(''), 
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });


  constructor() {}

  addEmployee() {
    console.log(this.employeeForm.value);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
