function showReport() {
    document.getElementById("home").style.display = "none";
    document.getElementById("report").style.display = "block";
}

function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("report").style.display = "none";
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    document.getElementById("location").value =
        "Latitude: " + lat + ", Longitude: " + lon;
}

function showError(error) {
    alert("Unable to get location. Please enter manually.");
}

function validateForm() {
    let file = document.getElementById("media").value;
    let desc = document.getElementById("description").value;
    let location = document.getElementById("location").value;

    if (file === "") {
        alert("Please upload an image or video.");
        return false;
    }

    if (location.trim() === "") {
        alert("Please provide location.");
        return false;
    }

    if (desc.trim() === "") {
        alert("Please enter description.");
        return false;
    }

    if (desc.length < 10) {
        alert("Description must be at least 10 characters.");
        return false;
    }

    alert("Report submitted successfully!");
    return true;
}