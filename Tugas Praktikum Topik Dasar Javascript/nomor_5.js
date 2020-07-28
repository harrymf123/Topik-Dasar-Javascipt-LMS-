class Lingkaran {
    constructor(r,p){
        this.jari_jari = r
        this.phi = p
    }

    luasLingkaran = () => {
        return (this.phi * (this.jari_jari**2))
    }

    kelilingLingkaran = () => {
        return (2 * this.phi * this.jari_jari)
    }
}

class Tabung extends Lingkaran {
    constructor(r,p,t){
        super(r,p)
        this.tinggi = t
    }

    volumeTabung = () => {
        return (this.luasLingkaran() * this.tinggi)
    }

    luasPermukaanTabung = () => {
        return (this.phi * this.jari_jari * (this.jari_jari + (2 * this.tinggi)))
    }

    luasSelimutTabung = () => {
        return (this.kelilingLingkaran() * this.tinggi)
    }
}

class Kerucut extends Lingkaran {
    constructor(r,p,t){
        super(r,p)
        this.tinggi = t
        this.garis_pelukis = Math.sqrt((this.jari_jari**2) + (this.tinggi**2))
    }

    volumeKerucut = () => {
        return (1/3 * this.luasLingkaran() * this.tinggi)
    }

    luasPermukaanKerucut = () => {
        return (this.luasLingkaran() + this.luasSelimutKerucut())
    }

    luasSelimutKerucut = () => {
        return (this.phi * this.jari_jari * this.garis_pelukis)
    }
}

class Bola extends Lingkaran {
    constructor(r,p){
        super(r,p)
    }

    volumeBola = () => {
        return (4/3 * this.phi * (this.jari_jari**3))
    }

    luasPermukaanBola = () => {
        return (4 * this.luasLingkaran())
    }
}

let d,t,r
let p = 3.14

// Tabung
d = 15, r = d/2, t = 50
let tabung = new Tabung(r,p,t)

console.log("==================== TABUNG ====================")
console.log("Diameter   = " + d + " cm")
console.log("Jari-jari  = " + r + " cm")
console.log("Tinggi     = " + t + " cm")
console.log("================================================")
console.log("Volume             = " + tabung.volumeTabung() + " cm2")
console.log("Luas Permukaan     = " + tabung.luasPermukaanTabung() + " cm2")
console.log("Luas Selimut       = " + tabung.luasSelimutTabung() + " cm2")
console.log("================================================")
console.log("")

// Kerucut
d = 20, r = d/2, t = 40
let kerucut = new Kerucut(r,p,t)

console.log("=================== KERUCUT ====================")
console.log("Diameter   = " + d + " cm")
console.log("Jari-jari  = " + r + " cm")
console.log("Tinggi     = " + t + " cm")
console.log("================================================")
console.log("Volume             = " + kerucut.volumeKerucut() + " cm2")
console.log("Luas Permukaan     = " + kerucut.luasPermukaanKerucut() + " cm2")
console.log("Luas Selimut       = " + kerucut.luasSelimutKerucut() + " cm2")
console.log("================================================")
console.log("")

// Bola
d = 30, r = d/2
let bola = new Bola(r,p)

console.log("===================== BOLA =====================")
console.log("Diameter   = " + d + " cm")
console.log("Jari-jari  = " + r + " cm")
console.log("================================================")
console.log("Volume             = " + bola.volumeBola() + " cm2")
console.log("Luas Permukaan     = " + bola.luasPermukaanBola() + " cm2")
console.log("================================================")
console.log("")