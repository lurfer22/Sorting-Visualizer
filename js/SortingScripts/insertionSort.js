class insertionSort {
    constructor(arrToSort) {
        this.arr = copyNodeArray(arrToSort);
        this.stateArray = [];
        this.sort();
    }

    sort() {
        var j, key;
        for (let i = 1; i < this.arr.length; i++) {
            key = new node(this.arr[i].id, this.arr[i].color);
            j = i - 1;
            
            while (j >= 0 && key.id < this.arr[j].id) {
                this.arr[j + 1] = this.arr[j];
                // this.stateArray.push(copyNodeArray(this.arr));    
                j--;
            }
            
            this.arr[j + 1] = key
            this.stateArray.push(copyNodeArray(this.arr));
        }

    }

    get getStateArray() {
        return this.stateArray;
    }
}