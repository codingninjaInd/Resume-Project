//Handel Scroll Event in window
//check skill section container is visibale or Not
//ensure the initial width of colored div is zero  -> initilized /reset to the zero width value
//start animation on very skill ->increase skill width from zero to skill level;
//strore skill level ->HTML with thw help of atribute;

var progressBars = document.querySelectorAll('.skill-progress > div');


var skillsContainer = document.getElementById('skills-container');




window.addEventListener('scroll',check);



var animationDone = false;


function initialBars()
{
    for(let bar of progressBars)
    {
        bar.style.width = 0 + '%';
    }
}

initialBars();


function fillBars()
{


    for(let bar of progressBars){

       let  targetedWidth = bar.getAttribute('data-bar-width');

       let currentWidth = 0;


       let interval = setInterval(function(){


        if(currentWidth>targetedWidth)
        {
            clearInterval(interval);

            return;
        }

        currentWidth++;


        bar.style.width = currentWidth + '%';


       } ,5);

      

        
    }

}




function check()
{

    //now you have to check whether skill container is visible or not

    var coordinates = skillsContainer.getBoundingClientRect();

    if(!animationDone && coordinates.top<window.innerHeight)
    {
        animationDone = true;

       fillBars();
    }
    else if( coordinates.top>window.innerHeight)//dealing nd down filling
    {

        animationDone = false;

        initialBars();





    }

   
}


