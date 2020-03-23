import { Injectable } from '@angular/core';
import {data} from "./MockData";
import {Product} from "./Product";

@Injectable()
export class ProductService {
  products = data;
  constructor() { }
  getProducts(){
   return this.products;
  }
  addProduct(product){
    let newObj = {id: 10, ...product};
    this.products.push(newObj);
  }
  removeProduct(id){ 
    return this.products.filter(product => product.id != id)
  }
   getProduct(id){ 
      return this.products.find(product => product.id == id);
  }
}