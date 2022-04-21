import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string | undefined;
  private clientid = 'da0bc7b80a8cf72abac4';
  private clientSecret = 'd7e6cb289367824141c101eb6259f56779713b96';
  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'bethnduta';
    console.log("service is now ready!");
    this.username = 'bethnduta';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/", this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientSecret);
    
  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/", this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientSecret);
    
  }
  updateProfile(username:string){
    this.username = username;
  }
}
