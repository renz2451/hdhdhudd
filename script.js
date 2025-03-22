document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".download-button, .telegram-button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("This feature is not available yet!");
        });
    });
});
