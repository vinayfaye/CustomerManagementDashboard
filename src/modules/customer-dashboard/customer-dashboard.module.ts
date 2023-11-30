import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    AddEditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class CustomerDashboardModule { }
