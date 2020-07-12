import { Component } from '@angular/core';
import { STATE } from './option/option.component';

interface Question {
  question: string;
  options: Option[];
  explanation?: string;
  checked: boolean;
}

interface Option {
  text: string;
  state: STATE;
  possiblePoints: number;
}

const questions: Question[] = [
  {
    question: 'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...',
    options: [
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 1
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 3
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 5
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 7
      }
    ],
    checked: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSelectedOption: Option;
  currentQuestion: Question = questions[0];
  index = 0;

  select(option: Option): void {
    if (!!this.currentSelectedOption) {
      this.currentSelectedOption.state = 'not-selected';
    }
    this.currentSelectedOption = option;
    this.currentSelectedOption.state = 'selected';
  }

  checkAnswer(): void {
    this.currentSelectedOption.state = 'checked';
    this.currentQuestion.checked = true;

    // this.index++;
    // this.currentQuestion = questions[this.index];
  }

  nextQuestion(): void {
    if (this.index + 1 < questions.length) {
      this.index++;
      this.currentQuestion = questions[this.index];
    }
  }
}
