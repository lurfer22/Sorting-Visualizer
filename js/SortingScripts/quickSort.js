class quickSort {

    constructor(arrToSort) {
        this.arr = copyNodeArray(arrToSort);
        this.stateArray = [];
        this.sort(0, this.arr.length - 1);
        
    }

    sort(lo, hi) {
        if (this.arr.length > 1) {
            var index = this.partition(lo, hi);
            if (lo < index - 1)
                this.sort(lo, index - 1);
            
            if (hi > index) 
                this.sort(index, hi);
        }
    }

    partition(lo, hi) {   
        var pivot = this.arr[Math.floor((lo + hi) / 2)].id;
        var i = lo;
        var j = hi;
        
        while (i <= j) {
            while (this.arr[i].id < pivot)
                i++;

            while (this.arr[j].id > pivot)
                j--;

            if (i <= j) {
                let temp = this.arr[i];
                this.arr[i] = this.arr[j];
                this.arr[j] = temp;
                this.stateArray.push(copyNodeArray(this.arr));
                
                i++;
                j--;
            }
        }
        
        return i;
    }

    get getStateArray() {
        return this.stateArray;
    }
}



