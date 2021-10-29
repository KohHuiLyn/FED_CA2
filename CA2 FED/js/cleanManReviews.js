/*
FED CA2
Filename: cleanManReviews.js
Author: Koh Hui Lyn
Date: 8/8/2020
*/


//Function that Calculates Average User Rating (Stars)
function calcAvg() {
    var totalStars=0;
    for (var i=0; i<reviewStars.length; i++){
        totalStars+=reviewStars[i];
    }
    return totalStars/reviewStars.length;
}

//Main

//Generating stars
var stars="<div class='display-4'>";
var average = calcAvg();
stars+="<h1 class='display-4 mt-2'>"+average.toFixed(1)+" Stars </h1> <div class='text-center'>"

//If reviewStars isn't a whole number, will put a half star instead of a full star ie 2.3 stars -> will put 2 Stars and one Half instead of just 2 Stars.
if (average%1 !=0){
    for (var i=0; i<average-1; i++){
        stars+="<span class='fa fa-star checked'></span>"
    }
    stars+="<span class='fa fa-star-half checked pr-2'></span>"
}
else{
    for (var i=0; i<average; i++){
        stars+="<span class='fa fa-star checked'></span>"
    }
}

//Generating Reviews
var reviewHTML = "<h1 class='display-4 border-top mt-2'>User Reviews</h1>"

for (var i=0; i<reviewStars.length; i++){
    reviewHTML += "<h3>"+reviewerName[i]+"</h3>"

    //Adding How many stars the person gives
    if (reviewStars[i]%1 !=0){
        for (var a=0; a<reviewStars[i]-1; a++){
            reviewHTML+="<span class='fa fa-star checked'></span>"
        }
        reviewHTML+="<span class='fa fa-star-half checked pr-2'></span>"
    }
    else{
        for (var a=0; a<reviewStars[i]; a++){
            reviewHTML+="<span class='fa fa-star checked'></span>"
        }
    }
    for (var a=0; a<5-Math.round(reviewStars[i]); a++){
        reviewHTML+="<span class='fa fa-star'></span>"
    }
    
    reviewHTML += "<p class='text-left'>"+review[i]+"<br/> "+time[i]+"</p>"
}

document.getElementById('reviews').innerHTML= "<h1 class='display-4'>Average User Rating</h1>"+stars+"</div></div>"+reviewHTML;