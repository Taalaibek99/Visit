// URL параметрлерин алуу
const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get('uid');
const sl = urlParams.get('sl');

// DOM элементтерин жаңыртуу
document.getElementById('uid').textContent = uid || 'Not provided';
document.getElementById('sl').textContent = sl || '50';