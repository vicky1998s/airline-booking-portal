import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User=new User();
  submitted=false;
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder,private UserService:UserService,private router: Router) {
    this.addUserForm =  this.fb.group({
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.addUserForm.value);


    if (this.addUserForm.valid) {
        // this.user = Object.assign(this.user, this.registerationForm.value);
        this.UserService.addNormalUser(this.userData()).subscribe(() =>
        {
            this.onReset();
            this.submitted = true;
        });

    }
}

onReset() {
    this.submitted = false;
    this.addUserForm.reset();
}


userData(): User {
    return this.user = {
        userName: this.userName.value,
        email: this.email.value,
        password: this.password.value,

    };
}

get userName() {
  return this.addUserForm.get('userName') as FormControl;
}

get email() {
  return this.addUserForm.get('email') as FormControl;
}
get password() {
  return this.addUserForm.get('password') as FormControl;
}

}
