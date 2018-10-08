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
                  $('.contact3-form').hide();
                  var hi = $("input[name='choice']:checked").val();
                  if(hi == "say-hi"){
                    $('#form-msg').html("Wij zullen u op de hoogte houden.");
                  }else{
                    $('#form-msg').html("U krijgt de account gegevens toegestuurd.");
                  }
          })
          .fail(function(data) {
                  $('.contact3-form').hide();
                  $('#form-msg').html("Oeps er ging iets mis probeert U het nog eens.");
                  setTimeout(function(){ location.reload(); }, 3000);
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
