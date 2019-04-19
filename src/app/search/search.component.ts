import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { delay } from 'q';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  people: object;
  searching: boolean = false;

constructor (private data: DataService) { }

ngOnInit() {
  //When the SearchComponent is initialized (at the start of the application), request the data from the Data Service.
  //This is an asynchronous call (i.e. other activities continue).
  //Once the data is returned from the Data Service, this.people is populated with the results.
  this.data.getPeople().subscribe((res : any[]) => {
    this.people = res;
  })
}
nowSearch(searchString: string) {
    this.searching = true;
    //The below lines create a delay of 15 seconds when the search text either = smith or includes art (e.g. part, smart, etc.)
    if (searchString=="smith" || searchString.includes("art")) {
      console.log("Delay for 15 seconds has started");
      setTimeout( () => { this.searching = false }, 15000 );
      } else {
        this.searching = false;
    }
//    use this code, and move this.searching = false to after it, if getting fresh data from the back-end is required.
//    this.data.getPeople().subscribe((res : any[]) => {
//      this.people = res
//    })
  }
}
