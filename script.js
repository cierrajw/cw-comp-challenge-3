// Event Handlers

window.onload = barGraph;
$('.search-hamburger').on('click', hamburgerMenuClick);

var gridTitleSection = $('.grid-title-section');

function hamburgerMenuClick(){
  $('.side-menu').toggle();
  var mainContent = $('.main-nested');
  $('.aside-container').append(mainContent);
}


// Graphs/Charts

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

//Media Queries

// $(window).resize(resizeMenu);

// $(window).resize(resizeMenu)
//          .trigger('resize');


// $(window).on('resize', resizeMenu);


// function resizeMenu(){

//       var mobilemenu = $('.mobile-menu');
//       var jobDescript = $('.job-description');
//       var graphSection = $('.graph-section');
//       var toggleNav = $('.toggle-nav');
//       var graphHeader = $('.summary-menu');
   
//          if($(window).width() <= 414){

//                   graphSection.hide();

//                   console.log("added class on resize!");
//             }else if($(window).width() >= 414){

//                   toggleNav.children().hide();

//                    graphSection.show();


//                   console.log("screen is big again");

//             }   

//               if($(window).width() <= 1441){
//                   $('.graph-secton').detach();
//               }



// }
