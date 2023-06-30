// Designed by: Hoang Nguyen
// Original image: https://dribbble.com/shots/5919154-Tab-Bar-Label-Micro-Interaction

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach((item) => {
  const text = item.querySelector(".menu__text");
  setLineWidth(text, item);

  window.addEventListener("resize", () => {
    setLineWidth(text, item);
  });

  item.addEventListener("click", function () {
    if (this.classList.contains("active")) return;

    this.classList.add("active");

    if (activeButton) {
      activeButton.classList.remove("active");
      activeButton.querySelector(".menu__text").classList.remove("active");
    }

    handleTransition(this, text);
    activeButton = this;
  });
});

function setLineWidth(text, item) {
  const lineWidth = text.offsetWidth + "px";
  item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {
  item.addEventListener("transitionend", (e) => {
    if (e.propertyName != "flex-grow" || !item.classList.contains("active"))
      return;

    text.classList.add("active");
  });
}


// Galery
var inputs = document.querySelectorAll('input');
var intervalId;

inputs.forEach(function(input) {
  input.addEventListener('change', function() {
    document.body.classList.toggle('blue');
  });
});

function slideAutomatically() {
  var currentIndex = 0;
  var slideInterval = 3000	; // Durasi setiap slide (dalam milidetik)

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= inputs.length) {
      currentIndex = 0;
    }
    inputs[currentIndex].checked = true;
  }

  intervalId = setInterval(nextSlide, slideInterval);
}

slideAutomatically();




// Script unjuk menjalankan music
const music = document.getElementById("myMusik");
const tombol = document.getElementsByClassName("btn_musik")[0];
const latar = document.getElementsByClassName("latar")[0];
console.log(latar);

tombol.addEventListener("click", function(){
  if(music.paused){
    music.play();
    tombol.style.animationPlayState = "running";
    latar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
  </svg>`
  }else{
    music.pause();
    music.currentTime = 0;
    tombol.style.animationPlayState = "paused";
    latar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  </svg>`
  }
});

// script untuk cover
const Surat = document.getElementsByClassName("surat")[0];
const Cover = document.getElementsByClassName("cover")[0];
const Container = document.getElementsByTagName('body')[0];


Cover.addEventListener("click", function(){
  Cover.style.display = "none";
  Container.style.overflowY = "auto";
});

// script untuk scroll page

$('.page-scrol').on('click',function(e){

  var tujuan = $(this).attr('href');

  var halaman = $(tujuan);

  console.log(halaman);

  $('html').animate({

    scrollTop: halaman.offset().top - 50
  },500);

  // $('html').scrollTop(halaman.offset().top);

  e.preventDefault();

});

// Paralax pada informasi
$(window).scroll(function(){
  const wScrol = $(this).scrollTop();

  if(wScrol > $('.info').offset().top - 350){
    $('.img').addClass('muncul');
  }
})




