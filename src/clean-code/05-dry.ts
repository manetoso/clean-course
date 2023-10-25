type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady() {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`${key} is required`);
          break;
        case 'number':
          if (<number>(<unknown>this[key]) <= 0)
            throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${typeof this[key]} is not valid!`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue Pants', 20, 'M');
  console.log(bluePants.toString());
})();
