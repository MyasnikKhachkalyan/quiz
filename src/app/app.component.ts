import { Component } from '@angular/core';
import { STATE } from './option/option.component';

interface Question {
  question: string;
  options: Option[];
  answer: number;
  explanation?: string;
  checked: boolean;
}

interface Option {
  text: string;
  state: STATE;
  possiblePoints: number;
  id: number;
}

const questions: Question[] = [
  {
    question: 'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...',
    options: [
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 1,
        id: 1
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 3,
        id: 2
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 5,
        id: 3
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        state: 'not-selected',
        possiblePoints: 7,
        id: 4
      }
    ],
    answer: 4,
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
    const isCorrect = this.check();
    if (isCorrect) {
      this.currentSelectedOption.state = 'selectedCorrect';
    } else {
      this.currentSelectedOption.state = 'selectedIncorrect';
      this.currentQuestion.options.find((o) => o.id === this.currentQuestion.answer).state = 'selectedCorrect';
    }
    this.currentQuestion.checked = true;

    // this.index++;
    // this.currentQuestion = questions[this.index];
  }

  private check(): boolean {
    return this.currentSelectedOption ? this.currentSelectedOption.id === this.currentQuestion.answer : false;
  }

  nextQuestion(): void {
    if (this.index + 1 < questions.length) {
      this.index++;
      this.currentQuestion = questions[this.index];
    }
  }
}
