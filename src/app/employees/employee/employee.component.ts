import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../models/entry.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public entriesService: EntryService) {}

  ngOnInit(): void {}
}
