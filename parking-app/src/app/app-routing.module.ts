import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';


const routes: Routes = [
  {path: '', component: ParkingListComponent, pathMatch: 'full'},
  {path: 'parking/:id', component: ParkingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
