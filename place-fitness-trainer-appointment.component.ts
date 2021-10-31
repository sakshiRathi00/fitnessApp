import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from "@angular/forms";


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder) { }
  

  ngOnInit() {
      this.fitnessForm=this.fb.group({
     firstname: ["", [Validators.required]],
      lastname: ["",[Validators.required]],
      email: ["", [Validators.required,Validators.email]],  
       streetaddress: ["", [Validators.required]],
       paisa: [""],
       inr:[""],
      phonenumber: ["", [Validators.required,Validators.min(999999999), Validators.max(9999999999)]],
      pincode: ["", [Validators.required,Validators.min(99999),Validators.max(999999)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      country: ["", [Validators.required]],
      
      age: ["", [Validators.required, Validators.pattern("[0-9]+"), Validators.min(18), Validators.max(60)]],

      psysiotherapy: ["Yes", [Validators.required]],
      packages: [, [Validators.required]],
      trainerpreference: ["Male trainer", [Validators.required]]

    })
}

  onSubmit() {
      this.submitted = true;
    console.log("submitted");
    if(this.fitnessForm.invalid){
      console.log("error");
    
    }
  }
    
}
