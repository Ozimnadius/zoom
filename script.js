// var blur = $("#blur");
//
// $("html").on("mousemove", function(e) {
//   // $('.glass').css({
//   //   top: e.clientY - 75,
//   //   left: e.clientX - 75
//   // });
//
// });
//
// document.querySelector('body').addEventListener('touchmove', e => {
//   $('.glass').css({
//     top: e.changedTouches[0].clientY - 75,
//     left: e.changedTouches[0].clientX - 75
//   });
// });

const glasses = document.querySelector('.glasses');
let offsetX = 350;
let offsetY = 175;

if (window.outerWidth < 992){
  offsetX = 300;
  offsetY = 100;
}

if (window.outerWidth < 576){
  offsetX = 170;
  offsetY = 70;
}

window.addEventListener('load', function (e){

});


document.querySelector('.wrap').addEventListener('mousemove', function (e){
  glasses.style.top = e.clientY - offsetY+"px";
  glasses.style.left = e.clientX - offsetX+"px";
});

document.querySelector('body').addEventListener('touchmove', e => {
  glasses.style.top = e.changedTouches[0].clientY - offsetY+"px",
  glasses.style.left = e.changedTouches[0].clientX - offsetX+"px";
});

