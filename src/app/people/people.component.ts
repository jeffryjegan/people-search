import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people = ["Jim Smith, 45, 111 Main St., Chicago IL 60006, Angular, pic1"
  , "Joe DiMaggio, 95, 11 Home Run Alley, New York NY 10203, Baseball, pic2"
  , "Donald Trump, 64, 100 Pennsylvania Avenue, Washington DC 30001, Politics, pic3"];
  status = "";
  message: string;

  constructor() { }

  ngOnInit() {
  }

  click() {
    status = "Search button was clicked!";
  }

}