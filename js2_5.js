//код модальне вікно на сторінка 2-5
//початок модального вікна	
let btn = document.querySelectorAll('.btn');		// звертаємось до нашої кнопки з класом btт
for(var i = 0; i < btn.length; i++)  {          //проходимось по кожній із кнопок
btn[i].onclick = function() {				// вішаємо на них подію onclick 
    form_group.style.display = "block";		// і додаємо стиль видимості. За замовчуванням
    }                                 // у нас її не видно, при кліку стає видно
}

let span = document.getElementsByClassName("close")[0];	// звертаємось до нашої зірочки яка буде закривати вікно
span.onclick = function() {						// вішаємо подію
    form_group.style.display = "none";				// і додаємо стиль, приховти вікно modal
}

//меню на сторінках
let cbox = document.getElementById("check_menu")
let menu_burger = document.getElementById("menu_burger").onclick = function openNav(){
    if(cbox.checked){
 document.getElementById("menu").style.width = "270px";
 document.getElementById("menu").style.display = "inline";
 document.getElementById("menu").style.marginLeft="16px";
 document.getElementById("menu").style.marginTop="16px";
 document.getElementById("menu_burger").style.position="absolute";
 document.getElementById("menu_burger").style.left="250px";
    }

    else{
document.getElementById("menu").style.width = "0px";
document.getElementById("menu").style.display = "none";
document.getElementById("menu").style.marginLeft="0px";
document.getElementById("menu").style.marginTop="0px";
document.getElementById("menu_burger").style.position="static";
 }

}


//animation scroll
var skroll = new Skroll()
           .add(".header",{
                   animation:"zoomIn",
                   duration:600
           })
           .add(".anim1",{
                   animation:"fadeInUp",
                   delay:120,
                   duration:600,
                   wait:250
           })
           .add(".anim2",{
                   animation:"flipInX",
                   delay:120,
                   duration:750
           })
           .add(".anim3",{
                   animation:"rotateLeftIn",
                   delay:100,
                   duration:750
           })
           .add(".anim4",{
                   animation:"slideInLeft",
                   delay:80,
                   duration:800
           })
           .add(".anim5",{
                   animation:"growInLeft",
                   delay:80,
                   duration:500,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
           })
           .add(".anim6",{
                   animation:"growInRight",
                   delay:80,
                   duration:500,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
           })
           .addAnimation("spinIn",{
                   start:function(el){
                     el.style["transform"] = "rotate(-360deg) scale(.2,.2)";
                     el.style["transform-origin"] ="50% 50%";
                     el.style["opacity"] = 0;
              },
              end:function(el){
                  el.style["transform"] = "rotate(0deg) scale(1,1)";
                  el.style["opacity"] = 1;
              }
           })
           .add(".anim7",{
                   animation:"spinIn",
                   delay:80,
                   duration:500,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
           })
           .add(".anim8",{
                   animation:"fadeInDown",
                   delay:75,
                   duration:150,
                   triggerBottom:1,
                   easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
           })
           .init();