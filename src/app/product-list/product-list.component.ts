import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selected: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
   this.getProduct()
  }
  
  showDetail(product){
    this.selected = product;
    console.log(this.selected);
  }
  getProduct(){
    this.productService.getProducts().subscribe(data=>{this.products=data});
  }
  removeItem(id){
    // this.products = this.products.filter(product => product.id != id)
    this.products = this.productService.removeProduct(id);
  }
}
