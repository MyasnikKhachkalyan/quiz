import {Component, HostBinding, HostListener, Input} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

export type STATE = 'not-selected' | 'selected' | 'checked';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  animations: [
    trigger('pointIn', [
      state('not-selected', style({
        opacity: 0,
        // transform: 'rotateY(0deg)'
      })),
      state('selected', style({
        opacity: 0,
        // transform: 'rotateY(0deg)'
      })),
      state('checked', style({
        opacity: 1,
        // transform: 'rotateY(0deg)'
      })),
      transition('* => checked', [
        animate(500, keyframes([
          style({
            transform: 'rotateY(0deg)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'rotateY(-360deg)',
            opacity: 1,
            offset: 1
          }),
          // style({
          //   transform: 'translateY(-20px)',
          //   opacity: 0,
          //   offset: 1
          // })
        ]))
      ]),
    ])
  ]
})
export class OptionComponent {
  @Input() text = 'Option';
  @Input() points = '+1';
  @HostBinding('attr.state') @Input() state: STATE = 'not-selected';
}
