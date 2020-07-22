// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function move() {
    var element = document.getElementById("animate");
    var position = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (position == 350) {
            clearInterval(id);
        } else {
            position++;
            element.style.top = position + "px";
            element.style.left = position + "px";
        }
    }
}