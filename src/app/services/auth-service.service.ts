import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Members } from './Members';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http : HttpClient) { }

  baseUrl : string  = "http://localhost:3000/posts";

  // baseUrl="localhost:9191/ProAuth/api/members";

  getMembers()
  {
    return this.http.get<Members[]>(this.baseUrl);


  }


}

