import { Component } from '@angular/core';

import { PeopleService } from './../services/people.service';
import { Person } from '../models/person.model';
import { ChangeOrderOptionsModel } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  constructor(public peopleService: PeopleService) { }

  changePersonOrder(person: Person, from: number, to: number): void {
    const options: ChangeOrderOptionsModel = { person, from, to };
    this.peopleService.updatePersonPosition(options);
  }
}
