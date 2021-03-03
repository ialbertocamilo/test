export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export interface IGildedRose {
    decreaseQuality(item: Item, quantity: number): number

    increaseQuality(item: Item, quantity: number): number

    setQuality(item: Item, value): number
}

export abstract class AGildedRose implements IGildedRose {

    decreaseQuality(item: Item, quantity = 1) {
        return item.quality -= quantity;
    }

    increaseQuality(item: Item, quantity = 1) {
        return item.quality += quantity;
    }

    setQuality(item: Item, value) {
        return item.quality = value;
    }

}

export class GildedRose extends AGildedRose {
    items: Array<Item>;
    MIN_QUALITY = 0;
    MAX_QUALITY = 50;

    constructor(items = [] as Array<Item>) {
        super();
        this.items = items;
    }

    updateQuality() {
        this.items.forEach((item) => this.checkQuality(item));
    }

    checkQuality(item: Item) {
        switch (item.name) {
            case 'Sulfuras, Hand of Ragnaros':
                this.setQuality(item, 80);
                break;
            case 'Aged Brie':
                this.increaseQuality(item)
                break;
            case 'Backstage passes to a TAFKAL80ETC concert':
                if (item.sellIn <= 10)
                    this.increaseQuality(item, 2)
                else if (item.sellIn <= 5)
                    this.increaseQuality(item, 3)
                else if (item.sellIn < 0)
                    this.setQuality(item, 0);
                break;
            case "Conjured Mana Cake":
                this.decreaseQuality(item, 2)
                break;
            default:
                if (item.sellIn < 0)
                    this.decreaseQuality(item, 2)
                else
                    item.quality >= this.MIN_QUALITY && item.quality <= this.MAX_QUALITY ? this.decreaseQuality(item) : false;
                break;

        }
    }

}
