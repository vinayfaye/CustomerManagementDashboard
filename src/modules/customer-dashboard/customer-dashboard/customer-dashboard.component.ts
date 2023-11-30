import { Component, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';
import { CustomerDashoardService } from '../customer-dashoard.service';
import { Customer } from '../customer-dashboard';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'number', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Customer>([]);
  subscription!: Subscription;

  constructor(private dialogRef: MatDialog,
    private customerService: CustomerDashoardService) { }

  ngOnInit() {
    this.subscription = this.customerService.getCustomerData().subscribe(res => {
      this.dataSource.data = res;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  add() {
    this.dialogRef.open(AddEditCustomerComponent, {
      data: {
        type: "add",
        customer: new Customer()
      }
    });
  }

  delete(customer: Customer) {
    this.customerService.deleteCustomer(customer);
  }

  edit(customer: Customer) {
    this.dialogRef.open(AddEditCustomerComponent, {
      data: {
        type: "edit",
        customer: customer
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
