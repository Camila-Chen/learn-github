function toggleBox(index) {
    currentIndex = index
    var box = ".box" + index;
    var change = index;
    var point = '.point' + change
    $(box).show();


    $('.point-t').removeClass('point-on');

    $(point).addClass('point-on');
    // hide
    var numbers = [1, 2, 3];
    numbers.forEach(myFunction);
    function myFunction(i) {
        if (i != index) {
            var b = ".box" + i
            $(b).hide()
        }
    }

}


$(document).ready(function () {


    $('.point1').addClass('point-on');

    $(".box2").hide();
    $(".box3").hide();
    $(".point-wrap1").click(function () {
        clear()
        toggleBox(1)
        recover()
    });
    $(".point-wrap2").click(function () {
        clear()
        toggleBox(2)
        recover()
    });
    $(".point-wrap3").click(function () {
        clear()
        toggleBox(3)
        recover()
    });

});

// $("point").css("background-color", "white");


//定义计时器
var currentIndex = 1
var timer = setInterval(function () {
    currentIndex = currentIndex + 1
    if (currentIndex > 3) {
        currentIndex = 1
    }
    toggleBox(currentIndex)
}, 2000);




//清除计时器函数
function clear() {
    window.clearInterval(timer);
}
//恢复计时器函数
function recover() {
    timer = setInterval(function () {
        currentIndex = currentIndex + 1
        if (currentIndex > 3) {
            currentIndex = 1
        }
        toggleBox(currentIndex)
    }, 2000);
    return timer
}

function change1() {
    window.location = "file:///Users/chentian/Documents/projects/web/code/Chinese.html"
}
function change2() {
    window.location = "file:///Users/chentian/Documents/projects/web/code/English.html"
}
