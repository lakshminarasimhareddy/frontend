import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  EmployeeName = new FormControl('');

  myFunction() {

  }

  myFunction2() {
    
  }


  }
