let nav = document.querySelector('nav');
let menuToggle = document.querySelector('.menu');

menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open-nav');
    setTimeout(() => {
    nav.classList.remove('open-nav');
    },3000)
})

function streamSelection(){
    let selectValueClass = document.querySelector('.select-class') 
    let selectStream = document.querySelector('.select-stream')
    selectValueClass.addEventListener('change',(e)=>{
        if(parseInt(e.target.value) <= 10){
            selectStream.setAttribute('disabled','true')
        }else{
            selectStream.removeAttribute('disabled')
        }
    })
}
streamSelection();

