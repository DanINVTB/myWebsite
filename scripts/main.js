
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'https://png.pngtree.com/element_origin_min_pic/16/11/10/f373183c6a9b0cf797b9116f108f9978.jpg') {
        myImage.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6u7W1Kw8KqjkfuLQ_xtCwo25iUeYeEpWlOit5FgRpj13dLEx');
    } else {
        myImage.setAttribute('src', 'https://png.pngtree.com/element_origin_min_pic/16/11/10/f373183c6a9b0cf797b9116f108f9978.jpg');
    }
}