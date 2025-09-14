document.addEventListener('DOMContentLoaded', () => {
    const pickupLocation = localStorage.getItem('pickupLocation');
    const dropoffLocation = localStorage.getItem('dropoffLocation');
    if (pickupLocation) {
        document.getElementById('pickUpLocation').value = pickupLocation; // Pre-fill the input with the stored value
    }
    if (dropoffLocation) {
        document.getElementById('dropOffLocation').value = dropoffLocation; // Pre-fill the input with the stored value
    }
});