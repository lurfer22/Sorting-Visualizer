class selectionSort {

    constructor(arrToSort) {
            this.arr = copyNodeArray(arrToSort);
            this.stateArray = [];
            this.sort();
    }

    sort() {
        var i, j, minimum;
        
        for (i = 0; i < this.arr.length - 1; i++) {
            minimum = i;

            for (j = i + 1; j < this.arr.length; j++) {

                if (this.arr[j].id < this.arr[minimum].id) {
                    minimum = j;
                }
            }

            if (minimum !== i) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[minimum];
                this.arr[minimum] = temp;
                this.stateArray.push(copyNodeArray(this.arr));
            }
        }
    }

    get getStateArray() {
        return this.stateArray;
    }
}