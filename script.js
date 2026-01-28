window.addEventListener('scroll',()=>{
  const trigger = window.innerHeight*0.35
  if(window.scrollY > trigger){
    document.querySelector('.hero-1').style.opacity = 0
    document.querySelector('.hero-2').style.opacity = 1
  } else {
    document.querySelector('.hero-1').style.opacity = 1
    document.querySelector('.hero-2').style.opacity = 0
  }
})
