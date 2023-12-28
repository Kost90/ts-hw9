// filter

function Filterarray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter(condition);
}

// Stack

class Stack<T> {
  private arr: T[];

  push(item: T): void {
    this.arr.push(item);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  peek(): T | undefined {
    return this.arr[this.arr.length - 1];
  }
}

// Dictionary
interface IObject {
  [key: string]: string | number | boolean;
}

class Dictionary<T extends IObject> {
  private items: { [key: string]: T } = {};

  set(key: string, value: T): void {
    this.items[key] = value;
  }

  get(key: string): T | undefined {
    return this.items[key];
  }

  has(key: string): boolean {
    return key in this.items;
  }
}
