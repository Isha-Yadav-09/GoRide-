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