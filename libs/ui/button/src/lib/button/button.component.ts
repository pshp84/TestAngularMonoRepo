import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[lib-button]',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{
    '[class.rm-flat]':'type==="flat"',
    '[class.rm-raised]':'type==="raised"',
    '[class.rm-stroked]':'type==="stroked"',
    '[class.rm-basic]':'type==="basic"'
  }
})

export class ButtonComponent{
  @Input() type : 'flat' | 'basic' | 'raised' | 'stroked' = 'basic' 

  constructor(){}
  

}
