document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".download-button, .telegram-button");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Download link is not available yet!");
        });
    });
});
