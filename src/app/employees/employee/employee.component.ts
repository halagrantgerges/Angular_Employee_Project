import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../../models/entry.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() showProfitShare: boolean = true;
  constructor(public entriesService: EntryService) {}

  @Output() toggleParentProfitShareEvent = new EventEmitter();

  ngOnInit(): void {}

  toggleProfitShare() {
    this.toggleParentProfitShareEvent.emit();
  }
  deleteEmployees() {
    setTimeout(() => {
      if (this.entriesService.employeesEntries.length > 0) {
        this.entriesService.employeesEntries.splice(
          this.entriesService.employeesEntries.length - 1,
          1
        );
        this.deleteEmployees();
      }
    }, 1000);
  }
}
