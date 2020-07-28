class HitungBMI {
    constructor(b,t){
        this.beratBadan = b
        this.tinggiBadan = t/100
    }

    hitungBMI = () => {
        return this.beratBadan / (this.tinggiBadan**2)
    }
}

let b = 90
let t = 170

let bmi = new HitungBMI(b,t)
let hitungBMI = bmi.hitungBMI()

console.log("================ DATA RHODEY ================")
console.log("Tinggi Badan   = " + t + "cm")
console.log("Berat Badan    = " + b + "kg")
console.log("=============================================")
console.log("Data Hasil BMI = " + hitungBMI)

if(hitungBMI < 18.5){
    console.log("BMI            = Kurang dari 18.5")
    console.log("Status         = Kekurangan berat badan")
}else if(hitungBMI >= 18.5 && hitungBMI <= 24.9){
    console.log("BMI            = 18.5 - 24.9")
    console.log("Status         = Normal(Ideal)")
}else if(hitungBMI >= 25.0 && hitungBMI <= 29.9){
    console.log("BMI            = 25.0 - 29.9")
    console.log("Status         = Kelebihan berat badan")
}else{
    console.log("BMI            = 30.0 atau lebih")
    console.log("Status         = Kegemukan(Obesitas")
}
console.log("=============================================")