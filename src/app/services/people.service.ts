import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable, ReplaySubject} from 'rxjs/Rx';

import {Person} from '../models/person.model';

declare const require;

@Injectable()
export class PeopleService {

  private readonly samplePeople = require('../../../data/data.json');

  private readonly _people$ = new ReplaySubject<Person[]>(1);

  constructor() {
    this._people$.next([...this.samplePeople]);
  }

  get people$(): Observable<Person[]> {
    return this._people$.asObservable();
  }
}
