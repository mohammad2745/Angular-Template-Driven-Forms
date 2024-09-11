import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form';


  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getValue(value: any) {
    console.log(value);
  }
}
