import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProdcutsComponent } from './components/prodcuts/prodcuts.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'create',
        component: ProdcutsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
