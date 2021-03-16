import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ServiceComponent extends Component {
    @tracked isSelected = 'notSelected';

    @action
    serviceClicked() {
        if (this.isSelected == 'notSelected') this.isSelected = 'selected';
        else this.isSelected = 'notSelected';
    }
}
