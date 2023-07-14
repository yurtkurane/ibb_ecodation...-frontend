//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 


var number = -5.9;
// 1
number=Math.abs(number)
console.log(number);
// 2
number=Math.round(number)
console.log(number);
// 3
number=Math.pow(number,2)
console.log(number);
// 4
number=Math.sqrt(number)
console.log(number);
// 5
number=Math.round(number)
console.log(number);
// 6
number=Math.round(number/5)
console.log(number);
// 7
number=Math.min(1,5)
console.log(number);
// 8
number=Math.min(number+3)
console.log(number);


// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

var userData=Number(prompt("Lütfen bir sayı giriniz"))
if (userData<0) { document.write(userData + " Sayısı Negatiftir");}
if (userData>0) { document.write(userData + " Sayısı Pozitiftir");}




// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

var userData=String(prompt("Password"))





// Ödev 
// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

var userData=String(prompt("Lütfen bir cümle yazınız"))
console.log(userData);

// S-1
console.log(userData.length);
// S-2
console.log(userData.trim().length);
// S-3
console.log(userData.toLowerCase());
// S-4
console.log(userData.toUpperCase());
// S-5
console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6
console.log(userData.startsWith("javascript"));
// S-7
console.log(userData.endsWith("javascript"));
// S-8
console.log(userData.charAt(0));
// S-9
console.log(userData.concat(" ben js öğreniyorum"));
// S-10
console.log(userData.substring(0,4));

