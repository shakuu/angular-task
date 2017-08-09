import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {PeopleComponent} from './people/people.component';

import {PeopleService} from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    RouterModule.forRoot([
      {path: 'home', component: PeopleComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
