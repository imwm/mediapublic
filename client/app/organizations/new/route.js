import {Route} from 'backbone-routing';
import View from '../show/view';
import Station from '../model';

export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
  },

  render() {
    this.view = new View({
      model: new Station()
    });
    this.container.show(this.view);
  }
});
