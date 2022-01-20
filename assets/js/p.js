
var data=0;
document.getElementById("root").innerText=data;

function increment(){data=data+1;
document.getElementById("root").innerText=data;}





function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('cv');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}
/*document.querySelector(".plus-btn").setAttribute("disabled","disabled");
var valuCounter


document.querySelector(".plus-btn").setAttribute("click",function(){
  var valuCounter=document.getElementById("root").value;
  valuCounter++;
  document.getElementById("root").value=valuCounter;

  if(valuCounter>1){
    document.querySelector(".plus-btn").setAttribute("disabled","disabled")
  
  }

     //setting default attribute to disabled of minus button
     document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

     //taking value to increment decrement input value
     var valueCount

     //taking price value in variable
     var price = document.getElementById("price").innerText;

     //price calculation function
     function priceTotal() {
         var total = valueCount * price;
         document.getElementById("price").innerText = total
     }

     //plus button
     document.querySelector(".plus-btn").addEventListener("click", function() {
         //getting value of input
         valueCount = document.getElementById("quantity").value;

         //input value increment by 1
         valueCount++;

         //setting increment input value
         document.getElementById("quantity").value = valueCount;

         if (valueCount > 1) {
             document.querySelector(".minus-btn").removeAttribute("disabled");
             document.querySelector(".minus-btn").classList.remove("disabled")
         }

         //calling price function
         priceTotal()
     })

     //plus button
     document.querySelector(".minus-btn").addEventListener("click", function() {
         //getting value of input
         valueCount = document.getElementById("quantity").value;

         //input value increment by 1
         valueCount--;

         //setting increment input value
         document.getElementById("quantity").value = valueCount

         if (valueCount == 1) {
             document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
         }

         //calling price function
         priceTotal()
     })



function openForm() {
    document.getElementById("myForm").style.display = "block";
   
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
   

 

  function openForm2() {
    document.getElementById("myForm1").style.display = "block";
  }
  
  function closeForm2() {
    document.getElementById("myForm1").style.display = "none";
  }
  

/*timer */
 /* const start=10;
  let time=start * 60;
  const timer=document.getElementById('counter');
setInterval(updateCounter,1000)

  function updateCounter(){

    const minutes=Math.floor(time / 60);
    let seconds=time % 60;
    seconds=seconds< 10 ? '0' + seconds:seconds;
    timer.innerHTML='${minutes}:${seconds}';
    time --;
  }*/
  setInterval(displayClock,500);
  function displayClock(){
      var time=new Date();
      var hrs=time.getHours();
      var min=time.getMinutes();
      var sec=time.getSeconds();
      var en='AM';
      if(hrs>12){hrs=hrs-12;}
      if(hrs==0){hrs=12;}
      if(hrs<10){hrs='0' +hrs;}
      document.getElementById('clock').innerHTML=hrs + ':' + min + ':' + sec ;
  }
  /**hidden slider */


  function openForm1() {
    document.getElementById("hidsid").style.display = "block";
  }
  
  function closeForm1() {
    document.getElementById("hidsid").style.display = "none";
  }


  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex = n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}