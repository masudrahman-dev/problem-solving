// problem 1
function mindGame(number) {
  return (number * 3 + 10) / 2 - 5;
}

// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));

// problem 2
function evenOdd(str) {
  if (str.length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
// console.log(evenOdd('Phero'));
// console.log(evenOdd('Batch7'));
// console.log(evenOdd('chatgpt'));

// problem 3
function isLGSeven(n) {
  const difference = n - 7;
  if (n < 7) {
    return difference;
  } else {
    return n * 2;
  }
}

// let result = console.log(isLGSeven(6));
// let result = console.log(isLGSeven(-15));
// let result = console.log(isLGSeven(15));

// problem 4
function findingBadData(arr) {
  const badData = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < 0) {
      badData.push(element);
    }
  }
  const badDataLength = badData.length;
  return badDataLength;
}
// console.log(findingBadData([1, 2, 5]));
// console.log(findingBadData([2, -5, -7, -13]));
// console.log(findingBadData([-4, -9, -5, -33, -55]));

// problem 5
function gemsToDiamond(g1, g2, g3) {
  const totalDiamond = g1 * 21 + g2 * 32 + g3 * 43;
  if (totalDiamond > 2000) {
    const diamondGet = totalDiamond - 2000;
    return diamondGet;
  }
  return totalDiamond;
}

// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(100, 5, 1));
