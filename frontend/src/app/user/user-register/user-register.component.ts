import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm!: FormGroup;
  constructor() { }

  ngOnInit() {

    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),

    }, this.passwordMatchingValidator('password', 'confirmPassword')
    )

  }

  passwordMatchingValidator(firstControl: any, secondControl: any): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const password = control.get(firstControl)?.value;
      const confirm = control.get(secondControl)?.value;

      if (password != confirm) { return { 'passwordNoMatch': true } }

      return null

    }
  }

  //------------------
  // Getter methogs for all form controls
  //------------------

  get userName (){
    return this.registerationForm.get('userName') as FormControl;
  }

  get email (){
    return this.registerationForm.get('email') as FormControl;
  }

  get password (){
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword (){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile (){
    return this.registerationForm.get('mobile') as FormControl;
  }
  //-----------------


  onSubmit (){
    console.log(this.registerationForm)
  }

}
