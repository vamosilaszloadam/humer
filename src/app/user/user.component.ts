import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PasswordGenerateService } from '../shared/password-generate.service';

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
  customPassword = false
  
  constructor(
    private user: UserService,
    private builder: FormBuilder,
    private passgen: PasswordGenerateService
  ) {}

  ngOnInit() {
    this.userForm = this.builder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(3)]],
      passre: ['', [Validators.required, Validators.minLength(3)]],
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

  generatePassword() {
    console.log('jelszó generálás...')
    // const pass = this.passgen.generateSimplePassword()
    // const pass = this.passgen.generateCustomPassword()
    // this.userForm.get('pass').setValue(pass)
    // this.userForm.get('passre').setValue(pass)
    // this.userForm.get('user').setValue(pass)

    
    let pass = '';
    if(this.customPassword) {
      pass = this.passgen.generateCustomPassword()
    }else {
      pass = this.passgen.generateSimplePassword()
    }

    this.userForm.get('pass')?.setValue(pass)
    this.userForm.get('passre')?.setValue(pass)

    // this.userForm.patchValue({
    //   user: pass,
    //   email: pass,
    //   pass: pass,
    //   passre: pass
    // })
  }

  toggleCustom() {
    this.customPassword = !this.customPassword
  }
}

