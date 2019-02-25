import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiData = new BehaviorSubject<Object>(null);
  public apiData$ = this.apiData.asObservable();

  constructor(public http: HttpClient) {
    console.log('Service constructor...');
  }
  public apiKey = '3fcf6962';

  public url = `https://www.omdbapi.com/?s=`;

  public getMovie(movieName: String): Observable<any> {
    return this.http.get(`${this.url}${movieName}&apiKey=${this.apiKey}`);
    }
    setData(data) {
      this.apiData.next(data);
    }
  }
