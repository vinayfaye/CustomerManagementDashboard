import { Component, Inject, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomerDashoardService } from '../customer-dashoard.service';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent {

  @Input() title: string = "";
  formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddEditCustomerComponent>,
    private cd: ChangeDetectorRef,
    private customerDashboardService: CustomerDashoardService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    if (this.data.type == "edit") {
      this.formGroup.controls["firstName"].setValue(this.data.customer.firstName);
      this.formGroup.controls["lastName"].setValue(this.data.customer.lastName);
      this.formGroup.controls["email"].setValue(this.data.customer.email);
      this.formGroup.controls["number"].setValue(this.data.customer.number);
      this.cd.detectChanges();
    }
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
    else {
      if (this.data.type == "edit")
        this.customerDashboardService.editCustomer(this.data.customer.id, this.formGroup.value);

      else
        this.customerDashboardService.addCustomer(this.formGroup.value);

      this.dialogRef.close();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}
