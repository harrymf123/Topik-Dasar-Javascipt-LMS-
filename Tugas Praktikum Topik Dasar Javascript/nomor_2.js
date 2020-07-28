let barang  = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak Goreng", harga: 9000, jumlah: 10},
]

let totalHarga = 0
let totalData = barang.length - 1

for(let i = 0; i <= totalData; i++){
    let hargaPerBarang = barang[i].harga * barang[i].jumlah
    totalHarga += hargaPerBarang
}

console.log("================== Daftar Belanja ==================");
console.log(barang);
console.log("====================================================");
console.log("TOTAL BELANJA = Rp " + totalHarga)
console.log("====================================================");