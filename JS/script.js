const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout (()=>{
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft ;
    const pipePositionpx = pipePosition + 'px';
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionpx = marioPosition + 'px' ;
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.Left =   pipePositionpx;

        mario.style.animation = 'none';
        mario.style.bottom = marioPositionpx ;

        mario.src = './Imagens/bb14fbca-54a8-4462-a551-f91bf7eef091-image.png';
        mario.style.width = '110px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }

} ,10)

document.addEventListener('keydown', jump);
