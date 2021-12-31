import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetJokeComponent } from '@jokes/get-joke/get-joke.component';

@NgModule({
  declarations: [
    GetJokeComponent
  ],
  exports: [
    GetJokeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JokesModule { }
