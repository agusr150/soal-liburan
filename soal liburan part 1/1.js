/*

  TOL JAKARTA BANDUNG

  Karena adanya mudik lebaran maka pemerintah menerapkan sistem beberapa jalur prioritas.
  disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan yang paling cepat
  sampai ke tujuan.

  Plat nomor kuning paling cepat sampai, dilanjutkan merah, dan terakhir hitam.
  Jam keberangkatan sesuai urutan dalam array.

  [INPUT]
  [['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]

  [PROCESS]
  kuning => 'B 1172 BA'
  merah => 'B 1171 BA'
  hitam => 'B 1173 BA', 'B 1174 BA'

  [OUTPUT]
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]  

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function firstArrived(cars) {
  // code below here
l = cars.length
let a = 0
let i=0
let pelat= []


 while(i<l){
    mobil = cars[i] 
    warna = mobil[1]
    if (warna == 'kuning'){
        arrival= mobil
        pelat[a] = mobil[0]
        a++
        }   
    i++    
    }
    i = 0
    while(i<l){
        mobil = cars[i] 
        warna = mobil[1]
        if (warna == 'merah'){
            arrival= mobil
            pelat[a] = mobil[0]
            a++
            }   
        i++    
        }

    i = 0
    while(i<l){
        mobil = cars[i] 
        warna = mobil[1]
        if (warna == 'hitam'){
            arrival= mobil
            pelat[a] = mobil[0]
            a++
            }   
        i++    
        }
return '[ '+pelat+' ]'
};

//TEST CASE

console.log(firstArrived([['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]
*/
console.log(firstArrived([['B 1174 BA', 'hitam'], ['B 1171 BA', 'merah'], ['B 1173 BA', 'hitam'], ['B 1172 BA', 'kuning']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1174 BA', 'B 1173 BA' ]
*/
