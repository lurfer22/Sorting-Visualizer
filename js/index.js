/*
Tasks:
Animation for shuffling an array ✓
Cancel an animation ✓

*/

// cancel an animation
// could try a global var, boolean cancel;
var cancel = false;
var sortingAlgorithm;

let numOfNodes = 100;
var arr = new nodeArray(numOfNodes);

async function sortEvent(event) {
    // need to make sure that event is not an empty string
    if (event.originalTarget.id === "")
        return;
    
    var shor = event.originalTarget.id;
    cancel = false;
    sortingAlgorithm = null;

    //await loopStateArray(arr.getStateArray)
    //await drawArray(arr.nodeArray);
    await sleep(100);

    switch (shor) {
        case "bubble":
            sortingAlgorithm = new bubbleSort(arr.nodeArray);
            break;
        case "quick":
            sortingAlgorithm = new quickSort(arr.nodeArray);
            break;
        case "selection":
            sortingAlgorithm = new selectionSort(arr.nodeArray);
            break;
        case "insertion":
            sortingAlgorithm = new insertionSort(arr.nodeArray);
            break;
        case "oddEven":
            sortingAlgorithm = new oddEvenSort(arr.nodeArray);
            break;
        case "cancel":
            cancel = true;
            break;
    }
    if (sortingAlgorithm) {
        await sleep(100);
        await loopStateArray(sortingAlgorithm.getStateArray);
        
    }
    //arr = new nodeArray(numOfNodes);
    arr.regenerateShuffledArray();
}

function changeGradientEvent() {
    var firstColor = document.getElementById("firstColor").value;
    var secondColor = document.getElementById("secondColor").value;
    console.log(firstColor);
    console.log(secondColor);
    arr.changeGradient(firstColor, secondColor);
}

async function loopStateArray(stateArr) {
    let i = 0;
    while (i < stateArr.length) {
        await sleep(10);
        drawArray(stateArr[i]);
        if (cancel) { 
            return;
        }
        i++;
    }
}




