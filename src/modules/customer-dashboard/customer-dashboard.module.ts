import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule, MatTableModule

  ]
})
export class CustomerDashboardModule { }
