const linki = document.querySelectorAll(".tabs a");
const sekcje = document.querySelectorAll(".section-item");

linki.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    sekcje.forEach(function (sekcja) {
      sekcja.classList.remove("active");
    });

    const id = this.getAttribute("href").substring(1);
    document.getElementById(id).classList.add("active");
  });
});
