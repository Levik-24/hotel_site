const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
 
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        overlay.style.display = 'flex';
    })
});

form.addEventListener('click', function(e){
    e.stopPropagation();
})

overlay.addEventListener('click', function(){
    overlay.style.display = 'none';
})

