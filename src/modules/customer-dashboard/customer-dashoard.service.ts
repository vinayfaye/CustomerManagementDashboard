import { Injectable } from '@angular/core';
import { Customer, customerList } from './customer-dashboard';
import { BehaviorSubject, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CustomerDashoardService {

  constructor() { }

  private _customerData$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>(customerList);
  public customerData = this._customerData$.asObservable();

  getCustomerData() {
    return this.customerData;
  }

  addCustomer(customer: Customer) {
    customer.id = parseInt(this.generateRandomId());
    const currentArray = this._customerData$.getValue(); // Get the current value
    const newArray = [...currentArray, customer];
    this._customerData$.next(newArray);
  }

  generateRandomId(): string {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${timestamp}-${randomNum}`;
  }

  editCustomer(id: number, customer: Customer) {
    const customers = this._customerData$.getValue(); // Get the current array value

    const indexToUpdate = customers.findIndex((cust) => cust.id === id);

    if (indexToUpdate !== -1) {
      const updatedCustomers = [...customers]; // Create a new array
      updatedCustomers[indexToUpdate] = customer;

      this._customerData$.next(updatedCustomers);
    }
  }

  deleteCustomer(customer: Customer) {
    this._customerData$.next(
      this._customerData$.value.filter((cust) => cust.id !== customer.id)
    );
  }
}
