import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  url: string;
  error: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    // this.url = 'https://jsonplaceholder.typicode.com/posts';
    // this.url = 'http://localhost:62188/api/Consulta';
       this.url = 'http://localhost:44346/api/Contact';
  }

  getPrueba() {
    return this.http.get(this.url)
      .pipe(tap(error => this.error),
        catchError(this.error));
  }

  getPost() {
    return this.http.post(
      this.url,
      JSON.parse('{"id": null, "firstname": "Jose","lastname": "Arcos","jobtitle": "Developer","emailaddress1": "Jose@ust.com"}'),
      this.httpOptions)
      .pipe(tap(error => this.error),
        catchError(this.error)
      );
  } // 500 400 416 200


}
