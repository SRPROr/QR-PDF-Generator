document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pdfFile = document.getElementById('pdfFile').files[0];

    if (pdfFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileUrl = e.target.result;

            // Generacion de código QR
            const qr = new QRious({
                value: fileUrl,
                size: 250
            });

            const qrCode = document.getElementById('qrCode');
            qrCode.src = qr.toDataURL();
            qrCode.style.display = 'block';

            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = qrCode.src;
            downloadLink.style.display = 'inline-block';

            document.getElementById('preview').style.display = 'block';
        };
        reader.readAsDataURL(pdfFile);
    }
});
