import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  members: any ;
  constructor(private http: AuthServiceService) { }


  columns = ["mbr_demo_id","subscbr_id","mbr_ssn","mbr_dob","mbr_dod","mbr_gender","mbr_covr_st_dt","mbr_covr_end_dt","mbr_ethn","mbr_race","mbr_hm_addr_ln_1","mbr_hm_addr_ln_2",
  "mbr_hm_county","mbr_hm_city","mbr_hm_st","mbr_hm_zip","mbr_tel_ph","mbr_email","mbr_frst_nm","mbr_mi_nm","mbr_lst_nm"];

  index = ["mbr_demo_id","subscbr_id","mbr_ssn","mbr_dob","mbr_dod","mbr_gender","mbr_covr_st_dt","mbr_covr_end_dt","mbr_ethn","mbr_race","mbr_hm_addr_ln_1","mbr_hm_addr_ln_2",
  "mbr_hm_county","mbr_hm_city","mbr_hm_st","mbr_hm_zip","mbr_tel_ph","mbr_email","mbr_frst_nm","mbr_mi_nm","mbr_lst_nm"];


  ngOnInit() {
    this.http.getMembers().subscribe
    (
      (response)=>
      {
        this.members = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }

  filter(){
    alert("filtering the data");
  }
  reset(){
    alert("reset the data");
  }
  viewDetails(){
    alert("Details of The member");
  }
  extend(){
    alert("Extending The Details of  member");
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
