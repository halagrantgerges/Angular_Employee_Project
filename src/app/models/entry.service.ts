// this means that this class is used by dependancies injection
import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { from } from 'rxjs';
import { idText } from 'typescript';

// means this service will be available in the root module
@Injectable({ providedIn: 'root' })
export class EntryService {
  public employeesEntries: Entry[] = [
    {
      id: 1,
      name: 'Hala',
      birthDate: new Date('1990/2/22'),
      gender: 'female',
      profitShare: 0.1,
    },
    {
      id: 2,
      name: 'Mark',
      birthDate: new Date('2014/1/12'),
      gender: 'male',
      profitShare: 0.2,
    },
    {
      id: 3,
      name: 'Akram',
      birthDate: new Date('1999/3/21'),
      gender: 'male',
      profitShare: 0.3,
    },
  ];

  public sortedemployeesEntries: Entry[] = [];

  constructor() {
    this.sortEntries();
  }
  private sortEntries() {
    /*
    let Array1 = [ 1, 2, 3]; //1,2,3

let Array2 = [ 4, 5, 6]; //4,5,6

//Create new array from existing array

let copyArray = [...Array1]; //1,2,3

//Create array by merging two arrays

let mergedArray = [...Array1, ...Array2]; //1,2,3,4,5,6

//Create new array from existing array + more elements

let newArray = [...Array1, 7, 8]; //1,2,3,7,8
*/
    this.sortedemployeesEntries = [...this.employeesEntries].sort(
      (a: Entry, b: Entry) => {
        if (a.birthDate > b.birthDate) return 1;
        else if (a.birthDate == b.birthDate) return 0;
        else return -1;
      }
    );
  }
}
