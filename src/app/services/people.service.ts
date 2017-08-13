import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, ReplaySubject } from 'rxjs/Rx';

import { Person } from '../models/person.model';

declare const require;

@Injectable()
export class PeopleService {

  private readonly _people$ = new ReplaySubject<Person[]>(1);

  private samplePeople: Person[] = require('../../../data/data.json');

  constructor() {
    this._people$.next([...this.samplePeople]);
  }

  get people$(): Observable<Person[]> {
    return this._people$.asObservable();
  }

  public updatePersonPosition(options: ChangeOrderOptionsModel): void {
    options.to = options.to < 0 ? 0 : options.to;
    options.to = options.to >= this.samplePeople.length ? this.samplePeople.length - 1 : options.to;

    const updatedPeople = [];
    this.samplePeople.forEach(this.reorderInto(updatedPeople, options));
    this.samplePeople = updatedPeople;

    this._people$.next(this.samplePeople);
  }

  private reorderInto(updatedPeople: Person[], options: ChangeOrderOptionsModel): (person: Person, index: number) => void {

    const delta = options.from - options.to;
    if (delta > 0) {
      return (_, index) => {
        if (options.to === index) {
          updatedPeople.push(this.samplePeople[options.from]);
        }
        if (options.from !== index) {
          updatedPeople.push(this.samplePeople[index]);
        }
      };
    }
    if (delta < 0) {
      return (_, index) => {
        if (options.from !== index) {
          updatedPeople.push(this.samplePeople[index]);
        }
        if (options.to === index) {
          updatedPeople.push(this.samplePeople[options.from]);
        }
      };
    }
    return (_, index) => {
      updatedPeople.push(this.samplePeople[index]);
    };
  }
}

export interface ChangeOrderOptionsModel {
  person: Person;
  from: number;
  to: number;
}
