const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const test = document.querySelector('.test');

function atualizapagina() {
  location.reload()
}

const jump = () =>{
    mario.classList.add('jump');

    setTimeout (()=>{
        mario.classList.remove('jump');
    },550);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft ;
    const pipePositionpx = pipePosition + 'px';
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionpx = marioPosition + 'px' ;

    
    //validação pipe
    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 70) {

        
        pipe.style.animation = 'none';
        pipe.style.left = pipePositionpx;

        mario.style.animation = 'none';
        mario.style.bottom = marioPositionpx ;

        mario.src = './Imagens/bb14fbca-54a8-4462-a551-f91bf7eef091-image.png';
        mario.style.width = '110px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)

        if(test.classList.contains('test')) {
          test.classList.remove('test')
          test.classList.add('atualiza')
        }
        

        
    }

  

} ,10)
//adiciona a tecla para pular 
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


