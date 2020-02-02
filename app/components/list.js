import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class CreateComponent extends Component {
  @service() data;

  get items() {
    return this.data.getAll();
  }
}
