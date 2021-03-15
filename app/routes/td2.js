import Route from '@ember/routing/route';

export default class Td2Route extends Route {
    model() {
        const prices = [{price: 300}, {price: 400}]
        return prices;
    }
}
