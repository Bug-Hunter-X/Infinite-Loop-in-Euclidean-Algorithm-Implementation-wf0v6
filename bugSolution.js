function foo(a, b) {
  if (a === 0) {
    return b === 0 ? 0 : b; // Handle the case where a is 0
  }
  if (b === 0) {
    return a; // Handle the case where b is 0
  }
  return foo(b % a, a);
}