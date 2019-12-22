/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

  
*/

function winner (cars, totalKM) {
  //code below here
  l = cars.length
  let i = 0
  let array = []
  
  while (i<l){
      mobil = cars[i]
      jarak = mobil[2]
      jaraksisa = totalKM - jarak
      kecepatan = mobil[1] 
      waktu = jaraksisa/kecepatan
      pelat = mobil[0]
      pelatwaktu = [pelat, waktu]
      //console.log(pelatwaktu)
      array[i]=pelatwaktu
      i++
  }
  
  //mengurutkan winner
  i = 0
  let a = 0
  let time1 = 1000000 //set dummy time terbesar
  let timewin = 0
  let pelat1 = ''
  let pelatwin = ''
  let winner = []
  
  while(a<l){
      while(i<l){
          arraycar = array[i]
          time = arraycar[1]
          pelat = arraycar[0]
          if (timewin>=time){
              time1 = time1
              i++
          }
          else{
              if(time1>time){
                  pelat1 = pelat
                  time1 = time
              } 
              else{
                  pelat1 = pelat1
                  time1= time1
              }
              i++
          }
  
      //console.log(pelat1)
      //console.log(time1)
      }
  
  winner[a] = pelat1
  timewin = time1
  //console.log(winner)
  //console.log(timewin)
  a++
  i=0 // reset value i
  time1 = 1000000 // reset ke dummy time
  }
return '[ '+winner+' ]'
};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/