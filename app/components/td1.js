import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class td1Component extends Component {
    @tracked count = 2;
    @tracked multiple = 1;

    @tracked text;
    @tracked textLen = 100;

    get total() {
        return this.count + this.multiple;
    }
    @action
    double() {
        this.multiple = this.multiple * 2;
    }
    @action
    change(amount) {
        this.count = this.count + amount;
    }

    @action
    countText() {
        this.textLen = 100 - this.text.length;
    }

    @action
    clear() {
        this.text = ''
        this.textLen = 100;
    }
}