import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {subscribeOn} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  as: Product;
  isSuccess = false;
  productForm: FormGroup;

  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    });
  }
  onSubmit(){
    this.productService.addProduct(this.productForm.value).subscribe(result => {
      this.as = result;
    }, error => {
      console.log(error);
    });
  }

}
