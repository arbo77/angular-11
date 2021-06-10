import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductComponent } from './backoffice/entitlement/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { DashboardMakerComponent } from './backoffice/dashboard/dashboard-maker/dashboard-maker.component';
import { MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';
import { FilterListComponent } from './backoffice/entitlement/filter-list/filter-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableInvoiceComponent } from './backoffice/conponents/table-invoice/table-invoice.component';
import { InvoiceTemplateComponent } from './backoffice/conponents/invoice-template/invoice-template.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    DashboardMakerComponent,
    FilterListComponent,
    TableInvoiceComponent,
    InvoiceTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
      },
    },
    {
      provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
      useValue: {
        hidePageSize: true,
        pageSize: 10,
        pageIndex: 0,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
