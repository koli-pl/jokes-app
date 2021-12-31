import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadComponentService } from '@app/dynamic-load/load-component.service';
import { Joke } from '@app/models/jokes.model';
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

  constructor(
    private jokeApiService: JokeApiService,
    private viewContainerRef: ViewContainerRef,
    private loadComponentService: LoadComponentService
  ) { }

  ngOnInit(): void {
  }

  loadJoke() {
    this.jokeApiService.getJoke()
      .subscribe((ans) => {
        this.loadComponent(ans as Joke);
      });
  }

  loadComponent(joke: Joke) {
    this.loadComponentService.loadComponent(joke)
      .then(loadedComponent => {
        let newComponentRef = this.viewContainerRef.createComponent(
          loadedComponent[this.loadComponentService.getClassName(joke.type)]
        ) as any;
        newComponentRef.instance['jokeData'] = joke;
      });
  }
}
