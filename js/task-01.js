const body = document.body;
const childrenBody = body.children;
console.log(childrenBody);
childrenBody.forEach((array) => {
  const list = array[1];
});
console.log(list);
const listItems = list.children;
console.log(listItems);
listItems.forEach((array) => {
  console.log(`Number of categories: ${array.length}`);
});
