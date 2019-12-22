/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here

  //record asal kota berdasarkan pelat
  let i = 0
  let j = 0
  let pelatcity = []
  let lc = 1
  let k = 0
  let cek = 0

  l=cars.length
  while(i<l){
      pelat = cars[i]
      while(k<lc){
          if (pelat == pelatcity[k]){
            cek = 1  
          }
          k++
      }
      if (cek ==1){
          pelatcity = pelatcity
      }
      else{
        pelatcity[j]=pelat
        j++
      }
              
      i++
      k=0
      lc = pelatcity.length
      cek = 0
  }

  // menyusun pelat dan menghitung banyaknya
  i = 0
  j = 0
  let value = 0
  var pelatvalue = []
  while(j<lc){
      index = pelatcity[j]
      while(i<l){
          pelatindex = cars[i]
          if(index ==pelatindex){
          value++
          }
        i++
      } 
  pelatvalue[j] = value/l*100
  j++
  i=0
  value = 0
  }
  
  i=0
  var hasil = []
  while(i<lc){
    hasil[i] = [pelatcity[i], pelatvalue[i]]
    i++
  }

  return '[ '+hasil+' ]'
  
}


console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/