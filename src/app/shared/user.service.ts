import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList = [
    {id:1, username: "pali"}, 
    {id:2, username: "dani"},
  ]

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = 'http://localhost:8000/users'
    // return this.userList
    return this.http.get(url)
  }
  createUser() {}
}
