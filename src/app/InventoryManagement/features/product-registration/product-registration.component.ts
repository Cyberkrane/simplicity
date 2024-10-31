import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  constructor(private readonly productsServices: ProductsService) { }

  ngOnInit(): void {
    
    console.log(this.showAllProducts());
  }

  showAllProducts(): void {
    this.productsServices.getAllProducts().subscribe((products) => {
      console.log(products);
    });
  }

}
