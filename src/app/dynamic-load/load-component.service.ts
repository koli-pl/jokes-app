import { Injectable } from '@angular/core';
import { Joke, JokeType } from '@app/models/jokes.model';
import { ComponentData } from '@models/component-data';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {
  private componentsTypes = new Map<string, ComponentData>();
  constructor() {
    this.componentsTypes.set(
      JokeType.SIMPLE,
      {
        className: `SingleJokeComponent`,
        importPath: `single-joke/single-joke`
      });
    this.componentsTypes.set(
      JokeType.QUESTION_AND_ANSWER,
      {
        className: `QnAJokeComponent`,
        importPath: `qna-joke/qna-joke`
      });
  }

  getComponentData(jokeType: string) {
    if (!this.componentsTypes.has(jokeType)) {
      console.log('ERROR: no dynamic component in set');
      throw Error();
    }
    return this.componentsTypes.get(jokeType)!;
  }

  getClassName(jokeType: string) {
    let componentToCheck = this.getComponentData(jokeType);
    return componentToCheck?.className;
  }

  loadComponent(joke: Joke) {
    let componentToLoad = this.getComponentData(joke.type);
    return import(`./${componentToLoad?.importPath}.component`);
  }

}

