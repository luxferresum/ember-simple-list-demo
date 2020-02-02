import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CreateComponent extends Component {
  @service() data;
  counter = 0;

  @action add() {
    this.data.addItem(`item ${this.counter++}`);
  }
}
