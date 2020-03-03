$(document).ready(function () {




    $(".chooseYourHeroButton").click(offScreen);

    function offScreen() {
        $(".powerFist").toggle("slow");
        $(".chooseYourHeroButton").toggle("slow");
        $(".chooseYourHeroButton-gradient").toggle("fast");
        $(".herosContainer").delay(500).slideToggle();
    }

});