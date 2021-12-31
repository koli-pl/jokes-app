import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

import { Joke } from '@models/jokes.d';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  constructor(private httpClient: HttpClient) { }

  getJoke() {
    return this.httpClient.get<Joke>(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw`)
      .pipe(catchError(
        (err) => {
          console.log(`ERROR: https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw:`, err);
          return err;
        }
      ));
  }
}
