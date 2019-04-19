import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { People, Person } from './models/people'
import { Observable } from 'rxjs';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  people: object;
  baseUrl: string;

  constructor(private http: HttpClient) { }

  //This is the procedure that gets the data from the back-end.
  //NOTE:  It first sends an HTTP OPTIONS call to ensure that the back-end allows GET calls.
  //        Then it sends the HTTP GET call.
  getPeople() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200/',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    this.baseUrl = 'http://localhost:49717/api/People'
    return this.http.get(this.baseUrl, httpOptions)
  }
}
