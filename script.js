const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;

for( i=0; i<filterButtons.length; i++){
   filterButtons[i].addEventListener("click",function(){
       for( j=0; j<filterButtons.length; j++){
           filterButtons[j].classList.remove("active")
       }
       this.classList.add("active");
       const target=this.getAttribute("data-target")

       for(k=0; k<items.length;k++){
           items[k].style.display="none";
           if(target==items[k].getAttribute("data-id"))
           {
            items[k].style.display="block";
           }
           if(target=="all"){
            items[k].style.display="block";
           }
       }
   })
}

const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");

a.forEach(function(element){
  element.addEventListener("click",function(){
    for( i=0; i<a.length; i++){
    a[i].classList.remove("active");
    }
    this.classList.add("active")
    document.querySelector(".navbar").classList.toggle("show");
  })
})

const hamburger=document.querySelector(".ham-burger");
hamburger.addEventListener("click",function(){
  document.querySelector(".navbar").classList.toggle("show");
})

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 2000);
});

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          margin:30
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          margin: 25
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          margin:20
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

