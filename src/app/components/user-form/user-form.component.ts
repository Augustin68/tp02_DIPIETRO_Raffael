import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneInternationalModule,
  TuiSortCountriesPipeModule,
  TuiStepperModule
} from '@taiga-ui/kit';
import { UserFormStep } from './user-form-step.enum';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiInputPhoneInternationalModule,
    TuiSortCountriesPipeModule,
    TuiStepperModule
  ],
  templateUrl: './user-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  userForm = new FormGroup({
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
    passwordConfirm: new FormControl('')
  });

  formStep = UserFormStep.info;
  countryIsoCode = TuiCountryIsoCode.FR;

  readonly UserFormStep = UserFormStep;
  readonly countries = Object.values(TuiCountryIsoCode);

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
