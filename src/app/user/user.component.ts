import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userForm: any;
  userList: any[] = []
  passwordVisible = false
  
  constructor(
    private user: UserService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.builder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(3)]],
      passre: '',
      roleId: ''
    })
    // this.userList = this.user.getUsers();
    this.user.getUsers().subscribe({
      next: (res: any) => {
        console.log(res.data)
        this.userList = res.data
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
  createUser(event: SubmitEvent) {
    console.log('Létrehozás...')

    console.log(this.userForm.value)

    //Küldés REST API végpontra

    event.preventDefault();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible
  }

}

