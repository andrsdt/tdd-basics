type StackItem<T> = {
  element: T | null;
  next: StackItem<T> | null;
};

/**
 * @author andrsdt
 */
export class Stack<T> {
  top: StackItem<T>;

  constructor() {
    this.top = { element: null, next: null };
  }

  get peek(): T | null {
    return this.top.element;
  }

  push(e: T): void {
    this.top.next = {
      element: this.top.element,
      next: this.top.next,
    };
    this.top.element = e;
  }

  pop(): T | null {
    const toPop = this.top.element;
    this.top = {
      element: this.top.next?.element ?? null,
      next: this.top.next?.next ?? null,
    };
    return toPop;
  }
}
