export default function heroSorting(arr) {
  arr.every((element) => (element.name !== undefined || element.health !== undefined || typeof element.health !== 'string'));
  const sortedArr = arr.sort((a, b) => b.health - a.health);
  return sortedArr;
}
