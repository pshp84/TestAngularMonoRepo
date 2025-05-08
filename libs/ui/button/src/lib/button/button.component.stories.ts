import {moduleMetadata, Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';
export default {
  title: 'ui-button',
  component: ButtonComponent,
  decorators:[
    moduleMetadata({
      imports:[],
    }),
  ],
} as Meta<ButtonComponent>;

const Template : StoryFn<ButtonComponent> = (args:ButtonComponent)=>({
  template:'<button lib-button [type]="type">Button Text</button>',
  props : args
})

export const Basic = Template.bind({})
  Basic.args= {
    type:'basic'
  }
export const Stroked = Template.bind({})
  Stroked.args= {
    type:'stroked'
  }
export const Flat = Template.bind({})
  Flat.args= {
    type:'flat'
  }
export const Raised = Template.bind({})
  Raised.args= {
    type:'raised'
  }



