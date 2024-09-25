function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    this.classList.toggle("clicked"); // Toggle the 'clicked' class on click
});
