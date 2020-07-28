class BeliTanah {
    constructor(p,l,hP,ppn){
        this.panjang = p
        this.lebar = l
        this.hargaPermeter = hP
        this.pajakPPN = ppn
    }

    luasTanah = () => {
        return this.panjang * this.lebar
    }

    hargaTanah = () => {
        let luasTanah = this.luasTanah()
        return luasTanah * this.hargaPermeter
    }

    pajakTanah = () => {
        let hargaTanah = this.hargaTanah()
        return hargaTanah * this.pajakPPN
    }

    totalBiaya = () => {
        let hargaTanah = this.hargaTanah()
        let pajakTanah = this.pajakTanah()
        return hargaTanah + pajakTanah
    }
}

let p = 20.5
let l = 30
let hP = 1500000
let ppn = 0.15

let beliTanah = new BeliTanah(p,l,hP,ppn)
console.log("Ukuran tanah = " + p + "m" + " x " + l + "m");
console.log("Harga per meter persegi = Rp " + hP);
console.log("Harga tanah keseluruhan = Rp " + beliTanah.hargaTanah());
console.log("Jumlah nominal PPN = Rp " + beliTanah.pajakTanah());
console.log("=======================================")
console.log("TOTAL BIAYA PENGELUARAN = Rp " + beliTanah.totalBiaya());
console.log("=======================================")