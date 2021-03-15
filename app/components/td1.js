import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class td1Component extends Component {
    @tracked text;
    @tracked charAvailable = 100;
    @tracked alert = "primary";
    @tracked savedText = '';
    @tracked saveDisplay = "none";

    @action
    countText() {
        this.charAvailable = 100 - this.text.length;
        this.alertColor();
    }

    @action
    clear() {
        this.text = ''
        this.charAvailable = 100;
        this.alertColor();
    }

    @action
    save(text) {
        this.savedText = text;
        if (this.savedText.length > 0) {
            this.saveDisplay = "block";
        }
        else {
            this.saveDisplay = "none";
        }
    }

    alertColor() {
        if (this.charAvailable < 10) {
            this.alert = "danger";
        }
        else if (this.charAvailable < 30) {
            this.alert = "warning";
        }
        else if (this.charAvailable < 50) {
            return this.alert = "success";
        }
        else {
            return this.alert = "primary";
        }
    }
}