import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() movies: any;
  selectedMovie: any;
  constructor(public http: MovieService) { }

  ngOnInit() {
    this.selectedMovie = this.movies[0];
  }

  myClickFunction(movie) {
    console.log(movie);
    this.selectedMovie = movie;
  }
}
