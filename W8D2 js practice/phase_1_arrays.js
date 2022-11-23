Array.prototype.unique = function() {
    let newArray = [];
    this.forEach((el)=> {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    })
    return newArray;
}


Array.prototype.twoSum = function() {
    let newArray = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                newArray.push([i,j])
            } 
        }
    }
    return newArray
}

Array.prototype.transpose = function() {
    let newArray = [];
    for (let i = 0; i < this[0].length; i++) {
        let tempArray = [];
        for (let j = 0; j < this.length; j++) {
            tempArray.push(this[j][i])
        }
        newArray.push(tempArray)
    }
    return newArray
}

Array.prototype.myEach = function(callback) {
    //this.forEach((el)=>{console.log(callback(el))})
    this.forEach((el)=>{callback(el)})
}

Array.prototype.myMap = function(callback) {
    let newArray = [];
    this.forEach((el)=>{newArray.push(callback(el))})
    return newArray;
}

Array.prototype.myReduce = function(callback, initialValue=this[0]) {
    let res = initialValue;
    if (initialValue === this[0]) {
        this.shift()
    }
    this.myEach((el)=>res = callback(res,el));
    // for (let i = (initialValue == this[0] ? 1 : 0) ; i < this.length; i++) {
    //     acc = callback(acc,this[i]);
    // }
    return res;
}

Array.prototype.bubbleSort = function() {
    let sorted = false;
    let i = 0;
    while (!sorted) {
        sorted = true;
        for (let j = i+1; j < this.length; j++) {
            if (this[i] > this[j]) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
                sorted = false;
            }
        }
        i++;
    }
    return this;
}

String.prototype.subString = function() {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let empty = "";
        for (let j = i; j < this.length; j++) {
            empty += this[j];
            newArray.push(empty);
        }
    }
    return newArray;
}

function range(min, max) {
    if (min === max) return min;
    return [min].concat(range(min + 1, max));
}

function sumRec(array) {
    if (array === []) return 0;
    let copy = [...array];
    let value = copy.shift();
    return sumRec(copy) + value;
}
