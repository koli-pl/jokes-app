import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Joke } from '@app/models/jokes.model';

@Component({
  template: `
    <p>
      Q: {{jokeData.setup}}
    </p>
    <p (click)="showAnswer()"
       class="answer-btn"
       *ngIf="!answerVisible">Show answer</p>
    <p *ngIf="answerVisible">A: {{jokeData.delivery}}</p>
    <hr/>
  `,
  styles: [
    `.answer-btn{
      cursor: pointer;
      text-decoration: underline;
    }`
  ]
})
export class QnAJokeComponent implements OnInit {
  jokeData: Joke;
  answerVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showAnswer() {
    this.answerVisible = true;
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QnAJokeComponent],
})
export class QnAJokeLazyLoadModule { }