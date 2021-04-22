'use strict';

const Memory = require ('./memory');

const memory = new Memory;

class Array{

	constructor(){
		this.length = 0;
        this.ptr = memory.allocate(this.length);
        this._capacity = 0;
	}

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--;
    }


}

function main() {

    Array.SIZE_RATIO = 3;

    //create instance of the Array class
    let arr = new Array();

    // Add an item to the array main function  
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();


    arr = new Array();
    arr.push("tauhida");
    console.log(arr.get(0));

}

main()

//question 2:  Array { length: 6, ptr: 3, _capacity: 12 }
// address = memory[3] to memory[8]

//question 3:  Array { length: 3, ptr: 3, _capacity: 12 }
// memory = memory[3] to memory[5]

//question 4:  Returns NaN.  
//Memory arrays cannot store strings and only values, as a result, it only shows NaN




