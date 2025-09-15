document.addEventListener('DOMContentLoaded', () => {
    const pickupLocation = localStorage.getItem('pickupLocation');
    const dropoffLocation = localStorage.getItem('dropoffLocation');
    if (pickupLocation) {
        document.getElementById('pickUpLocation').value = pickupLocation; 
    }
    if (dropoffLocation) {
        document.getElementById('dropOffLocation').value = dropoffLocation; 
    }
});


document.addEventListener('DOMContentLoaded', () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXNoYS0wOSIsImEiOiJjbWZrYXB0bTEwZGhkMmtzaDl4dTFnM3ZlIn0.rjEMdElfqaPCsiw72SXtog'; // replace with your token

    // Initialize the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [12.9629, 77.5775],
        zoom: 10
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());

    // Add directions control
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
    });
    map.addControl(directions, 'top-left');

    // Prefill pickup & drop-off if stored in localStorage
    const pickupLocation = localStorage.getItem('pickupLocation');
    const dropoffLocation = localStorage.getItem('dropoffLocation');

    if (pickupLocation) {
        directions.setOrigin(pickupLocation);
        document.getElementById('pickUpLocation').value = pickupLocation;
    }
    if (dropoffLocation) {
        directions.setDestination(dropoffLocation);
        document.getElementById('dropOffLocation').value = dropoffLocation;
    }

    // Save when user submits form
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const pickup = document.getElementById("pickUpLocation").value;
        const dropoff = document.getElementById("dropOffLocation").value;

        localStorage.setItem("pickupLocation", pickup);
        localStorage.setItem("dropoffLocation", dropoff);

        directions.setOrigin(pickup);
        directions.setDestination(dropoff);
    });
});
