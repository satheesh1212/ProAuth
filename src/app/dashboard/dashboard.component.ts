import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members: any;

  constructor(private http: AuthServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  filter(){
    alert("filtering the data");
  }
  reset(){
    alert("reset the data");

  }

  displayedColumns: string[] = ['membername','authorizationno','determinationstatus','fromdate','todate','servicingfacility','diagnosiscode','state'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  membername: string;
  authorizationno: string;
  determinationstatus: string;
  fromdate: string;
  todate: string;
  servicingfacility: string;
  diagnosiscode: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {membername: 'Contreras, Naomi', authorizationno: 'IP0000001399', determinationstatus: 'Pending', fromdate: '10/18/2018',todate: '10/19/2018',servicingfacility:'Brooks, Douglas',diagnosiscode:'707.13',state:'Open'},
  {membername: 'Contreras, Naomi', authorizationno: 'IP0000001193', determinationstatus: 'Partially Approved', fromdate: '09/17/2018',todate: '09/19/2018',servicingfacility:'Dallas Medical Center',diagnosiscode:'436',state:'Open'},
  {membername: 'Contreras, Naomi', authorizationno: 'IP0000001307', determinationstatus: 'Approved' , fromdate: '09/18/2018',todate: '09/19/2018',servicingfacility:'Gooding, Lisa W',diagnosiscode:'006.4',state:'Open'},

];
