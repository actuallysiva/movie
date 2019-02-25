import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  moviePoster: string;
  movieFound: boolean;
  message: string;
  @Input() movie: any;
  constructor(public http: MovieService) {
    console.log('details...');
    http.apiData$.subscribe(data => this.movie = data);
    console.log(this.movie);
  }
  ngOnInit() {
  }
}
