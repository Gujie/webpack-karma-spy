import { MyNameSpace } from './myNameSpace';

function bar() {
  return 42;
}

export function foo() {
  MyNameSpace.doSomething();
  const result = bar();
  return result;
}
