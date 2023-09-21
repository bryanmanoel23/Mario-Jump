const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const loucura = document.querySelector('.loucura');
const seinao = document.querySelector('.seinao');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout (()=>{
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft ;
    const loucuraPosition = loucura.offsetLeft;
    const seinaoPosition = seinao.offsetLeft;
    const seinaoPositionpx = seinaoPosition + 'px' ;
    const loucuraPositionpx = loucuraPosition + 'px';
    const pipePositionpx = pipePosition + 'px';
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionpx = marioPosition + 'px' ;

    
    //validação pipe
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        seinao.style.animation = 'none';
        seinao.style.left = seinaoPositionpx;
        
        pipe.style.animation = 'none';
        pipe.style.left = pipePositionpx;

        loucura.style.animation = 'none';
        loucura.style.left = loucuraPositionpx;

        mario.style.animation = 'none';
        mario.style.bottom = marioPositionpx ;

        mario.src = './Imagens/bb14fbca-54a8-4462-a551-f91bf7eef091-image.png';
        mario.style.width = '110px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }

    //validação sei não 

    if(seinaoPosition <= 120 && seinaoPosition > 0 && marioPosition < 80) {

        seinao.style.animation = 'none';
        seinao.style.left = seinaoPositionpx;
        
        pipe.style.animation = 'none'
        pipe.style.left = pipePositionpx;

        loucura.style.animation = 'none';
        loucura.style.left = loucuraPositionpx;  

        mario.style.animation = 'none';
        mario.style.bottom = marioPositionpx

        mario.src = './Imagens/bb14fbca-54a8-4462-a551-f91bf7eef091-image.png'
        mario.style.width = '110px'
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }


    //validação loucura
    if(loucuraPosition <= 130 && loucuraPosition > 0 && marioPosition < 90) {
        seinao.style.animation =  'none'
        seinao.style.left = seinaoPositionpx
        
        pipe.style.animation = 'none';
        pipe.style.left = pipePositionpx;

        loucura.style.animation = 'none' ; 
        loucura.style.left = loucuraPositionpx  ;

        mario.style.animation = 'none';
        mario.style.bottom = marioPositionpx ;

        mario.src = './Imagens/bb14fbca-54a8-4462-a551-f91bf7eef091-image.png';
        mario.style.width = '110px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }

} ,10)
//adiciona a tecla para pular 
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

window.addEventListener("orientationchange", function() {
    if (window.orientation === 90 || window.orientation === -90) {
      alert("O dispositivo está em modo paisagem.");
      // Execute ações específicas para a orientação paisagem
    } else {
      alert("O dispositivo está em modo retrato.");
      // Execute ações específicas para a orientação retrato
    }
  });
  
