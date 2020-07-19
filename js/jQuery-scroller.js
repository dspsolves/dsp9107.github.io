$flag = true;
$counter = 1;

const transitionTime = 600;

$(window).on("wheel", function (event) {
    if ($flag) {
        $flag = false;
        if (event.originalEvent.deltaY > 0) {
            $counter++;
            if ($counter == 1) {
                $counter++;
            }
            if ($counter == 2) {
                $("#s1").stop().animate({ top: "-100%" }, transitionTime);
                $("#s2").stop().animate({ top: "0%" }, transitionTime);
                $("#h1").stop().animate({ top: "-100%" }, transitionTime);
                $("#h2").stop().animate({ top: "0%" }, transitionTime);
            }
            if ($counter == 3) {
                $("#s2").stop().animate({ top: "-100%" }, transitionTime);
                $("#s3").stop().animate({ top: "0%" }, transitionTime);
                $("#h2").stop().animate({ top: "-100%" }, transitionTime);
                $("#h3").stop().animate({ top: "0%" }, transitionTime);
            }
            if ($counter > 3) {
                $counter = 4;
            }
        } else {
            $counter--;
            if ($counter <= 1) $counter = 1;
            if ($counter == 3) {
                $counter--;
            }
            if ($counter == 2) {
                $("#s3").stop().animate({ top: "100%" }, transitionTime);
                $("#s2").stop().animate({ top: "0%" }, transitionTime);
                $("#h3").stop().animate({ top: "100%" }, transitionTime);
                $("#h2").stop().animate({ top: "0%" }, transitionTime);
            }
            if ($counter == 1) {
                $("#s2").stop().animate({ top: "100%" }, transitionTime);
                $("#s1").stop().animate({ top: "0%" }, transitionTime);
                $("#h2").stop().animate({ top: "100%" }, transitionTime);
                $("#h1").stop().animate({ top: "0%" }, transitionTime);
            }
        }
        setTimeout(function () {
            $flag = true;
        }, 1000);
    }
});
