import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue = {
    email: 'a@b.c',
    password: '12345678c'
  };

  constructor() { }

  login(form: NgForm) {
    console.log(form.value, form.errors);
    console.log(this.formValue);
  } 

  ngOnInit() { }
}
