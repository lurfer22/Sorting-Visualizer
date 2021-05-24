class bubbleSort {
    constructor(arrToSort) {
        this.arr = copyNodeArray(arrToSort);
        this.stateArray = [];
        this.sort();
    }

    sort() {
        let swapped = false;
        let i = 0;
        let j = 0;
        while (i < this.arr.length) {
            for (j = 0; j < this.arr.length - 1; j++) {
                if (this.arr[j].id > this.arr[j + 1].id) {
                    this.swap(this.arr, j);
                    swapped = true;

                    this.stateArray.push(copyNodeArray(this.arr));
                }
            }
            if (swapped == false) 
                break;
            swapped = false;

            // why do I have to sleep before incrementing i? idk but it worked pog
            i++;
        }
        
    }

    swap(arr, i) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[i+1];
        this.arr[i + 1] = temp;
    }

    get getStateArray() {
        return this.stateArray;
    }
}








