

const x =  document.querySelector("#header__menu__mobele")

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active')
    document.querySelector("#header__menu").classList.toggle('header__menu__active')
    x.classList.toggle('header__menu__mobele__active')
}
;
const colaps =document.querySelectorAll(".services__collapse__statistics");
for (item of colaps) {
	item.addEventListener('click', function(){

		if(this.classList.contains('active')) {
			this.classList.remove('active');
		} else {
			for(el of colaps){
				el.classList.remove('active');

			}
			this.classList.add('active');
		}
	})
}
	

  // Optional parameters
 
// }
// document.querySelector('.icon__statistics2').onclick=function(){
// 	colaps.classList.toggle('services__collapse__none');
// }
// const x = document.getElementById("header_nav_link");
// const navIcons = document.querySelector("#nav_icon")
// const section = document.querySelector("section")
	
// 	section.addEventListener("click", closeLink());

// 	navIcons.addEventListener("click", closeLink())

// 	function closeLink(){
// 	console.log("click");
// 	x.classList.toggle("responsive")

			
// 	};



// const contaener = document.querySelector("#contaener");
// const btn = document.querySelector("#btn");
// const close = document.querySelector("#close");
// const divice = document.querySelector("#divece")


// btn.addEventListener("click", btnClick);


// function btnClick(){
// 	console.log("click");
// 	contaener.classList.toggle("hover")
// 	divice.classList.toggle("divice_hover")

// }


// close.addEventListener("click",function closeClik(){
// 	console.log("click");
// 	contaener.classList.toggle("hover")
// 	divice.classList.toggle("divice_hover")

// })
	

