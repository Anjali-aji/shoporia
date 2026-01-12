import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleview-list',
  imports: [CommonModule],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css'
})
export class SingleviewList implements OnInit {
  product: any = null;
  
  products = [
    {
      id: 1,
      title: "Laptop Computer",
      price: 999.99,
      description: "High-performance laptop with latest processor and graphics card. Perfect for work and gaming.",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      rating: { rate: 4.5, count: 120 }
    },
    {
      id: 2,
      title: "Smartphone",
      price: 699.99,
      description: "Latest smartphone with advanced camera system and long-lasting battery life.",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      rating: { rate: 4.3, count: 89 }
    },
    {
      id: 3,
      title: "Wireless Headphones",
      price: 199.99,
      description: "Premium wireless headphones with noise cancellation and superior sound quality.",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: { rate: 4.7, count: 156 }
    },
    {
      id: 4,
      title: "Designer T-Shirt",
      price: 29.99,
      description: "Comfortable cotton t-shirt with modern design. Available in multiple colors and sizes.",
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      rating: { rate: 4.2, count: 67 }
    },
    {
      id: 5,
      title: "Running Shoes",
      price: 129.99,
      description: "Professional running shoes with advanced cushioning and breathable material.",
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      rating: { rate: 4.6, count: 203 }
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id) || this.products[0];
    console.log('Single product loaded:', this.product);
  }
}