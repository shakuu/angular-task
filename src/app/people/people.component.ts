import {Component} from '@angular/core';

import {PeopleService} from './../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  constructor(public peopleService: PeopleService) {}
}
