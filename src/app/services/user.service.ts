import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signupurl = 'http://localhost/api/users/signup';
  constructor(private http: HttpClient) { }

  signup(user: User) {
    return this.http.post(this.signupurl, user);
  }
}
