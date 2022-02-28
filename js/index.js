$(window).on('load', function() {
    $('#myModal').modal('show');
});

//draggable
$("#myModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#xboxModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#xbox360Modal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#xboxOneModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#xboxOneSModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#xboxOneXModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#xboxXSModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});
$("#communityModal").draggable({
    handle: ".modal-header",
    handle: ".modal-body"
});




// jQuery responsive navbar
(function( $ ){
	$.fn.grtmobile = function () {
		if ($(window).width() < 768) {
			$('.grt-mobile-button').on('click', function(){
				$(this).toggleClass("grt-mobile-button-open");
				$("ul.grt-menu").toggleClass("open-grt-menu ");
				$("html, body").toggleClass("body-overflow");
			});
			$('li.grt-dropdown').on('click', function(e){
				$(this).toggleClass("active-dropdown");
			});
		}
	}
})( jQuery );

// Initialize and check for mobile
$.fn.grtmobile();

// On resize window check for mobile
var resizeTimer;

$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
     $.fn.grtmobile();
  }, 250);
})



// Add shadow on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

// Prevent a href clicks on dropdown category
$('li.grt-dropdown > a').on('click', function(e){
	e.preventDefault();
});





//modal pop up
// $(document).ready(function(){
// 	$("#myModal").modal('show');
// });



// //center modal
$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        
        // Applying the top margin on modal to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});


// hover fade color effect
$(document).ready(function() {
   $('.photos div').hover(
       function(){
           $(this)
           .find('img.nocolor')
           .stop()
           .animate({'opacity': '0' }, 800);
       },

       function(){
           $(this)
           .find('img.nocolor')
           .stop()
           .animate({'opacity': '1' }, 800);
       });
});


// panel effect

$(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel1").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip4").click(function(){
      $("#panel4").slideToggle("slow");
    });
  });


  $(document).ready(function(){
    $("#flip5").click(function(){
      $("#panel5").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#flip6").click(function(){
      $("#panel6").slideToggle("slow");
    });
  });


//   jquery validator
jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
$.validator.addMethod( "alphanumeric", function( value, element ) {
return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );
var $registrationForm = $('#registration');
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
          //username is the name of the textbox
          username: {
              required: true,
              //alphanumeric is the custom method, we defined in the above
              alphanumeric: true
          },
          email: {
              required: true,
              customEmail: true
          },
          password: {
              required: true
          },
          confirm: {
              required: true,
              equalTo: '#password'
          },
          fname: {
              required: true,
              noSpace: true
          },
          SelectedDate: {
            required: true,
        
        },
          gender: {
              required: true
          },
          hobbies: {
              required: true
          },
          countryCodes: {
              required: true
          },
          address: {
              required: true
          }
      },
      messages:{
          username: {
              //error message for the required field
              required: 'Please enter username!'
          },
          email: {
              required: 'Please enter email!',
              //error message for the email field
              email: 'Please enter valid email!'
          },
          password: {
              required: 'Please enter password!'
          },
          confirm: {
              required: 'Please enter confirm password!',
              equalTo: 'Please enter same password!'
          },
          fname: {
              required: 'Please enter first name!'
          },
          SelectedDate: {
              required: 'Please enter birthdate! &nbsp; &nbsp;'
          },
          countryCodes: {
              required: 'Please enter country!'
          },
          address: {
              required: 'Please enter address!'
          },
          hobbies:{
            required: 'Please choose at least one perk!'

          }
      },
      errorPlacement: function(error, element) 
      {
        if (element.is(":radio")) 
        {
            error.appendTo(element.parents('.gender'));
        }
        else if(element.is(":checkbox")){
            error.appendTo(element.parents('.hobbies'));
        }
        else 
        { 
            error.insertAfter( element );
        }
        
       }
  });
}



// datepicker
$(function () {
    $("#txtDate").datepicker({
        changeMonth: true,
        changeYear: true,
        showOn: 'button',
        buttonImageOnly: true,
        buttonImage: 'images/calendar.gif',
        dateFormat: 'dd/mm/yy',
        yearRange: '1900:+0',
        onSelect: function (dateString, txtDate) {
            ValidateDOB(dateString);
        }
    });
});
function ValidateDOB(dateString) {
    var lblError = $("#lblError");
    var parts = dateString.split("/");
    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    var dtCurrent = new Date();
    lblError.html("You are below 18, get parent's consent before submission.")
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        return false;
    }

    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            return false;
        }
        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
            if (dtCurrent.getDate() < dtDOB.getDate()) {
                return false;
            }
        }
    }
    lblError.html("");
    return true;
}


// jQuery easing (hidden message)
function resetTest() {
    effectType = $('#effectType').val();
    if (effectType == 'fadeIn()'){
        $('#tester').fadeOut(0)
    } 
    else if (effectType == 'fadeOut()') {
        $('#tester').fadeIn(0)
    }
    else if (effectType == 'slideDown()') {
        $('#tester').slideUp(0)
    }
    else if ( effectType == 'slideUp()' ) {
        $('#tester').slideDown(0)
    } 
    else if (effectType == 'slideToggle()') {
        $('#tester').slideUp(0)
    }
    else if (effectType == 'fadeToggle()') {
        $('#tester').fadeOut(0)
    }
}

$('#effectType, #easeType').change(function() {
    $(this).blur()
    resetTest()
})

function runTest() {
    easeType = $('#easeType').val();
    effectType = $('#effectType').val();
    testDuration = parseInt( $('#testDuration').val() );

    $('#testDuration, #test, #reset').blur();

    if (effectType == 'fadeIn()'){
        $('#tester').fadeIn(testDuration,easeType)
    } 
    else if (effectType == 'fadeOut()') {
        $('#tester').fadeOut(testDuration,easeType)
    }
    else if (effectType == 'slideDown()') {
        $('#tester').slideDown(testDuration,easeType)
    }
    else if ( effectType == 'slideUp()' ) {
        $('#tester').slideUp(testDuration,easeType)
    } 
    else if (effectType == 'slideToggle()') {
        $('#tester').slideToggle(testDuration,easeType)
    }
    else if (effectType == 'fadeToggle()') {
        $('#tester').fadeToggle(testDuration,easeType)
    }
}

$('#test').click(function() {
    if (effectType == 'fadeToggle()' || effectType == 'slideToggle()') {
        runTest()
    } else {
        resetTest()
        runTest()
    }
})
$('#reset').click(function() {
    resetTest()
})
$(document).keydown(function(event) {
    //alert(event.keyCode)
    if (event.keyCode == '39') {
        //alert('right')
        currentlySelected = $('#easeType option:selected')
        //alert(currentlySelected.val())
        firstEase = $('#easeType option:last').val()
        //find first ease option value
        if (currentlySelected.val()!=firstEase) {
            currentlySelected.attr('selected', '');
            currentlySelected.next('option').attr('selected', 'selected');
        }
    } else if (event.keyCode == '37') {
        //alert('left')
        currentlySelected = $('#easeType option:selected')
        lastEase = $('#easeType option:first').val()
        //find last ease option value
        if (currentlySelected.val()!=lastEase) {
            currentlySelected.attr('selected', '');
            currentlySelected.prev('option').attr('selected', 'selected');
        }
    } else if (event.keyCode == '13') {
        //alert('return')
        if (effectType == 'fadeToggle()' || effectType == 'slideToggle()') {
            runTest()
        } else {
            resetTest()
            runTest()
        }
    } else if (event.keyCode == '32') {
    //alert('space?')
    }
})

resetTest()















// jQuery smooth scrolling
$(document).ready(function() {
    $('.grt-menu li a').click(function(e) {
  
      var targetHref = $(this).attr('href');
  
      $('html, body').animate({
        scrollTop: $(targetHref).offset().top
      }, 1000);
  
      e.preventDefault();
    });
  });





// Navbar Class active
// $(document).ready(function () {
//     $('.nav li a').click(function(e) {

//         $('.nav li.active').removeClass('active');

//         var $parent = $(this).parent();
//         $parent.addClass('active');
//         e.preventDefault();
//     });
// });  https://stackoverflow.com/questions/17975922/how-to-change-active-class-while-click-to-another-link-in-bootstrap-use-jquery

// Color animation
setInterval(function() { 
    $('.lamplight')
      .animate({ backgroundColor: "#184D47" }, 3000)
      .animate({ backgroundColor: "#11823b" }, 3000)
      .animate({ backgroundColor: "#62760C" }, 3000)
      .animate({ backgroundColor: "#004d25" }, 3000);
},100);



// autocomplete
function split( val ) {
    return val.split( /,\s*/ );
  }
  function extractLast( term ) {
    return split( term ).pop();
  }

var countries = {
    "Argentina":"Argentina",
    "United States":"United States",
    "Comoros": "Comoros",
"Congo (Brazzaville)": "Congo (Brazzaville)",
"Congo, Democratic Republic of the Congo": "Congo, Democratic Republic of the Congo",
"Cook Islands":  "Cook Islands",
"Costa Rica":  "Costa Rica",
"Côte d'Ivoire": "Côte d'Ivoire",
"Croatia": "Croatia",
"Cuba":  "Cuba",
"Cyprus":  "Cyprus",
"Czech Republic":  "Czech Republic",
"Denmark": "Denmark",
"Djibouti":  "Djibouti",
"Dominica":  "Dominica",
"Dominican Republic":  "Dominican Republic",
"Philippines": "Philippines"


  };

$( "#countryCodes" )
    // don't navigate away from the field on tab when selecting an item
    .bind( "keydown", function( event ) {
      if ( event.keyCode === $.ui.keyCode.TAB &&
          $( this ).autocomplete( "instance" ).menu.active ) {
        event.preventDefault();
      }
    })
    .autocomplete({
      minLength: 0,
      source: function( request, response ) {
        // delegate back to autocomplete, but extract the last term
        response( $.ui.autocomplete.filter(
          Object.keys(countries), extractLast( request.term ) ) );
      },
      focus: function() {
        // prevent value inserted on focus
        return false;
      },
      select: function( event, ui ) {
        var terms = split( this.value );
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push( countries[ui.item.value] );
        // add placeholder to get the comma-and-space at the end
        terms.push( "" );
        this.value = terms.join( "" );
        return false;
      }
    });





// /////////////////////////////////////////////////////////////////





    // Table filter
    $(function() {
        liveFilter.build($("#liveFilter"), [1, 2]);
      });
      
      var liveFilter = function() {
      
        var wrapper,
          inputField,
          grid,
          gridRows,
          clearButton,
          zeroResults,
          datasource = [],
          columnsToIndex,
      
          //Create an array and populate it with key codes that should not cause shake effects
          noShakeCharacters = [8, 45, 46], //backspace, insert, delete
      
          //Create an array and populate it with key codes that don't trigger an action	
          characterExclusions = [13, 20, 27, 33, 34, 37, 39, 35, 36, 16, 17, 18, 144, 145], // enter, caps, esc, page up, page down, left, right, home, end, shift, ctrl, alt, num lock, scroll lock
      
          //Create the filter markup and set up events and datasources
          build = function(liveFilter, columns) {
      
            if (typeof liveFilter !== "undefined" && liveFilter.length > 0) {
      
              liveFilter.wrap('<div class="liveFilter"></div>').parent().prepend('<div class="liveFilterContainer"><div class="group"><input type="text" class="liveFilterInput" value="" placeholder="Search game" /><a href="#" class="clearField" title="Clear Filter">x</a></div></div><div class="noResults"><strong>Sorry.</strong> There is no match for your filter; please try again.</div>');
      
              wrapper = liveFilter.parent(),
                inputField = wrapper.find("input.liveFilterInput"),
                grid = liveFilter,
                gridRows = grid.find("tr:gt(0)"), // gt(0) prevents the first row (normally a TH) from being included.
                clearButton = wrapper.find(".clearField"),
                zeroResults = grid.prev(),
                columnsToIndex = columns;
      
              indexGrid();
              bindEvents();
            }
          },
      
          //This function (when called) creates the datasource that will be used to filter the grid
          indexGrid = function() {
            if (typeof columnsToIndex !== "undefined" && columnsToIndex.length > 0) {
      
              for (col = 0; col <= columnsToIndex.length - 1; col++) {
                gridRows.children("td:nth-child(" + columnsToIndex[col] + ")").each(function(i) {
      
                  datasource[datasource.length++] = $(this).text();
                });
              }
      
            } else {
      
              gridRows.children("td:first-child").each(function(i) {
      
                datasource[i] = $(this).text();
              });
            }
          },
      
          //This function (when called) creates any relevant event listeners
          bindEvents = function() {
      
            inputField.on("keyup", function(key) {
              filterRows(key);
            });
            clearButton.on("click", function() {
              clearField();
              return false;
            });
          },
      
          //This function (when called) clears the field and resets the grid to it's default state
          clearField = function() {
      
            inputField.val('');
            clearButton.fadeOut(300);
            zeroResults.slideUp(300);
            gridRows.show();
            grid.show();
          },
      
          //This function (when called) filters the rows based on the data in the datasource array
          filterRows = function(key) {
      
            if ($.inArray(key.keyCode, characterExclusions) === -1) {
      
              var liveFilterValue = inputField.val();
      
              if (liveFilterValue !== "") {
      
                clearButton.fadeIn(300);
      
                rowsToShow = [];
      
                var currentRow = 0,
                  RE = new RegExp(liveFilterValue, "i");
      
                // Check the value entered against a regular expression matched with the column data. If a match exists add the row to a new array			
      
                for (var i = 0; i < datasource.length; i++) {
      
                  if (datasource[i].match(RE)) {
                    rowsToShow.push(currentRow);
                  }
      
                  if (currentRow < gridRows.length - 1) {
                    currentRow++;
                  } else {
                    currentRow = 0;
                  }
                }
      
                // If there are matches, show the grid, hide all the rows and show the selected ones
      
                if (rowsToShow.length > 0) {
      
                  grid.show();
                  gridRows.hide();
      
                  if (zeroResults.is(":visible")) {
                    zeroResults.slideUp(150);
                  }
      
                  for (var i = 0; i < rowsToShow.length; i++) {
                    $(gridRows.get(rowsToShow[i])).show();
                  }
      
                  // If there are NO matches we hide the grid and display an error panel. If an incorrect value is entered while the error panel is visible it shakes itself assuming if it doesn't match any of the excluded values defined in the noShakeCharacters
      
                } else {
      
                  grid.hide();
      
                  // if the zeroResults panel is shown and the effects queue length is 0 and there are no illegal character presses
      
                  if (zeroResults.is(":visible") && zeroResults.queue().length === 0 && $.inArray(key.keyCode, noShakeCharacters) == -1) {
      
                    if (jQuery.ui) {
                      zeroResults.effect('shake', {
                        times: 3,
                        distance: 5
                      }, 500);
                    }
      
                  } else {
                    zeroResults.slideDown(150);
                  }
                }
      
                // If the value entered is blank, hide the clear field button, show the grid and all of its rows and hide the no results panel if it is visible
      
              } else {
                clearField();
              }
            }
          };
      
        return {
          build: build
        };
      }();