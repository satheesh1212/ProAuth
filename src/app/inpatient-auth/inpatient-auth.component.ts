import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inpatient-auth',
  templateUrl: './inpatient-auth.component.html',
  styleUrls: ['./inpatient-auth.component.css']
})
export class InpatientAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    alert("search method works");
  }

  reset(){
    alert("reset method works");

  }
}
