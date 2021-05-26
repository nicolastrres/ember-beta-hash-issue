import Component from '@ember/component';
import { computed } from '@ember/object';

export default class ExampleComponentComponent extends Component {
  @computed('item.label')
  get label() {
    return this.item.label ?? 'Empty label';
  }
}
