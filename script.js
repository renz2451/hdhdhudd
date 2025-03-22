document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".neon-button");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Cyberpunk Feature Coming Soon!");
        });
    });
});
