var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green";
boxes[1].style.backgroundColor = "purple";
boxes[2].style.backgroundColor = "#191919";
boxes[3].style.backgroundColor = "blanchedalmond";

for (i = 0; i < boxes.length; i++) {
    boxes[i].style.marginLeft = 0;
    boxes[i].style.marginTop = 0;
}

function firstBoxClicked() {
    console.log("Box 1 clicked!");
    var currentMargin = parseInt(boxes[0].style.marginLeft);
    currentMargin += 5;
    boxes[0].style.marginLeft = currentMargin + 'px';
    console.log("Box 1 margin-left: " + currentMargin);
}

function secondBoxClicked() {
    console.log("Box 2 clicked");
    var currentMargin = parseInt(boxes[1].style.marginLeft);
    currentMargin += 10;
    boxes[1].style.marginLeft = currentMargin + 'px';
    console.log("Box 2 margin-left: " + currentMargin);
}

function thirdBoxClicked() {
    console.log("Box 3 clicked");
    var currentMargin = parseInt(boxes[2].style.marginLeft);
    currentMargin += 15;
    boxes[2].style.marginLeft = currentMargin + 'px';
    console.log("Box 3 margin-left: " + currentMargin);
}

function fourthBoxClicked() {
    console.log("Box 4 clicked");
    var currentMargin = parseInt(boxes[3].style.marginLeft);
    currentMargin += 20;
    boxes[3].style.marginLeft = currentMargin + 'px';
    console.log("Box 4 margin-left: " + currentMargin);
}

function fifthBoxClicked() {
    console.log("Box 5 clicked");
    var currentMargin = parseInt(boxes[4].style.marginTop);
    currentMargin += 25;
    boxes[4].style.marginTop = currentMargin + 'px';
    console.log("Box 1 margin-top: " + currentMargin);
}

boxes[0].addEventListener("click", firstBoxClicked);
boxes[1].addEventListener("click", secondBoxClicked);
boxes[2].addEventListener("click", thirdBoxClicked);
boxes[3].addEventListener("click", fourthBoxClicked);
boxes[4].addEventListener("dblclick", fifthBoxClicked);
