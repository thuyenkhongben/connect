import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productService.getallProduct().subscribe( prodduct => {
      this.products = prodduct;
    });
  }
}
