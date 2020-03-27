import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
    // this.route.params.subscribe(param => {
    //   this.product = this.productService.getProduct(param.id);
  }
  getProduct() {
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productId).subscribe(data => {
        this.product = data;
      });
    });
  }
}
