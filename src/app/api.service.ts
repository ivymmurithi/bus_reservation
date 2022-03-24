import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000/api";

  
  constructor(private http: HttpClient) { }

  getAllBuses(): any {
    return this.http.get(this.baseurl)
  }
}
