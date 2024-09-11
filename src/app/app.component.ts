import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form';
  form: any;
  emailRegX: string =  '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      contactDetails: new FormGroup({
        mobile: new FormControl('', [
          Validators.required
        ]),
        landline: new FormControl('', [
          Validators.required
        ])
      })
    });
  }

  // Helper function to check form field errors
  isFieldInvalid(field: string): boolean {
    return this.form.get(field)?.invalid && (this.form.get(field)?.dirty || this.form.get(field)?.touched);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  onSubmitReactive() {
    console.log(this.form.value);
  }
}
