import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.css']
})
export class LandingSectionComponent implements OnInit {

  constructor(private api:ApiService ) { 
  }

  ngOnInit(): void {
    this.api.getAllBuses().subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
