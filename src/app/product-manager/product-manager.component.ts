import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service'; 
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  constructor(
     private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }
   getProduct(){
    this.productService.getProducts().subscribe(data=>{this.products=data});
  }
}