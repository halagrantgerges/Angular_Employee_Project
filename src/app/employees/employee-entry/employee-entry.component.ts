import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css'],
})
export class EmployeeEntryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.resetForm();
  }
  @Input() showProfitShare: boolean = true;
  @Output() create = new EventEmitter();
  model;
  createEntry() {
    /*
      id: number;
  name: string;
  birthDate: Date;
  gender: string;
  profitShare: number;
    */

    let entryObject = Object.assign({}, this.model, {
      birthDate: this.model.birthDate,
      profitShare: this.model.profitShare,
    });
    this.create.emit(entryObject);
  }

  resetForm() {
    this.model = {};
  }
}
