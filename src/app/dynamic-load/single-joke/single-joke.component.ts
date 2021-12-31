import { Component, OnInit } from '@angular/core';
import { Joke } from '@app/models/jokes.model';

@Component({
  template: `
    <p>
      {{jokeData.joke}}
    </p>
    <hr/>
  `,
  styles: [
  ]
})
export class SingleJokeComponent implements OnInit {
  jokeData: Joke;
  constructor() { }

  ngOnInit(): void {
  }

}
