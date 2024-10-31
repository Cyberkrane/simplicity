import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryHomeComponent } from './inventory-home.component';
import { ProductRegistrationComponent } from './features/product-registration/product-registration.component';
import { StockControlComponent } from './features/stock-control/stock-control.component';
import { RestockAlertsComponent } from './features/restock-alerts/restock-alerts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: InventoryHomeComponent
      },
      {
        path: 'product-registration',
        component: ProductRegistrationComponent
      },
      {
        path: 'stock-control',
        component: StockControlComponent
      },
      {
        path: 'restock-alerts',
        component: RestockAlertsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
