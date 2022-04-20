import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/Http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string | undefined;
  private clientid = '';
  private clientSecret = '';
  constructor() { }
}
