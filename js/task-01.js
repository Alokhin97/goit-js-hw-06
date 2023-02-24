const body = document.body;
const childrenBody = body.children;
console.log(childrenBody);
childrenBody.forEach((element, index, array) => {
  const list = array[1];
});
console.log(list);
const listItems = list.children;
console.log(listItems);
listItems.forEach((element, index, array) => {
  console.log(`Number of categories: ${array.length}`);
});
