
const showDialog = document.getElementById("show-dialog");
const loginDialog = document.querySelector(".logIn");
const overlay = document.querySelector(".overlay");
const hideDialog = document.getElementById("hide-dialog");
const hideSignUpDialog = document.getElementById("hide-signUpDialog");

const createNewAccout = document.getElementById("create-new-account");
const signUpDialog = document.querySelector(".signUp");
console.log(signUpDialog);

console.log(showDialog);
showDialog.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.toggle("hide");
  //   if(!showDialog.classList.contains("hide") || ! signUpDialog.classList.contains("hide"))
  loginDialog.classList.toggle("hide");
});
hideDialog.addEventListener("click", function () {
  overlay.classList.add("hide");
  loginDialog.classList.add("hide");
});



/**/






//   ============= signUp ==============
hideSignUpDialog.addEventListener("click", function () {
  signUpDialog.classList.add("hide");
  overlay.classList.add("hide");
});
createNewAccout.addEventListener("click", function () {
  overlay.classList.remove("hide");
  loginDialog.classList.add("hide");
  signUpDialog.classList.remove("hide");
});







  /**counter */
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

/**increment */
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

const showBtn=document.getElementsByClassName('show-btn');
    const modelContainer=document.getElementById('model-container');
    const modal_img=document.getElementById('modal_img');

for( let i=0;i<showBtn.length;i++){
    showBtn[i].addEventListener('click',function(){
    var img=showBtn[i].getAttribute('src');
    modal_img.setAttribute('src',img);
    modelContainer.style.visibility='visible';
});
}

 /**language */
 /*function toggle(){

  var styles=document.getElementsByTagName('link')[0];
  if(styles.getAttribute('href')=='assets/css/style.css'){
styles.setAttribute('href','assets/css/style - Copy.css')
  }
  else{
    styles.setAttribute('href','assets/css/style.css');
  }
 }*/
