import { Product } from './../product.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
