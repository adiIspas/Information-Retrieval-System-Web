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

  results = [];

  constructor(private http: HttpClient) {}

  getResults() {
    if (this.query !== null && this.query !== undefined && this.query.trim() !== '') {
      this.http.get('http://localhost:8080/?query=' + this.query).subscribe(result => {
          this.results = result['results'];
      });
    }
  }
}
