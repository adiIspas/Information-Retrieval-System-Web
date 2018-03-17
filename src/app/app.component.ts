import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'King Retrieval';
  submit = 'Caută';
  query: string;
  timeOfExecution = -1;
  totalResults = 0;
  apiBaseUrl = 'http://localhost:8080/api/';

  results = [];

  constructor(private http: HttpClient) {}

  getResults() {
    if (this.query !== null && this.query !== undefined && this.query.trim() !== '') {
      this.http.get(this.apiBaseUrl + 'search?query=' + this.query).subscribe(result => {
          this.results = result['results'];
          this.timeOfExecution = result['timeOfExecution'] / 1000;
          this.totalResults = result['totalResults'];
      });
    }
  }
}
