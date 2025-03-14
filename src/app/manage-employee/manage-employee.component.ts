import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-manage-employee',
  imports: [MatDialogModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule,MatRadioModule],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class ManageEmployeeComponent {
  readonly dialogRef = inject(MatDialogRef<ManageEmployeeComponent>);
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    return '';
  };
  constructor() {}

  cancel() {
    this.dialogRef.close();
  }
}
