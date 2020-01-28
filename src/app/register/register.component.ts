import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild ('f',{static:true}) registerForm: NgForm; 
  department='Computer Science Engineering';
  
  submitted=false;

  constructor() {
  }
  ngOnInit() {
  }
  
  onSubmit(element:HTMLElement)
  { this.submitted=true;
    console.log(this.registerForm);
    element.scrollIntoView();
   // this.user.name=this.registerForm.value.username;
    //this.user.regno=this.registerForm.value.registernumber;
    //this.user.email=this.
    //this.registerForm.reset();
  }
 // onSubmit(form: NgForm)
  //{console.log(form);}

}
