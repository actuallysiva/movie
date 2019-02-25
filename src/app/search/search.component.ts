import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField: FormControl = new FormControl();
  data: any;
  movie: any;
  moviePoster: string;
  movieFound: boolean;
  message: string;
  showList: boolean;
  movieList: any;
  constructor(public http: MovieService) {
    console.log('Search Component');
  }

  ngOnInit() {
  }

  // searchMovies(movieName: String): void {
  //   this.http.getMovie(movieName).subscribe(data => {
  //     this.data = data;
  //     this.http.setData(data);
  //   });
  // },
  searchMovies(movieName: String): void {
    this.http.getMovie(movieName).subscribe( data => {
     if (data.Response === 'True') {
      this.movie = data;
      this.movieList = data.Search;
      console.log(this.movieList);
      this.showList = true;
      if (this.movie.Poster !== 'N/A') {
        this.moviePoster = this.movie.Poster;
      } else {
        this.moviePoster = '';
      }
      this.movieFound = true;
    } else {
      this.movieFound = false;
      this.message = 'No movie was found that matched your search.';
    }
     }
    );
  }

}
