function drawArray(arr) {
    let canvas = document.getElementById("canv");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    // Now I need to figure out how to output onto canvas
    // Like said before, we want them to be rectangles 
    // with a height proportional to each nodes id
        // so, height of each rectangle = ((height/arr size) * node.id)
    // and width need just equal (width / arr size)

    let baseRecWidth = canvas.clientWidth / arr.length; // px size
    let currentX = 0;

    // now I need to draw a bunch of rectangles onto the canvas
    // keeping the same width for each rectangle, while incrementing currentHeight by baseRecHeight every new rectangle
    // fillRect(x, y, width, height)
    // so x will be incrementing as we draw more rectangles
    // y will stay the same,
    // width will stay the same
    // and height will be changing
    for (i = 0; i < arr.length; i++) {
        let currNode = arr[i];
        let currHeight = ((canvas.clientHeight/arr.length) * currNode.id);
        context.fillStyle = currNode.color;
        context.fillRect(currentX, canvas.clientHeight - currHeight, baseRecWidth, currHeight);
        currentX += baseRecWidth;
    }
}






