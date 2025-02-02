import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { parking } from '../parking';
import { interval } from 'rxjs';
import {startWith, switchMap} from "rxjs/operators";
@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {

  parkings: parking[]
  constructor(private data: DataServiceService) { }

  ngOnInit() {
    interval(5000)
    .pipe(
      startWith(0),
      switchMap(()=>this.data.getParkings())
    ).subscribe(data=>{
      this.addParkings(data);
    });
  }

  addParkings(data){
    this.parkings = new Array;
    for (var i = 0; i < data.length; i++) {
      this.parkings.push(data[i]);
    }
    console.log(this.parkings);
  }

}
