async function getData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function displayData() {
    const jsonDataContainer = document.getElementById('jsonData');

    // Ganti URL sesuai dengan lokasi file JSON yang Anda ingin ambil datanya
    const polygonData = await getData('polygon.json');
    const polylineData = await getData('polyline.json');
    const waypointData = await getData('waypoint.json');

    // Tampilkan data di dalam elemen jsonDataContainer
    jsonDataContainer.innerHTML += `
        <div>
            <h2>Polygon Data</h2>
            <p>Name: ${polygonData.properties.name}</p>
            <p>Type: ${polygonData.geometry.type}</p>
            <p>Coordinates: [${polygonData.geometry.coordinates.join(', ')}]</p>
        </div>
        <div>
            <h2>Polyline Data</h2>
            <p>Name: ${polylineData.properties.name}</p>
            <p>Type: ${polylineData.geometry.type}</p>
            <p>Coordinates: [${polylineData.geometry.coordinates.join(', ')}]</p>
        </div>
        <div>
            <h2>Waypoint Data</h2>
            <p>Name: ${waypointData.properties.name}</p>
            <p>Type: ${waypointData.geometry.type}</p>
            <p>Coordinates: [${waypointData.geometry.coordinates.join(', ')}]</p>
        </div>
    `;
}

displayData();
