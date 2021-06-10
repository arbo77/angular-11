import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMakerComponent } from './backoffice/dashboard/dashboard-maker/dashboard-maker.component';
import { FilterListComponent } from './backoffice/entitlement/filter-list/filter-list.component';
import { ProductComponent } from './backoffice/entitlement/product/product.component';

const routes: Routes = [
  { path: '', component: DashboardMakerComponent },
  { path: 'entitlement', component: FilterListComponent },
  { path: 'entitlement/add-product', component: ProductComponent },
  { path: 'entitlement/add-program', component: ProductComponent },
  { path: 'entitlement/add-counterparty', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
