(function($){
    "use strict"; // Start of use strict

    $(document).ready(function(){
    	var mapAgency = {};
		// add a item
		mapAgency["495"] = "1 active task";
		mapAgency["795"] = "3 active tasks";
		mapAgency["1595"] = "7 active tasks";

    	$("#agency-select").on("change", function() {
    		console.log(this.value); // 495, 795
    		$("#new-agency-select").val(mapAgency[this.value]);
    		$("#agencypricevalue").html(this.value);
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

    });
})(jQuery); // End of use strict;