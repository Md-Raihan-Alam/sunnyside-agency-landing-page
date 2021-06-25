const menuBtn=document.querySelector('#link_hidden');
const menuSection=document.querySelector('.menu_section');
const pos=document.querySelector('#link_hidden')
menuBtn.addEventListener('click',()=>{
    if(menuSection.classList.contains('hide')){
    menuSection.classList.remove('hide');
    pos.classList.remove('pos_left');
    pos.classList.add('pos_right');
    menuSection.classList.remove('out');
    }else{
        setTimeout(function(){
            menuSection.classList.add('hide');
            pos.classList.remove('pos_right');

            //....and whatever else you need to do
        }, 1000);
        pos.classList.add('pos_left');
        menuSection.classList.add('out');
    }
});