import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent }
];
