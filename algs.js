// const testArr = [1,3,5,7];


// Cumalative Sum

export function cumSum(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    };
    return total;
}
// console.log(sum(testArr));



// Binary Search:
export function search(arr, target, start=0, end=arr.length-1) {

    if (start > end) {
        console.log("Not Found!");
        return -1;
    }

    const middle = Math.floor( (start + end) / 2 );


    if (arr[middle] === target) {
        console.log(`${target} found at ${middle}`);
        return middle;
    }

    if (arr[middle] > target) {
        return search(arr, target, start, middle-1);
    }

    if (arr[middle] < target) {
        return search(arr, target, middle+1, end);
    }

}
//console.log(search(testArr, 3)); // 3 found at 1 \n 1



// Least recently used cache (LRU)

export class LRU {
    constructor(capicity) {
        this.capacity = this.capacity;
        this.cache = new Map();
    }

    getItem(key) {
        const item = this.cache.get(key);

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    putItem(key, val) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.oldestItem);
        }

        this.cache.set(key, val);
    }

    get oldestItem() {
        return this.cache.keys().next().value;
    }
}