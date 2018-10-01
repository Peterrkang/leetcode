//recursively
var flatten = items => {
  let flat = [];
  items.forEach(element => {
    if (Array.isArray(element)) flat.push(...flatten(element));
    else flat.push(element);
  });
  return flat;
};

//   iteratively
var flatten = items => {
  let i = 0;
  while (i < items.length) {
    if (Array.isArray(items[i])) {
      items.splice(i, 1, ...items[i]);
    } else i++;
  }
  return items;
};

//test
var testArray = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];
console.log(flatten(testArray));
