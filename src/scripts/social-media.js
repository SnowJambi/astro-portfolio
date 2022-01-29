function changeCss(){
    document.querySelector('body').classList.toggle('dark')
}

window.onload = function(){
    document.querySelector(".slider").addEventListener( 'click', changeCss);
}