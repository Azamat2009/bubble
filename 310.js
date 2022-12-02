// 1
function timo_longest(a) {
    var c = 0, d = 0, l = 0, i = a.length;
    if (i) while (i--) {
      d = a[i].length;
      if (d > c) {
        l = i; c = d;
      }
    }
    return a[l];
  }
  arr=['Alex', 'George', 'Michael'];
  var longest = timo_longest(arr);
  console.log('1 ЗАДАНИЕ ---  '+ longest);

// 2
function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
  }