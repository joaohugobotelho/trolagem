let button = document.getElementById('no');
let height = window.innerHeight - 100;
let widht = window.innerWidth - 150;

button.addEventListener ('mouseover' , function () {
    button.style.position = "absolute" ;
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.ramdom() * widht + "px";
})