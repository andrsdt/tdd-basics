import { Stack } from '../src/Stack';

/**
 * @author andrsdt
 */
describe('Stack functionality', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('creates an empty stack', () => {
    expect(stack.peek).toBe(null);
  });

  it('pushes an element to the stack', () => {
    stack.push(1);
    expect(stack.peek).toBe(1);
  });

  it('pushes three elements to the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek).toBe(3);
  });

  it('pops the last element from the stack', () => {
    stack.push(1);
    stack.pop();
    expect(stack.peek).toBe(null);
  });

  it('pops from empty stack', () => {
    stack.pop();
    expect(stack.peek).toBe(null);
  });

  it('pops two elements from a the stack of three elements', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.peek).toBe(2);
  });
});
