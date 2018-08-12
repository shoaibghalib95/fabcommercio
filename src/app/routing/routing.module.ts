import { ContactComponent } from './../contact/contact.component';
import { ProductsComponent } from './../products/products.component';
import { HomeComponent } from './../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contactUs', component: ContactComponent },
  { path: '**', redirectTo: 'home' },    

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
