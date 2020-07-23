import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../models/entry.service';
import { Entry } from 'src/app/models/entry';
import { getJSDocThisTag } from 'typescript';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css'],
})
export class EntryDetailsComponent implements OnInit {
  constructor(
    private entrySvc: EntryService,
    private currentRouter: ActivatedRoute
  ) {}
  public entry: Entry;
  ngOnInit(): void {
    this.entry = this.entrySvc.getEntries().find((e) => {
      return e.id === +this.currentRouter.snapshot.params.id;
    });
  }
}
