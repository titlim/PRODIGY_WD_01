function openModal() {
    document.getElementById("cvModal").style.display = "block";
}

function closeModal() {
    document.getElementById("cvModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("cvModal")) {
        closeModal();
    }
}
