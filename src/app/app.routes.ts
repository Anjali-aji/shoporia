import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Service } from './service/service';
import { Contact } from './contact/contact';
import { CustomerList } from './customer-list/customer-list';
import { Products } from './products/products';
import { SingleviewList } from './singleview-list/singleview-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'contact', component: Contact },
  { path: 'customers', component: CustomerList },
  { path: 'products', component: Products },
  { path: 'singleview-list/:id', component: SingleviewList },
  { path: '**', redirectTo: '' }
];
