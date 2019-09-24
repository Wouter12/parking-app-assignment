import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { HttpClientModule, HttpClientJsonpModule }    from '@angular/common/http';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingListComponent,
    ParkingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
