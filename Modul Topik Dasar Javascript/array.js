// Array
// array string
let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer dan Jaringan","Teknik Komputer dan Jaringan"]

// array numeric
let tingkatan_kelas = [10,11,12]

// array objek
let siswa1 = [
    // objek pertama
    {nama: "Yaya", jurusan: "RPL"},

    // objek kedua
    {nama: "Ying", jurusan: "TKJ"},

    // objek ketiga
    {nama: "Gopal", jurusan: "RPL"}
]

// 1. Mendapatkan jumhlah data
console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa1.length);

// 2. Menambahkan data pada array
let kota = ["Malang","Surabya","Tulungagung"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------------------------");

// tambah data kota baru
kota.push("Banyuwangi");

console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

// Contoh penambahan data pada array objek
let barang = [
    {nama: "Rinsoo", harga: 5000},
    {nama: "Moonlight", harga: 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("--------------------------------")

// tambah data barang baru
barang.push(
    {nama: "Mloto", harga: 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

// 3. Menghapus data pada array
let nama = ["Ana", "Sulaiman", "Putri", "Gatot", "Adit", "Gico"]

console.log("Data array");
console.log(nama);
console.log("Jumlah data saat ini = " + nama.length);

console.log("--------------------------------------");

// kode penghapusan data
nama.splice(2,1)

console.log("Data array");
console.log(nama);
console.log("Jumlah data saat ini = " + nama.length);

// 4. Menampilkan data pada array object
let siswa = [
    {nama_depan: "Jack", nama_belakang: "Ma"},
    {nama_depan: "Johnny", nama_belakang: "English"},
    {nama_depan: "John", nama_belakang: "Cena"}
]

// menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)