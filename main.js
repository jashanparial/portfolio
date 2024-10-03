const fb=document.querySelector('.hidefb')
const fbicon=document.querySelector('#fbicon')

fbicon.addEventListener('mouseover',()=>{
  fb.style.display='inline'
})
fbicon.addEventListener('mouseout',()=>{
  fb.style.display='none'
})