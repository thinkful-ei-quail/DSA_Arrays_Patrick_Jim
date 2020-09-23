// const Memory = require('./memory');
// const memory = new Memory();
// class Array {

//   constructor() {
//     this.length = 0;
//     this._capacity = 0;
//     this.ptr = memory.allocate(this.length);
//   }

//   push(value) {
//     console.log(this.length);
//     if(this.length >= this._capacity) {
//       this._resize((this.length + 1) * Array.SIZE_RATIO);
//     }
//     memory.set(this.ptr + this.length, value);
//     this.length++;
//   }

//   _resize(size) {
//     const oldPtr = this.ptr;
//     this.ptr = memory.allocate(size);
//     if (this.ptr === null) {
//       throw new Error('Out of memory');
//     }
//     memory.copy(this.ptr, oldPtr, this.length);
//     memory.free(oldPtr);
//     this._capacity = size;
//   }

//   get(index) {
//     if(index < 0 || index >= this.length) {
//       throw new Error('Index error');
//     }
//     return memory.get(this.ptr + index);
//   }

//   pop() {
//     if(this.length == 0) {
//       throw new Error('Index error');
//     }
//     const value = memory.get(this.ptr + this.length - 1);
//     this.length--;
//     return value;
//   }

//   insert(index, value) {
//     if(index < 0 || index >= this.length) {
//       throw new Error('Index error');
//     }
//     if(this.length >= this._capacity) {
//       this._resize((this.length + 1) * Array.SIZE_RATIO);
//     }
//     memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
//     memory.set(this.ptr + index, value);
//     this.length++;
//   }

//   remove(index) {
//     if(index < 0 || index >= this.length) {
//       throw new Error('Index error');
//     }
//     memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
//     this.length--;
//   }
// }
// Array.SIZE_RATIO = 3;

// function main(){

//   Array.SIZE_RATIO = 3;

//   // Create an instance of the Array class
//   let arr = new Array();

//   // Add an item to the array
//   arr.push(3);
//   arr.push(5);
//   arr.push(15);
//   arr.push(19);
//   arr.push(45);
//   arr.push(10);

//   arr.pop();
//   arr.pop();
//   arr.pop();

//   console.log(arr.get(0));
//   arr.length = 0;
//   arr.push('tauhida');
//   console.log(arr.get(0).toString());


//   console.log(arr);
// }

// main();

function whiteSpaceReplacer(string) {
  for(let i = 0; i < string.length; i++) {
    if(string.charAt(i) === ' ') {
      string = string.replace(' ', '%20');
    }
  }
  return string;
}
//O(n)

//whiteSpaceReplacer('this is a test');

function filter(arr) {
  for (let i = arr.length; i >= 0; i--) {
    if(arr[i] < 5) {
      arr.splice(arr[i], 1);
    }
  }
  return arr;
}
//O(n)
//console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

function maxSum(arr) {
  let result = -Infinity;
  let maxSum = -Infinity;
  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum = arr[i];
    maxSum = -Infinity;
    for (let j = i + 1; j < arr.length; j++) {
      currSum += arr[j];
      if(currSum > maxSum) {
        maxSum = currSum;
      }
    }
    if(maxSum > result) {
      result = maxSum;
    }
  }
  return result;
}
//O(n^2)
//console.log(maxSum([-4, 6, -3, 5, -2, 1]));

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length) {
    if(j < arr2.length) {
      if(arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      }
      else {
        result.push(arr2[j]);
        j++;
      }
      continue;
    }
    result.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
//O(n)
// console.log(merge([0, 2, 4, 6], [1, 3, 5, 7]));
// console.log(merge([0, 2, 4], [1, 3, 5, 7]));
// console.log(merge([0, 2, 4, 6], [1, 3, 5]));

function removeCharacters(string, delims) {
  for(let i = 0; i < delims.length; i++) {
    string = string.replace(delims.charAt(i), '');
  }
  return string;
}
//O(n) depending on String.replace
// console.log(removeCharacters('Hello World', 'eld'));
// console.log(removeCharacters('Hello World123!', 'eld2!'));

function products(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product;
    for (let j = 0; j < arr.length; j++) {
      if(j === i) {
        continue;
      }
      product = (product ? arr[j] * product : arr[j]);
    }
    if(product) {
      result.push(product);
    }
  }
  return result;
}

//O(n^2)
//console.log(products([1, 3, 9, 4]));

function changeArray(arr) {
  let points = [];
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 0) {
        points.push({row: i, column: j});
      }
    }
  }
  let blackList = {
    rows: [],
    columns: []
  };
  for(let i = 0; i < points.length; i++) {
    const {row, column} = points[i];
    if(!blackList.rows.includes(row)) {
      for(let col = 0; col < arr[row].length; col++) {
        arr[row][col] = 0;
      }
      blackList.rows.push(row);
    }
    if(!blackList.columns.includes(column)) {
      for(let ro = 0; ro < arr.length; ro++) {
        arr[ro][column] = 0;
      }
      blackList.columns.push(column);
    }
  }
  return arr;
}
//O(nlog(n))
// console.log(changeArray([[1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]]));

function rotation(str1, str2) {
  let currWord = '';
  let startIndex = 0;
  for (let i = 0; i < str2.length; i++) {
    currWord = '';
    startIndex = i;
    currWord += str2.charAt(i);
    for (let j = startIndex + 1; j !== startIndex; j = (j + 1) % str2.length) {
      currWord += str2.charAt(j);
    }
    if(currWord === str1) {
      return true;
    }
  }
  return false;
}
//O(n^2)
// console.log(rotation('amazon', 'azonma'));
// console.log(rotation('amazon', 'azonam'));