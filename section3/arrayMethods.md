The "pop" method:
Removes the last element in an array, and returns that element.
Syntax is  `pop()`.
If you then call the array, it will return without the last element.

The "push" method:
Adds element(s) on to the end of an existing array, and then returns the updated `length` of the array.
Syntax is `push(element0, element1...)`.
Can also merge two arrays with syntax `array1.push(...array2)`

The "shift" method:
Works like "pop" but on the first element in the array. The first element, index[0], is removed and that value is returned. The index of all the remaining elements shifts down.
Syntax is `shift()`.

The "unfshift" method:
Works like "push" but adds new elements to the beginning of the array, and then returns the new `length` of the array.
Syntax is `unshift(element0, element1...)`.
Important to remember that if multiple elements are added in one "unshift", they will be added in a chunk in the same order they were listed. Adding the same elements by running "unshift" multiple times with only one parameter will give your array a different order.
