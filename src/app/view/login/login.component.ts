import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
  
  [x: string]: any;


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private formBuilder: FormBuilder ,HttpClient:HttpClient) {

    console.log("Constructor Called..");
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email ]],
        password: ['',[Validators.required]],
      },
    );

  }
  
  userLogin(): void {
    console.log("userLogin Called..");
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    

    let navigationExtras: NavigationExtras = {
      queryParams: { 'email': this.form.value.email , 'password': this.form.value.password},
    
      fragment: 'anchor'
    };
    
    this.router.navigate(['/dashboard'], navigationExtras);

    
  }
  
  get emailAddress() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  onSubmit() {
    if (this.model.valid) {
        console.log('Form submitted!', this.model);
      }
    }
}



