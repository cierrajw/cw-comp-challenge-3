// Event Handlers

window.onload = barGraph;
$('.search-hamburger').on('click', hamburgerMenuClick);

var gridTitleSection = $('.grid-title-section');

$('.grid-title-section').on('click', summaryMenu);

function summaryMenu(){

      $(this).next('.mobile-menu').toggle();

      console.log('u clicked on me!!!');
      // gridTitleSection.addClass('.mobile-menu');
}

// $(function() {
  
// // Dropdown toggle
// $('.dropdown-toggle').click(function(){
//   $(this).next('.dropdown').toggle();
// });

// $(document).click(function(e) {
//   var target = e.target;
//   if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
//     $('.dropdown').hide();
//   }
//       });

// });
//Media Queries

// $(window).resize(resizeMenu);

$(window).resize(resizeMenu)
         .trigger('resize');


$(window).on('resize', resizeMenu);


function resizeMenu(){

      var mobilemenu = $('.mobile-menu');
      // var textArea = `<p>Summary <i class="fas fa-chevron-circle-down"> </p>`;
      var jobDescript = $('.job-description');
      var graphSection = $('.graph-section');
      var toggleNav = $('.toggle-nav');
      var graphHeader = $('.summary-menu');
   
         if($(window).width() <= 414){

                  // $(jobDescript).add(textArea);

                  graphSection.hide();

                  console.log("added class on resize!");
            }else if($(window).width() >= 414){

                  toggleNav.children().hide();

                   graphSection.show();


                  console.log("screen is big again");

                  // mobilemenu.hide();
            }   

}


function hamburgerMenuClick(){
  $('.side-menu').detach();
  // $('.aside-container').replaceWith('main-nested');
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
