import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css'],
})
export class StepperOverviewExample implements OnInit {
  isLinear = false;
  personDetailsFormGroup: FormGroup;
  geoLocationFormGroup: FormGroup;
  previousMedicalFormGroup: FormGroup;
  insuranceFormGroup: FormGroup;
  paymentFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personDetailsFormGroup = this._formBuilder.group({
      lastNameCtrl: ['', Validators.required],
      dobCtrl: ['', Validators.required],
      firstNameCtrl:  ['', Validators.required],
      dlCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      ssnCtrl: ['', Validators.required],
      zipCtrl: ['', Validators.required],
      udfCtrl: ['', Validators.required]
    });
    this.geoLocationFormGroup = this._formBuilder.group({
      address1Ctrl: ['', Validators.required],
      address2Ctrl: ['', Validators.required],
      zipCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      stateCtrl: ['', Validators.required],
    });
    this.previousMedicalFormGroup = this._formBuilder.group({
      descriptionCtrl: ['', Validators.required],
      bloodGroupCtrl: ['', Validators.required],
      sbCtrl: ['', Validators.required],
      dbpCtrl: ['', Validators.required],
      prCtrl: ['', Validators.required],
    });
    this.insuranceFormGroup = this._formBuilder.group({
      companyCtrl: ['', Validators.required],
      policyCtrl: ['', Validators.required],
      expiryCtrl: ['', Validators.required],
    });
    this.paymentFormGroup = this._formBuilder.group({
      paymentCtrl: ['', Validators.required],
    });
  }
}
