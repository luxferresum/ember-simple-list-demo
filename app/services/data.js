import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class DataService extends Service {
  @tracked arr = A();

  addItem(item) {
    this.arr.pushObject(item);
  }

  getAll() {
    return this.arr;
  }
}
