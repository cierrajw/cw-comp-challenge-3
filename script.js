window.onload = barGraph;
// window.onload = doughnutGraph1;
// window.onload = doughnutGraph2;
// window.onload = doughnutGraph3;

$('.search-hamburger').on('click', hamburgerMenuClick);

function hamburgerMenuClick(){
  $('.side-menu').detach();
  // $('.aside-container').replaceWith('main-nested');
  var mainContent = $('.main-nested');
  $('.aside-container').append(mainContent);
}


function barGraph(){

      var bargraph = document.querySelector("#bargraph");

      var ctx = bargraph.getContext('2d');

      ctx.fillStyle = "#dae5eb";

      ctx.fillRect(10, 6, 8, 300);
      ctx.fillRect(35, 6, 8, 300);
      ctx.fillRect(60, 6, 8, 300);
      ctx.fillRect(85, 6, 8, 300);
      ctx.fillRect(110, 6, 8, 300);
      ctx.fillRect(135, 6, 8, 300);
      ctx.fillRect(160, 6, 8, 300);
      ctx.fillRect(185, 6, 8, 300);
      ctx.fillRect(210, 6, 8, 300);
      ctx.fillRect(235, 6, 8, 300);
      ctx.fillRect(260, 6, 8, 300);
      ctx.fillRect(285, 6, 8, 300);
      // ctx.fillRect(190, 6, 8, 300);
      // ctx.fillRect(1005, 6, 8, 300);

      console.log("This is bar graph!!");

      var ctx2 = bargraph.getContext('2d');

      ctx.fillStyle = "#4bbac3";

      ctx2.fillRect(10, 140, 8, 300);
      ctx2.fillRect(35, 120, 8, 300);
      ctx2.fillRect(60, 100, 8, 300);
      ctx2.fillRect(85, 30, 8, 300);
      ctx2.fillRect(110, 150, 8, 300);
      ctx2.fillRect(135, 170, 8, 300);
      ctx2.fillRect(160, 40, 8, 300);
      ctx2.fillRect(185, 120, 8, 300);
      ctx2.fillRect(210, 17, 8, 300);
      ctx2.fillRect(235, 40, 8, 300);
      ctx2.fillRect(260, 80, 8, 300);
      ctx2.fillRect(285, 120, 8, 300);

}
