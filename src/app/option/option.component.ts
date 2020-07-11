import {Component, HostBinding, Input} from '@angular/core';

export type STATE = 'not-selected' | 'selected' | 'selectedCorrect' | 'selectedIncorrect';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() text = 'Option';
  @HostBinding('attr.state') @Input() state: STATE = 'not-selected';
}
