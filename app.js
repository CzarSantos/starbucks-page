

const content = document.querySelectorAll('.content-rigth img')
const choseMenu = document.querySelectorAll('.chose img')

console.log(choseMenu)

content[0].classList.add('active')
 

function ativa(index){

  content.forEach((item)=>{
    item.classList.remove('active')
  })

 content[index].classList.add('active')
 

}


choseMenu.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    ativa(index)
    changeColor(index)
  })
})


function changeColor(index){
const sele = document.querySelector('.circle')


sele.style.background = '#037144'
sele.style.transition = '.3s linear'


if(index == 0){
  sele.style.background = '#037144';
}else if(index == 1){
  sele.style.background = '#F0BFCC';
}else{
  sele.style.background = '#7FDBED';
}
}