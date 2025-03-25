document.addEventListener("DOMContentLoaded", function () {
    var restauCards = document.querySelectorAll(".restauCard");
    var popupDets = document.getElementById("restaurant-details");
    var closeBtn = document.querySelector(".close-btn");

    restauCards.forEach(function (card) {
        card.addEventListener("click", function () {
            var name = card.getAttribute("data-name");
            var image = card.getAttribute("data-image");
            var description = card.getAttribute("data-desc");
            var price = card.getAttribute("data-price");
            var time = card.getAttribute("data-time");
            var location = card.getAttribute("data-location");

            document.getElementById("popup-name").textContent = name;
            document.getElementById("popup-image").src = image;
            document.getElementById("popup-desc").textContent = description;
            document.getElementById("popup-price").textContent = price;
            document.getElementById("popup-time").textContent = time;
            document.getElementById("popup-location").textContent = location;
            document.getElementById("popup-title").textContent = name;

            popupDets.classList.remove("d-none");
            popupDets.classList.remove("fade-out");
            popupDets.classList.add("fade-in");
        });
    });

    closeBtn.addEventListener("click", function () {
        if (!popupDets.classList.contains("d-none")) {
            popupDets.classList.remove("fade-in");
            popupDets.classList.add("fade-out");

            setTimeout(function () {
                popupDets.classList.add("d-none");
            }, 500);
        }
    });
});
