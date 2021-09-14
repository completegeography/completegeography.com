var imported = document.createElement("script");
imported.src = "https://www.googletagmanager.com/gtag/js?id=G-ZKY3LZ5G10";
document.head.appendChild(imported);
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-ZKY3LZ5G10");
var currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = currentYear;
