import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export class CustomValidators extends Validators {
  constructor() {
    super();
  }

  static zipCode: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const zipCodePattern = /^\d{5}$/;
    return zipCodePattern.test(control.value) ? null : { zipCode: true };
  };

  static phoneNumber: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(control.value)
      ? null
      : { phoneNumber: true };
  };

  static passwordMatch =
    (passwordField: string, confirmPasswordField: string): ValidatorFn =>
    (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passwordField);
      const passwordConfirm = control.get(confirmPasswordField);

      if (!password || !passwordConfirm) {
        return null;
      }

      return password.value === passwordConfirm.value
        ? null
        : { passwordMatch: true };
    };
}
