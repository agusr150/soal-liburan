/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  // code below here
  l = numbers.length
  var i = 0
  numberPal = []
  while (i<l){
      angka = numbers[i]
      angkaPal = angka
      var k = 0
      //cek dan cari angka palindrome di atas yg terdekat
      while (k < 100){
          angkastr = String(angkaPal)
          var la = angkastr.length
          var mid = Math.ceil(la/2)
          var j = 0
          var palindrome = 0
          while( j<mid ){
              var a = angkastr[j]
              var b = angkastr[la-1]
              c = a-b
              //console.log(c)
              if (c == 0){
                  palindrome = 1 // palindrome
                  break
              }
              else{
              palindrome =  0// bukan palindrome
              } 
           j++
          }    
          if (palindrome == 0){
              k++
              angkaPal++
          }
          else{
              break
          }
      }
    numberPal[i] = angkaPal
    i++
  }
  
 return '[ '+numberPal+' ]' 
}

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]

console.log(palindromeChanger([102, 12, 47]))