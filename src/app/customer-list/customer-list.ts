import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList implements OnInit {
  private http = inject(HttpClient);
  customers: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: () => {
        this.customers = [
          { id: 1, name: 'John Doe', username: 'johndoe', email: 'john@email.com', phone: '123-456-7890', website: 'john.com', address: { city: 'New York' } }
        ];
      }
    });
  }
}