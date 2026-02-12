import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  name: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-manage',
  imports: [FormsModule],
  templateUrl: './manage.html',
  styleUrl: './manage.css',
})
export class Manage {

  customer: Customer ={
    name: '',
    email: '',
    phone: ''
  };

  customers: Customer[] = [];

  addCustomer() {
    this.customers.push({ ...this.customer });

    console.log(this.customers);
    }

}
