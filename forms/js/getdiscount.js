$(document).ready(function() {
    $("body").append($("<div id='discount-form'></div>"));
    var formpath = $($('[data-formpath]')[0]).data('formpath');
    $("#discount-form").load(formpath, function() {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
            callbacks: {
                beforeOpen: function() {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });



        $("#test-form").submit(function(event) {
            event.preventDefault();
            var name = $('#name');
            var email = $('#email');
            var check = true;

            if ($(name).val().trim() == '') {
                showValidate(name);
                check = false;
            }


            if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                showValidate(email);
                check = false;
            }

            if (check) {
                var url = 'https://script.google.com/macros/s/AKfycbxk_Np2R_F1LlinTA33bAQPyg5XZn-rrs4M5xWC3lGRvts2kSX_/exec';
                var jqxhr = $.post(url, $(this).serialize(), function(data) {
                        setTimeout(function() {
                            location.reload();
                        }, 1000);
                    })
                    .fail(function(data) {
                        setTimeout(function() {
                            location.reload();
                        }, 1000);
                    });
            }

        });


    });

});
