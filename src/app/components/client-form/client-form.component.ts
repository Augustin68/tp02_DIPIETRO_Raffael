import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TuiInputModule],
  templateUrl: './client-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent implements OnInit {
  clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adresse: new FormControl(''),
    zipCode: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
  });

  ngOnInit(): void {
    this.clientForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}
