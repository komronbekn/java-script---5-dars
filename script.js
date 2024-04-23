// let str = 'behruz dilbek sadulla amibek'
// let ism = prompt('ism kiriting')
// if (str.includes(ism)){
//     console.log('ism bor');
// }
// else {
//     console.log('ism yoq');
// }

// let str1 = 'web'
// let str2 = 'brain'
// console.log(str1.replace('web' , 'brain'));
// console.log(str2.replace('brain' , 'web'));


let ism = prompt('ismingizni kirting')
let harf = prompt('birorta harf kiriting')

ism = ism.toUpperCase()
harf = harf.toUpperCase()
let check = ism.includes(harf)

if(check){
    alert(`${ism} so'zida ${harf} harfi bor`)
}
else{
    alert(`${ism} so'zida ${harf} harfi yoq`)
}