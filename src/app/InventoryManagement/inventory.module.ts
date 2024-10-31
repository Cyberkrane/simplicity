import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryHomeComponent } from './inventory-home.component';
import { ProductRegistrationComponent } from './features/product-registration/product-registration.component';
import { StockControlComponent } from './features/stock-control/stock-control.component';
import { RestockAlertsComponent } from './features/restock-alerts/restock-alerts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InventoryHomeComponent,
    ProductRegistrationComponent,
    StockControlComponent,
    RestockAlertsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,

  ],
  exports: [
    InventoryHomeComponent
  ]
})
export class InventoryModule { }
