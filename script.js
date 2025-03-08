document.getElementById('submitBtn').addEventListener('click', function () {
    const uid = document.getElementById('uidInput').value;

    if (!uid) {
        alert('Please enter a UID.');
        return;
    }

    // API'ге сурам жөнөтүү
    const apiUrl = `https://freefire-virusteam.vercel.app/visit?key=$Taalaimodz444&uid=${uid}&sl=$50`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // API жообун көрсөтүү
            if (data.status === "Success") {
                document.getElementById('name').textContent = data.message.Name;
                document.getElementById('uid').textContent = data.message.UID;
                document.getElementById('successful').textContent = data.message.Successful;
                document.getElementById('failed').textContent = data.message.Failed;
                document.getElementById('time').textContent = data.message.Time;
                document.getElementById('speed').textContent = data.message.Speed;
            } else {
                document.getElementById('apiResponse').innerHTML = `<p>Error: ${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('API Error:', error);
            document.getElementById('apiResponse').innerHTML = '<p>Error fetching data.</p>';
        });
});
