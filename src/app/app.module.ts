import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule} from "@angular/forms";
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { NavigationComponent } from './navigation/navigation.component';
import { ServiceComponent } from './service/service.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FormsModule, AppRoutingModule ,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, SlideComponent, CategoryComponent, ProductAddComponent, NotFoundComponent, HomeComponent, ProductDetailComponent, ProductManagerComponent, NavigationComponent, ServiceComponent, ProductEditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
