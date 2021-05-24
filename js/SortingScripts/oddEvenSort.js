class oddEvenSort {
    constructor(arrToSort) {
        this.arr = copyNodeArray(arrToSort);
        this.stateArray = [];
        this.sort();
    }

    sort() {
        var sort = true;

        while (sort) {
            sort = false;
            // odd
            for (let i = 1; i < this.arr.length - 1; i+= 2) {
                if (this.arr[i].id > this.arr[i + 1].id) {
                    this.swap(i, i + 1);
                    sort = true;
                    this.stateArray.push(copyNodeArray(this.arr));
                }
            }

            // even
            for (let i = 0; i < this.arr.length - 1; i+= 2) {
                if (this.arr[i].id > this.arr[i + 1].id) {
                    this.swap(i, i + 1);
                    sort = true;
                    this.stateArray.push(copyNodeArray(this.arr));
                }
            }
        }
    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    get getStateArray() {
        return this.stateArray;
    }
}