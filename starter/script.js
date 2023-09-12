'use strict';
 
let secretnumber=Math.trunc(Math.random()*20+1)
 console.log(secretnumber)


let score=20;
let highscore=0;
 
document.querySelector('.check').addEventListener('click',function () {
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess)
     
    if (!guess) {
    document.querySelector('.message').textContent='No Number enterd';
        
    }
    else if(guess===secretnumber){
    document.querySelector('.message').textContent='Correct number';
    document.querySelector('.number').textContent=secretnumber
    document.querySelector('body').style.backgroundColor='#60b347'

    //implementing high score
    if (score>highscore) {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore
        
    }


    }

    else if(guess > secretnumber){
    document.querySelector('.message').textContent='too high';
    score--
    console.log(score)
     if(score >= 1){
       
    document.querySelector('.score').textContent=score
     }
    else{
        document.querySelector('.message').textContent='you lost';
         document.querySelector('.score').textContent=0
    }
    

     
}

    else if(guess < secretnumber){
    document.querySelector('.message').textContent='too Low';
    score--
   if(score >= 1){
   
    document.querySelector('.score').textContent=score
   }
    else {
        document.querySelector('.message').textContent='you lost';
         document.querySelector('.score').textContent=0
    }

    }

  
})
//impletmenting logic play again



 document.querySelector('.again').addEventListener('click',function () {
    // console.log('yes')
    
    score=20;
     secretnumber=Math.trunc(Math.random()*20+1);
     console.log(secretnumber)
    document.querySelector('.score').textContent= score
    document.querySelector('body').style.backgroundColor=' #222'
    document.querySelector('.message').textContent='Start guessing...'
   document.querySelector('.guess').value=' ';
   document.querySelector('.number').textContent='?'
//    document.querySelector('.highscore').textContent='0'
    
 })


