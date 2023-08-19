
function moveRight(){
    let box=document.getElementById('box');
    let pos=0;
    let anim=setInterval(animateR,5);
    function animateR(){
        if(pos==370){
            clearInterval(anim);
        }
        else{
            pos++;
        box.style.left=pos+'px';
        box.style.right=pos+'px';
        }
    }
}
    function moveLeft(){
        let box=document.getElementById('box');
        let pos=370;
        let anim=setInterval(animateL,5);
        function animateL(){
            if(pos==0){
                clearInterval(anim);
            }
            else{
                pos--;
            box.style.left=pos+'px';
            box.style.right=pos+'px';
            }
        }
    }


