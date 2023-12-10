const plate= document.querySelector('.plate');
const shadow= document.querySelector('.shadow');
plate.addEventListener('mousemove', dview);
plate.addEventListener('mouseenter', entermouse);
plate.addEventListener('mouseout', exitmouse);
function dview(e){
    shadow.style.opacity='1';
    let mouseX = e.pageX - plate.offsetLeft;
    let mouseY = e.pageY - plate.offsetTop;
    shadow.style.left= `${mouseX - 500}px`;
    shadow.style.top= `${mouseY - 500}px`;
    let width = plate.clientWidth;
    let height = plate.clientHeight;
    plate.style.transform = `rotateY(${((mouseX - width/2)*24)/width}deg) rotateX(${((mouseY - height/2)*24)/height}deg)`;
};
function entermouse(){
    shadow.style.opacity='1';
}
function exitmouse(){
    shadow.style.opacity='0';
    plate.style.transform = `rotateY(0deg) rotateX(0deg)`;
}

