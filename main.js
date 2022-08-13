// --------------- Task 1 --------------

//let i = 0
//
//const foo = () => {
//    i += 1
//    console.log(i)
//}
//
//foo() //1
//foo() //2
//foo() //3


// --------------- Task 2 --------------

//const d = {
//    left: {
//        left: {
//            left: 1,
//            right: {
//                left: 0,
//                right: 1,
//            },
//        },
//        right: {
//            left: 0,
//            right: 1,
//        },
//    },
//    right: 1,
//    }
//
//
//
//
//function recurse_tree(item) {
//    let res = {}
//
//    for(let j in item) {
//
//        if(item[j] === 0){
//            item[j] = 1
//            res[j] = item[j]
//
//        } else if (item[j] === 1){
//            item[j] = 0
//            res[j] = item[j]
//
//        } else if (item[j] instanceof Object) {
//            recurse_tree(item[j]);
//            res[j] = item[j]
//            continue;
//        } else {
//            return 0
//        }
//
////        document.writeln(j + ' = ' + item[j]);
//
//    }
//    return res
//}
//console.log(recurse_tree(d))


// --------------- Task 3 -------------- Variant 1 -----------

//const bar = (num) => {
//
//
//let arr = [];
//
//for(let i = 0; i < num; i++){
//  arr[i] = [];
//
//for(let j = 0; j < num; j++){
//
//    if(arr[i][j] = i === j || i === num - j - 1){
//        arr[i][j] = 2
//    } else if(i < num / 2 && j > i && j < num-i ) {
//        arr[i][j] = 1;
//    }
//    else if(i > num / 2 && j >= num-i && j < i) {
//        arr[i][j] = 1;
//    }
//    else {
//        arr[i][j] = 0;
//    }
//
//  }
//
//
//}
//
//return arr
//
//}
//
//console.log(bar(5))
//console.log(bar(4))
//console.log(bar(3))

// --------------- Task 3 -------------- Variant 2 -----------

//
//function bar(n) {
//
//    // Create array
//    let a = new Array(n);
//    for (let i = 0; i < n; i++) {
//        a[i] = new Array(n);
//    }
//
//    // Fill in array with data
//    for (let i = 0; i < n; i++) {
//        for (let j = 0; j < n; j++) {
//            // Main diagonal
//            if (i === j) {
//                a[i][j] = 2;
//            // Secondary diagonal
//            } else if (i === n-j-1) {
//                a[i][j] = 2;
//            // Above diagonals
//            } else if (i < n / 2 && j > i && j < n-i) {
//                a[i][j] = 1;
//            // Below diagonals
//            } else if (i > n / 2 && j >= n-i && j < i) {
//                a[i][j] = 1;
//            } else {
//                a[i][j] = 0;
//            }
//        }
//    }
//
//    return a;
//}
//
//
// console.log(bar(1));
// console.log(bar(2));
// console.log(bar(3));
// console.log(bar(4));
// console.log(bar(5));
// console.log(bar(6));





// --------------- Task 4 --------------

const block_1 = document.querySelector('.block_red')
const block_2 = document.querySelector('.block_blue')
const block_3 = document.querySelector('.block_green')
const block_4 = document.querySelector('.block_purple')
const block_5 = document.querySelector('.block_brown')
const block_6 = document.querySelector('.block_beige')


block_1.addEventListener('click', () => {
    block_1.classList.toggle('block_1_color_change')
})

block_2.addEventListener('click', () => {
    block_2.classList.toggle('block_2_color_change')
})

block_3.addEventListener('click', () => {
    block_3.classList.toggle('block_3_color_change')
})

block_4.addEventListener('click', () => {
    block_4.classList.toggle('block_4_color_change')
})

block_5.addEventListener('click', () => {
    block_5.classList.toggle('block_5_color_change')
})

block_6.addEventListener('click', () => {
    block_6.classList.toggle('block_6_color_change')
})

