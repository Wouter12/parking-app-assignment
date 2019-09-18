import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  
  constructor(private http: HttpClient) { }

  getParkings(): Observable<JSON>{
      return this.http.get<JSON>("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json");
  }
}
