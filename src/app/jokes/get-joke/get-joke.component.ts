import { Component, OnInit } from '@angular/core';

import { JokeApiService } from '@services/joke-api.service';

@Component({
  selector: 'app-get-joke',
  template: `
    <p>
      <input (click)="loadJoke()" type="button" value="Load random joke">
    </p>
  `,
  styles: [
  ]
})
export class GetJokeComponent implements OnInit {

  constructor(private jokeApiService: JokeApiService) { }

  ngOnInit(): void {
  }

  loadJoke() {
    this.jokeApiService.getJoke()
      .subscribe((ans) => {
        console.log(ans);
      });
  }
}
