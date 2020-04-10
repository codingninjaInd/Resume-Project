var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// for preventing the the default behaviour of anchor tags


for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event)
    {
        event.preventDefault();

       var targetSectionId  = this.textContent.trim().toLowerCase();

    //    console.log(targetSectionId);   //for checking it is working or not

    var targetSection = document.getElementById(targetSectionId);  //Now '' is used because it will it is already is a string

    // console.log(targetSection);  //for checking it is working or not

 

  var interval = setInterval(function()
  {

    var targetSectionCoordinates =   targetSection.getBoundingClientRect();

 //it will givev the object so we will fetch top value from this object

    if(targetSectionCoordinates.top<=0) //when we reach out destination
    {
        clearInterval(interval);

        return;

    }

    window.scrollBy(0,50);

  },50);

   

       });
}






// Second Approch to write same function

// now if we want to reuse scroll function the we will make this function sepratly

// var interval;



// for(var i=0;i<navMenuAnchorTags.length;i++)
// {
//     navMenuAnchorTags[i].addEventListener('click',function(event)
//     {
//         event.preventDefault();

//        var targetSectionId  = this.textContent.trim().toLowerCase();

  

//     var targetSection = document.getElementById(targetSectionId);  
 

//  interval= setInterval(scrollVertically,50,targetSection);

//second approch to pass argument

// interval = setInterval(function(){

//   scrollVertically(targetSection);


// },50);

   

//        });
//       }








// function scrollVertically(targetSection)
// {

//   var targetSectionCoordinates =   targetSection.getBoundingClientRect();

  
 
//      if(targetSectionCoordinates.top<=0) 
//      {
//          clearInterval(interval);  //it will not detect the interval because it is localvariable
 
//          return;
 
//      }
 
//      window.scrollBy(0,50);
 
  
 


// }




















