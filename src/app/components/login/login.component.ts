import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup;
  submitted = false;

  constructor() {
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      reminder: new FormControl(false),
    });
  }

  public submitLogin() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('OK!');
    }
  }

  showErrors(control: AbstractControl): boolean {
    return this.submitted && !!control.errors;
  }

  public get mail(): AbstractControl {
    return this.form.get('mail');
  }

  public get password(): AbstractControl {
    return this.form.get('password');
  }
}
