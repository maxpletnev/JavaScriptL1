var tr = document.getElementsByClassName("even");
var c;
var t;
for (var i = 0; i < tr.length; i++) {
    if (i % 2 == 0) {
        c = "black";
        t = "white";
    }
    tr[i].style.backgroundColor = c;
    tr[i].style.color = t;
}
