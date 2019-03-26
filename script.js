$("button").click(function(){





var age=parseInt($(".age").val());

var place=$(".place").val();

var arendal="<img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Olaf_from_Disney%27s_Frozen.png/160px-Olaf_from_Disney%27s_Frozen.png'> Olaf: You have an optimistic look on life and find the good in everyone.";

var ocean="<img src='https://vignette.wikia.nocookie.net/pixar/images/1/1f/Dory-white.jpg/revision/latest?cb=20110924203518'>Dory: Even though you have issues of your own you always find a way to help the ones you love.";

var china="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6OwTET1tqFwF1s9qQuoRreqNyu5b-GClCy72r3bvBrGOqgvS'> Mushu: You're a little selfish but at the end of the day you find a way to do what is good for others. " ;

var africa="<img src='https://images-na.ssl-images-amazon.com/images/I/41YxB88%2Bk6L.jpg'>Rafiki: You like helping others even if it isn't in the monst conventional way.";
 
 if(place==="arendal"&&age <= 20){
     $("div").append(arendal);
 }
 
  
 else if(place==="ocean"&&age <= 20){
     $("div").append(ocean);
 }
 
 else if(place==="china"&&age >= 20){
     $("div").append(china);
 }
 
 else if(place==="africa"&&age >= 20){
     $("div").append(africa);
 }
});