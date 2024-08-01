const urlParam = new URLSearchParams(window.location.search);
const jeneng = urlParam.get('to') || '';
 
const candu = document.getElementById('candu');
candu.innerText = ` ${jeneng}`;

 function bukaUndangan () {
    document.querySelector('#bukaUD').setAttribute('hidden', true);
    document.querySelector('.core').style.position = 'relative';
    document.querySelector('.aws').style.top = '-100vh';
};

// simplyCoutdown
simplyCountdown('.simply-countdown', {
    year: 2024, 
    month: 7, 
    day: 18, 
    words: { 
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    }
});

window.addEventListener("load", function() {
    const form = document.querySelector('.konfir');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        const reload = confirm("Terimakasih Sudah Mengkonfirmasi Kehadiranmu. Apakah Anda ingin memuat ulang halaman untuk menampilkan pesan anda? (Ya/Tidak)");
                    if (reload) {
                        window.location.reload();
                    }
                })
                .catch(error => console.error('Error posting data:', error));
      })
    });

// Connect API to GSheet
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://sheet.best/api/sheets/9cff6333-bd1e-455d-8c30-0125785bc209")
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('data-tbody');
            data.forEach(item => {
                const row = document.createElement('div');
                row.innerHTML = `
                    <p>${item.tanggal}</p>
                    <p>${item.Nuama}</p>
                    <p>${item.jumlahHadir}</p>
                    <p>${item.status}</p>
                    <p>${item.komentar}</p>
                `;
                row.classList.add('data-komen');
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});