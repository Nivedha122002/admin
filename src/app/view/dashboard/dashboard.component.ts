import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  [x: string]: any;

  userEmail!: String;
  userPassword!: String;

  loginEmailIdPassword: { email: string; password: string; } | undefined;


  constructor(private routes: ActivatedRoute){
    
    
  }

  ngOnInit(): void {
    
    this.routes.queryParams.subscribe(params =>{
      console.log(params['email']);
      console.log(params['password']);
      this.userEmail = params['email'];
      this.userPassword = params['password']
    })
   
  }

 
  sendEnquiry():void{
    this.routes.queryParams.subscribe(params =>{
      console.log(params['Your Name']);
      console.log(params['Your Email']);
      console.log(params[' Subject']);
      console.log(params['message']);
    })
  }
 
}
