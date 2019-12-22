/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/
function partialCheck(str, partial) {
  //your code here   

str1 = str.toLowerCase()
partial1 = partial.toLowerCase()
let ls = str.length
let lp = partial.length
let i=0
let cocok = 0
let cek = ''
l = ls-lp+1
while(i<l){
    a = str[i]
    b = partial[0]
        if (a !==b){
            i++
        }
        else{
            var j=0
            while(j<lp){
                c = str1[i+j]
                d = partial1[j]
                if (c==d){
                    j++
                    cek = 'y'
                }
                else{
                    j = lp
                    cek = 'n'
                    break
                }
            }
            if(cek == 'y'){
                cocok++
            }      
        i++
        }      
}
  if (cocok>0){
  return 'found '+cocok+' times'
  }
  else{
  return 'not found'
  }
}


console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found