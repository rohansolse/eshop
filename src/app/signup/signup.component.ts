import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userExist: any;
  userCreated: any;
  data: any
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.userservice.signup(this.profileForm.value).subscribe({
      next: (result) => {
        this.data = result;
        this.userCreated = this.data.message;
        this.userExist = undefined
      },
      error: (response: HttpErrorResponse) => {
        this.userExist = response.error.message;
        this.userCreated = undefined
      }
    });
  }

}
