(function($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function() {
        $(this).on('blur', function() {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Chose Radio ]*/
    $("#radio1").on('change', function() {
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio2").on('change', function() {
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });



    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit', function(e) {
        e.preventDefault();
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val().trim() == '') {
          //  showValidate(message);
          //  check = false;
          $('.validate-input textarea[name="message"]').val("no msg");
        }

        console.log($(this).serialize());

        if(check){
          var url = 'https://script.google.com/macros/s/AKfycbxk_Np2R_F1LlinTA33bAQPyg5XZn-rrs4M5xWC3lGRvts2kSX_/exec';
          var redirectUrl = 'form/success-page.html';
          var jqxhr = $.post(url, $(this).serialize(), function(data) {
                  console.log("Success! Data: ");
                  console.log(data);
                  //$(location).attr('href', redirectUrl);
          })
          .fail(function(data) {
                  console.log(data);
                  //console.warn("Error! Data: " + data.statusText);
                  // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                  if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                      //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                      //$(location).attr('href', redirectUrl);
                  }
          });
        }

        return check;
    });


    $('.validate-form .input3').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
