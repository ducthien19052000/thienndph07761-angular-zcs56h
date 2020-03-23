import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductManagerComponent} from "./product-manager/product-manager.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ServiceComponent} from "./service/service.component";

const routes: Routes = [ { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path :'home', component : HomeComponent},
  {path :'product-manager', component : ProductManagerComponent},
  {path :'product', component : ProductListComponent},
  {path:'service',component :ServiceComponent},
  {path :'product-add', component : ProductAddComponent},
  {path :'product/:id', component : ProductDetailComponent},
  {path :'**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
