import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
  
})
export class AdduserComponent implements OnInit{
  
  form: FormGroup = new FormGroup({
    toppings: new FormControl(''),
    

    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    address2: new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
  date:new FormControl(''),
   birthday:new FormControl('')

  });
 

  constructor(private router: Router, private formBuilder: FormBuilder) {

    console.log("Constructor Called..");
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        email:  ['',[Validators.required]],
        password:  ['',[Validators.required]],
        number: ['',[Validators.required]],
        number1: ['',[Validators.required]],
        fatherName: ['',[Validators.required]],
        motherName: ['',[Validators.required]],
        address: ['',[Validators.required]],
        address2: ['',[Validators.required]],
        idselect: ['',[Validators.required]],
        country: ['',[Validators.required]],
        city: ['',[Validators.required]],
        fresher: ['',[Validators.required]],
        twoyears: ['',[Validators.required]],
        fouryears: ['',[Validators.required]],
        state: ['',[Validators.required]],
        pincode: ['',[Validators.required]],
        bloodgroup: ['',[Validators.required]],
        aadharcard: ['',[Validators.required]],
        workExperience:['',[Validators.required]],
        birth:['',[Validators.required]],
        skills: ['',[Validators.required]],
        certifications: ['',[Validators.required]],
        check: ['',[Validators.required]],
        date: ['',[Validators.required]],
        gender: ['',[Validators.required]],
       
      },
    );
  }
  get fName() {
    return this.form.get('firstName');
  }
  get lName() {
    return this.form.get('lastName');
  }
  get emailAddress() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get number() {
    return this.form.get('number');
  }
  get emercency() {
    return this.form.get('number1');
  }
  get fatherName() {
    return this.form.get('fatherName');
  }
  get motherName() {
    return this.form.get('motherName');
  }
  get address() {
    return this.form.get('address');
  }
  get address2() {
    return this.form.get('address2');
  }
  get gender() {
    return this.form.get('gender');
  }
  get state() {
    return this.form.get('state');
  }
  get city() {
    return this.form.get('city');
  }
  get country() {
    return this.form.get('country');
  }
  get pincode() {
    return this.form.get('pincode');
  }
  get bloodgroup() {
    return this.form.get('bloodgroup');
  }
  get aadharcard() {
    return this.form.get('aadharcard');
  }
  get ySkills() {
    return this.form.get('skills');
  }
  get yCertifications() {
    return this.form.get('certifications');
  }
  get workExperience() {
    return this.form.get('workExperience');
  }
  get yearofExp() {
    return this.form.get('date');
  }
  get birth() {
    return this.form.get('birth');
  }
 
  
  

  userSave():void{
    console.log("userSave Called..");
    console.log(this.form.value.firstName);
    console.log(this.form.value.lastName);
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.form.value.number);
    console.log(this.form.value.number1);
    console.log(this.form.value.fatherName);
    console.log(this.form.value.motherName);
    console.log(this.form.value.address);
    console.log(this.form.value.address2);
    console.log(this.form.value.select);
    console.log(this.form.value.country);
    console.log(this.form.value.city);
    console.log(this.form.value.state);
    console.log(this.form.value.pincode);
    console.log(this.form.value.bloodgroup);
    console.log(this.form.value.aadharcard);
    console.log(this.form.value.fresher);
    console.log(this.form.value.twoyears);
    console.log(this.form.value.fouryears);
    console.log(this.form.value.skills);
    console.log(this.form.value.certifications);
    console.log(this.form.value.check);
    console.log(this.form.value.date);
    console.log(this.form.value.birth);
    console.log(this.form.value.workExperience);
    console.log(this.form.value.gender);
    
  }
}
