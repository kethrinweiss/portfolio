function openModal(src) {
    document.getElementById("modalImg").src = src;
    document.getElementById("imageModal").classList.add("active");
}

function closeModal() {
    document.getElementById("imageModal").classList.remove("active");
}
