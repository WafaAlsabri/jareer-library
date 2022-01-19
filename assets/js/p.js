

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

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