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

export class GildedRose {
    items: Array<Item>;
    MAX_QUALITY = 50;
    MIN_QUALITY = 0;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach((item) => {
                if (item.name == 'Sulfuras, Hand of Ragnaros')
                    item.quality = 80
                else if (item.name == 'Aged Brie')
                    this.increaseQuality(item, 1)
                else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn <= 10)
                        this.increaseQuality(item, 2)
                    else if (item.sellIn <= 5)
                        this.increaseQuality(item, 3)
                    else if (item.sellIn <= 0)
                        this.setQuality(item, 0);
                    else this.increaseQuality(item, 1)
                } else if (item.name == "Conjured Mana Cake")
                    this.decreaseQuality(item, 2)
                else if (item.sellIn < 0)
                    this.decreaseQuality(item, 2)
                else
                    item.quality >= this.MIN_QUALITY && item.quality <= this.MAX_QUALITY ? this.decreaseQuality(item, 1) : false;
            }
        );
        return this.items;
    }

    decreaseQuality(item: Item, quantity) {
        item.quality -= quantity;
    }

    increaseQuality(item: Item, quantity) {
        item.quality += quantity;
    }

    setQuality(item: Item, value) {
        item.quality = value;
    }

}
