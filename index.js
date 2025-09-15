document.addEventListener('DOMContentLoaded', function() {
    const pickUpLocation = document.getElementById('pickUpLocation');
    const dropOffLocation = document.getElementById('dropOffLocation');
    const searchButton = document.getElementById('searchButton');

    function toggleSearchButton() {
        if (pickUpLocation.value.trim() !== '' && dropOffLocation.value.trim() !== '') {
            searchButton.removeAttribute('disabled');
        } else {
            searchButton.setAttribute('disabled', 'disabled');
        }
    }

    pickUpLocation.addEventListener('input', toggleSearchButton);
    dropOffLocation.addEventListener('input', toggleSearchButton);
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const pickupLocation = document.getElementById('pickUpLocation').value;
    const dropoffLocation = document.getElementById('dropOffLocation').value;
    localStorage.setItem('pickupLocation', pickupLocation); // Store the value in localStorage
    localStorage.setItem('dropoffLocation', dropoffLocation); // Store the value in localStorage
    window.location.href = 'ride.html'; // Redirect to the second page
}

