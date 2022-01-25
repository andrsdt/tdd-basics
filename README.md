# TDD basics

_This is a simple repo created to explore the very basics of JS/TS testing using [jest.js](https://jestjs.io/)._

## The problem

In a hypothetical situation, we are asked to implement the **Stack** data structure without using arrays.

## The solution

As TDD developers, we will start by defining a test file for our class (`stack.test.js`) where we will make sure to cover the intended functionality of our new data structure. After doing so, we will start implementing the methods so that our tests pass, ensuring that all the logic is covered.

Regarding the actual solution, and following a recursive approach, we may define such a stack by means of a class with an object as its single attribute. This object, which we will call `top`, will be a custom `StackItem` type, made of two properties: `element` and `next`. `element` will be a reference to the top element of the stack, of generic type `<T>`, whereas `next` will be another `StackItem` object, where the recursion occurs. At the same time, we can make use of the OOP approach by defining getter methods to mimic the behavior of a stack (i.e. peek).
