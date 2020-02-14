function bar() {
  return 42;
}

export function foo() {
  const result = bar();
  return result;
}
