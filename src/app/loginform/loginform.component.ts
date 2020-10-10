import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  email : string;
  password : string;
  loginform: any;

  

  constructor() { }

 
  ngOnInit(): void {
  }
  onSubmit(value){
    console.log(value)
  }

}
