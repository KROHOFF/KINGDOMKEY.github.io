window.addEventListener("scroll", function () {
    var header = document.querySelector(".sticky-header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
