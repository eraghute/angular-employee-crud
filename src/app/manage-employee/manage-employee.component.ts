import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-manage-employee',
  imports: [MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule,MatRadioModule],
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.scss'
})
export class ManageEmployeeComponent {
  readonly dialogRef = inject(MatDialogRef<ManageEmployeeComponent>);
  constructor(private _dialog: MatDialogModule) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
