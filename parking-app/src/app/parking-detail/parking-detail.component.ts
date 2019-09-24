import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';
import { parking } from '../parking';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.css']
})
export class ParkingDetailComponent implements OnInit {

  parking: parking;
  constructor(private data: DataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.data.getParkings().subscribe(data => {
      this.addParking(data);
    })
  }

  addParking(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == this.route.snapshot.params['id']) {
        console.log(data[i]);
        this.parking = data[i]; 
      }
    }
  }

}
