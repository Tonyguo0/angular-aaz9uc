import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  // FormBuilder service created
  profileForm2 = this.fb.group({
    fname: ['', Validators.required],
    lname: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.group({ alias1: [''], parent1: [''], parent2: [''] }),
    ]),
  });
  constructor(private fb: FormBuilder) {}

  // fname = new FormControl();
  // lname = new FormControl();

  // profileForm = new FormGroup({
  //   fname: this.fname,
  //   lname: this.lname,
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     zip: new FormControl(),
  //   }),
  // });

  onSubmit() {
    console.warn(this.profileForm2.value);
  }

  disableSubmitButton() {
    return this.profileForm2.valid;
  }

  updateProfile() {
    this.profileForm2.patchValue({
      fname: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
      aliases: [{ alias1: 'hello', parent1: 'dad', parent2: 'mom' }],
    });
  }

  // we need ot get the aliases ArrayForm element from the profileForm2 instance made from buildForm Service
  get aliases() {
    return this.profileForm2.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(
      this.fb.group({
        alias1: [''],
        parent1: [''],
        parent2: [''],
      })
    );
  }
}
