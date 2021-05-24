
/*
Goal:
Visualize sorting algorithms

How do I want to display the array?
- Common way is to have each position in an array be represented as a rectangle.
- OOOOOH, what about if I made each rectangle hold a different color?
    create a node that holds the random number, which will be used for the height of the rectangle
    and a color, which will be chosen from the gradient library
    Each color will need to be attached to the correct value, so after sorting we can see a nice gradient
    So I need to figure out, if I generate an array with values 1, 100, can I shuffel it?
        YES I CAN!

Now I need to figure out how to display the array onto a canvas.


*/
class node {
    constructor(id, color) {
        this.id = id;
        this.color = color;
    }
}

class nodeArray {
    constructor(size) {
        this.stateArray = [];
        this.size = size;

        this.gradient = new Gradient();
        this.gradient.setGradient('#0000ff', '#80ffff');
        this.gradient.setMidpoint(this.size);

        this.arr = this.generateNodeArr();
        this.shuffle();
    }

    generateNodeArr() {
        // lets start with simple array
        var arr = [];
    
        
        let colorArr = this.gradient.getArray();
    
        // add a bunch of random numbers between 1 and 100
        for (let i = 1; i <= this.size; i++) {
            var nn = new node(i, colorArr[i - 1]);
            arr.push(nn);
        }
        this.stateArray.push(copyNodeArray(arr));
        return arr;
    }

    regenerateShuffledArray() {
        this.arr = this.generateNodeArr();
        this.shuffle();
    }

    // copied from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle() {
        var currentIndex = this.arr.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = this.arr[currentIndex];
            this.arr[currentIndex] = this.arr[randomIndex];
            this.arr[randomIndex] = temporaryValue;
            this.stateArray.push(copyNodeArray(this.arr));
        }
    }
    
    changeGradient(firstColor, secondColor) {
        this.gradient.setGradient(firstColor, secondColor);
    }

    get nodeArray() {
        return this.arr;
    }

    get getStateArray() {
        return this.stateArray;
    }
}

function copyNodeArray(arr) {
    let ret = [];
    for (i = 0; i < arr.length; i++) {
        var nn = new node(arr[i].id, arr[i].color);
        ret.push(nn);
    }
    return ret;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}   


