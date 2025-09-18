import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userList: any[] = []

  constructor(private user: UserService) {}

  ngOnInit() {
    // this.userList = this.user.getUsers();
    this.user.getUsers().subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.user.getUsers().subscribe((data) => {
      console.log(data)
    })
    // console.log(this.userList)
  }
}
