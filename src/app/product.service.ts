import { Injectable } from '@angular/core';
import {data} from "./MockData";
import {Product} from "./Product";
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  // products = data;
  api = 'https://5e7afaf90e046300163327e3.mockapi.io/product';
  constructor(
    private http :HttpClient
  ) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  //  return this.products;
  }
  getProduct(id):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/${id}`);
  }
  addProduct(product){
    // let newObj = {id: 10, ...product};
    // this.products.push(newObj);
  }
  updateProduct(product):Observable<Product[]>{
    return this.http.put<Product[]>(`${this.api}/${product.id}`,product);
  }
}
