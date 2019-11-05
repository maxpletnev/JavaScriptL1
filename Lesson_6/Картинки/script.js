 window.onload = function () {
            function changePic(event) {
                var bigDiv = document.getElementById('big');
                bigDiv.innerHTML = '';
                var smallSrc = event.currentTarget.getAttribute('src');
                var newImg = document.createElement('img');
                newImg.src = smallSrc.replace('small', 'big');
                bigDiv.appendChild(newImg);
            }
            var img = document.getElementsByClassName('image');
            for (var i = 0; i < img.length; i++) {
                img[i].onclick = changePic;
            }
        }
 var pic_count = document.getElementsByClassName('pop').length;
document.addEventListener('keydown', function(event) {
    var new_hash;
    if (event.keyCode == 37) {
        new_hash = parseInt(window.location.hash.substring(4)) - 1;
    } else if (event.keyCode == 39) {
        new_hash = parseInt(window.location.hash.substring(4)) + 1;
    } else {
        return;
    }
 
    new_hash = new_hash > pic_count ? 1 : (new_hash < 1 ? pic_count : new_hash);
    window.location.hash = 'pic' + new_hash;
}, true);