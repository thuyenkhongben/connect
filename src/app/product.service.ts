import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product';
import {catchError, tap} from 'rxjs/operators';
import {promisify} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getallProduct(): Observable<Product[]> {
   return  this.http.get<Product[]>('http://localhost:8080/product');
  }
  addProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.http.post<Product>('http://localhost:8080/product', product);
  }
  getProductByid(id: number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/product/${id}`);
  }
}
