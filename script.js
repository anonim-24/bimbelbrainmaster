document.getElementById("cta-button").addEventListener("click", function () {
    alert("Terima kasih telah mendaftar di Brain Master! Kami akan menghubungi Anda segera.");
});

// Form Submission Event
document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const program = document.getElementById("program").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Menampilkan data yang dimasukkan ke console (bisa disimpan di database untuk implementasi lebih lanjut)
    console.log("Pendaftaran berhasil!");
    console.log("Nama: ", name);
    console.log("Program: ", program);
    console.log("Email: ", email);
    console.log("Telepon: ", phone);
    console.log("Alamat: ", address);

    // Alert sebagai konfirmasi
    alert("Pendaftaran Anda berhasil! Kami akan menghubungi Anda segera.");
});
