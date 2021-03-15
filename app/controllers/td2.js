import Controller from '@ember/controller';

export default class Td2Controller extends Controller {
    get total() {
        return this.model.reduce((acc, prices) => { return acc + prices.price; }, 0);
    }
}
