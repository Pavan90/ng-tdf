import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  url = '';

  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post(this.url, user);
  }
}
