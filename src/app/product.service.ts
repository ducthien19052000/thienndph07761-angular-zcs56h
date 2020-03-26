import { Injectable } from '@angular/core';
import {data} from "./MockData";
import {Product} from "./Product";
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  // products = data;
  api = 'http://5e7afaf90e046300163327e3.mockapi.io/product';
  constructor(
    private http :HttpClient
  ) { }
  getProducts():Observable{
  //  return this.products;
  }
  addProduct(product){
    // let newObj = {id: 10, ...product};
    // this.products.push(newObj);
  }
  removeProduct(id){ 
    // return this.products.filter(product => product.id != id)
  }
   getProduct(id){ 
      // return this.products.find(product => product.id == id);
  }
}