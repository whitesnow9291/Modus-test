import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { tap, map } from 'rxjs/operators';
@Injectable()
export class UserServiceService {
  userData: User[] = [];
  constructor(private http: HttpClient) { }
  loadUsers() {
    const self = this;
    return this.http.get<any>('https://randomuser.me/api/?results=20').pipe(tap(values => {
      self.userData = values.results.map((el) => {
        const filtered = {
          firstName: el.name.first,
          lastName: el.name.last,
          email: el.email,
          phone: el.cell,
          picture: el.picture
        };
        return filtered;
      });
    }));
  }
  getUsers() {
    return this.userData;
  }
}
