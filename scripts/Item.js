import item_list from '../data/items.json' assert {type: 'json'};

class Item {

    item = []

    constructor() {
        this.item = this.getRandomItem()
    }

    getRandomItem() {
        //do rarity stat calculation
    }

}

export function getItem() {
    return new Item();
}