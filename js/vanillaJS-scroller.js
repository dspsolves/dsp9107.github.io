var scrolling = false;

document.getElementById("s1").addEventListener("wheel", function (WheelEvent) {
    console.log(WheelEvent.deltaY);

    if (WheelEvent.deltaY < 0) {
    } else {
        document.getElementById("s2").scrollIntoView();
    }
});

document.getElementById("s2").addEventListener("wheel", function (WheelEvent) {
    console.log(WheelEvent.deltaY);

    if (WheelEvent.deltaY < 0) {
        document.getElementById("s1").scrollIntoView();
    } else {
        document.getElementById("s3").scrollIntoView();
    }
});

document.getElementById("s3").addEventListener("wheel", function (WheelEvent) {
    console.log(WheelEvent.deltaY);

    if (WheelEvent.deltaY < 0) {
        document.getElementById("s2").scrollIntoView();
    } else {
        document.getElementById("s4").scrollIntoView();
    }
});

document.getElementById("s4").addEventListener("wheel", function (WheelEvent) {
    console.log(WheelEvent.deltaY);

    if (WheelEvent.deltaY < 0) {
        document.getElementById("s3").scrollIntoView();
    } else {
        document.getElementById("s5").scrollIntoView();
    }
});

document.getElementById("s5").addEventListener("wheel", function (WheelEvent) {
    console.log(WheelEvent.deltaY);

    if (!scrolling) {
        if (WheelEvent.deltaY < 0) {
            scrolling = true;
            document.getElementById("s4").scrollIntoView();
            scrolling = false;
        } else {
        }
    }
});
