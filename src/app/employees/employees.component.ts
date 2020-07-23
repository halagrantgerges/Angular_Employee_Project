import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { EntryService } from '../models/entry.service';
import { textSpanIsEmpty } from 'typescript';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  showProfitShareParent: boolean = true;
  constructor(public entryService: EntryService) {}

  ngOnInit(): void {}

  toggleParentProfitShare() {
    this.showProfitShareParent = !this.showProfitShareParent;
  }
  createNewEntry(entry: Entry) {
    this.entryService.addEntry(entry);
  }
}
