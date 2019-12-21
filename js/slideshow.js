

function Img_1()
{
    
    window.location.href = ("https://abdo-ali-2.githup.io/html/Tut.html#ht");
    
} 
function Img_2()
{
    window.location.href = "https://abdo-ali-2.githup.io/html/Tut.html#cs";
}

function Img_3()
{
    window.location.href = "https://abdo-ali-2.githup.io/html/Tut.html#js";
}
//slide show operation

    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
}


 //form operation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var Name = document.getElementById("Name");
var email = document.getElementById("Email");
var Phone_Namber = document.querySelector('#Phone_Namber');

Name.addEventListener('focus' , onfun);
Name.addEventListener('blur' , onBlur);    
email.addEventListener('focus' , onfun);
email.addEventListener('blur' , onBlur);
Phone_Namber.addEventListener('focus' , onfun);
Phone_Namber.addEventListener('blur' , onBlur);

  function onfun(){
      
    if(this.value == this.id )this.value="";
}
function onBlur(){
    if(this.value.length===0){
        this.value=this.id;
    }
    console.log(this.value);
}
//click enter when i insert my data
Name.addEventListener('keyup',function(event)
{
    if (event.keyCode ===13){window.alert("hey enter");}

});

//operation on click sumbit>>>>>>>>>>>>>>>

 function focsubm ()
 {

      if(Name.value!="Name" > 4 && email.value!="Email" && Phone_Namber.value!="Website") 
        window.alert("message sent succesfully thakyou for contacting with us");
    
 }



