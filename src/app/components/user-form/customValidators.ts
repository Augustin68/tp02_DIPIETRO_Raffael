import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators
} from '@angular/forms';

export class CustomValidators extends Validators {
  constructor() {
    super();
  }

  static zipCode: ValidatorFn = (control: AbstractControl) => {
    const zipCodePattern = /^\d{5}$/;
    return zipCodePattern.test(control.value) ? null : { zipCode: true };
  };

  static phoneNumber: ValidatorFn = (control: AbstractControl) => {
    const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(control.value)
      ? null
      : { phoneNumber: true };
  };
}
