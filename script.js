document.getElementById('submitBtn').addEventListener('click', function () {
    const uid = document.getElementById('uidInput').value;
    if (!uid) {
        alert('Please enter a UID.');
        return;
    }

    // API'ге сурам жөнөтүү
    fetch(`https://freefire-virusteam.vercel.app/visit?key=$Taalaimodz444&uid=${uid}&sl=$50`) // API URL'ин өзгөртүңүз
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // API жообун көрсөтүү
            document.getElementById('apiResponse').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('API Error:', error);
            document.getElementById('apiResponse').textContent = 'Error fetching data.';
        });
});
