let audience_btn = document.getElementById('audience_btn');
let show_bx_1 = document.getElementsByClassName('show_bx_1')[0];

audience_btn.addEventListener('click',()=> {
    show_bx_1.classList.toggle('show_bx_active');
})

function auto_grow(e){
    e.style.height="5px";
    e.style.height=(e.scrollHeight)+"px";
}