$(document).ready(function () {
    // Handle theme selection and apply background
    $(".apply-btn").click(function () {
        // Remove active class from all buttons
        $(".apply-btn").removeClass("btn-primary").addClass("btn-outline-primary").text("Apply");

        // Add active class to the clicked button
        $(this).removeClass("btn-outline-primary").addClass("btn-primary").text("✔ Applied");

        // Get the selected theme
        const selectedTheme = $(this).data("theme");

        // Apply the background image dynamically
        $("body").css({
            "background": `url('./assets/${selectedTheme}.jpg') no-repeat center center fixed`,
            "background-size": "cover"
        });
    });

    // Handle Next button click
    
});
$(".apply-btn").click(function () {
    $(".apply-btn").removeClass("active");  // Remove active from all
    $(this).addClass("active");  // Add active to clicked button
});

