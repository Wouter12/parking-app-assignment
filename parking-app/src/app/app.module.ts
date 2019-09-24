import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule }    from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ParkingListComponent } from './parking-list/parking-list.component';
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
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiB_OvUdmTII-rpCC2wWJ-1Di3sFsd8RY',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
