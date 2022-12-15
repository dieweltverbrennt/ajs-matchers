export default function heroSorting(arr) {
  const sortedArr = arr.sort((a, b) => b.health - a.health);
  return sortedArr;
}
