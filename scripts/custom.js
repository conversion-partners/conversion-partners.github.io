(function($){
    "use strict"; // Start of use strict

    $(document).ready(function(){
    	var mapAgency = {};
		// add a item
		mapAgency["495"] = "1 active task";
		mapAgency["795"] = "3 active tasks";
		mapAgency["1595"] = "7 active tasks";

        $("#agency-select").children().on("click", function() {
            console.log($(this).html());
            $("#new-agency-select").val(mapAgency[this.className]);
            $("#agencypricevalue").html(this.className);
            $("#dropdown-agency-select .dropbtn").html($(this).html());
        });

    	var mapUser = {};
		// add a item
		mapUser["595"] = "1 active task";
		mapUser["895"] = "3 active tasks";
		mapUser["1695"] = "7 active tasks";

    	$("#user-select").on("change", function() {
    		console.log(this.value); // 495, 795
    		$("#new-user-select").val(mapUser[this.value]);
    		$("#userpricevalue").html(this.value);
    	});



        $("#user-select").children().on("click", function() {
            console.log($(this).html());
            $("#new-user-select").val(mapUser[this.className]);
            $("#userpricevalue").html(this.className);
            $("#dropdown-user-select .dropbtn").html($(this).html());
        });



    });
})(jQuery); // End of use strict;