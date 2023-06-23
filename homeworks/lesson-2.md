# Lesson 2

  > **İkinci ders için verilen ödevler**

  ***
  

## IP ve Domain nedir?
````
Domain yani alan adı, insanların bir siteye ulaşmak için tarayıcıya yazdıkları adrestir genellikle URL veya web adresi olarak adlandırılır. Farklı websiteleri için aynı domainleri kullanmak mümkün değildir. Her bir websitesi için ayrı bir domain kullanılmak zorundadır.

IP adresi, her bilgisayara atanan ve noktalarla ayrılmış 0 ile 255 arasında değişen dört ondalık sayıdan oluşur. Bu görünüşte rastgele sayı dizileri, bilgisayarlar için uygun olsa da insanlar sayılar yerine hatırlayabilecekleri kelimeleri kullanmayı tercih edebilirler. Domainler, bir web sitesinin online konumlandırıcısını temsil eden İnternet Protokolüne (IP) erişmenin kolay bir yolu olarak oluşturulmuştur.

IP adreslerinin akılda kalıcığı zor olduğu için Domain adresleri oluşturulmuş ve kullanıcıya kolaylık sağlanmıştır. Bu vesileyle adres satırına girilen domain, DNS aracılığı ile IP adresine dönüştürülerek kısa sürede web sitesine bağlantı gerçekleştirilir.
````
## camelCase nedir?

````
camelCase, programlama dillerindeki değişkenler, işlevler ve diğer tanımlayıcılar için bir adlandırma kuralıdır. camelCase, isimlendirme türünde ilk harf küçük harf ile başlar ve sonraki her yeni sözcüğün ilk harfi büyük olmalıdır.

Örneğin, "helloWorld"
````
## PascalCase nedir?

````
PascalCase, isimlendirme türü ise camelCase ile aynı sayılabilir, aralarındaki tek fark camelCase ‘de ilk kelimenin ilk harfi küçük iken, Pascal case ‘de Her kelimenin ilk harfi büyük yazılır.

Örneğin, "HelloWorld"
````
## CSS:box-sizing nedir?

````
CSS'te box-sizing özelliği bir HTML öğesinin width ve height değerini etkilemeden padding ve border css değerleri tanımlanmasına izin verir.
````
## CSS:position nedir?

````
CSS'de "position" özelliği, bir etiket için kullanılan konumlandırma yönteminin türünü belirtir. Position özelliğinin yanında CSS’in top, bottom, left ve right özellikleri de konumlandırmak için yardımcı olarak kullanılır. Ancak, önce position özelliği ayarlanmadıkça bu özellikler çalışmayacaktır. Ayrıca position değerine bağlı olarak farklı şekilde çalışırlar. CSS Position çeşitleri aşağıda açıklanmıştır.

^position: static;

Static değeri tüm HTML elemanlarının varsayılan position değeridir. Bir HTML elemanına position değeri verilmezse her zaman static değeri geçerlidir. Top, right, bottom, left ve z-index özellikleri bu öğe için geçerli değildir.

^position: relative;

HTML elemanına relative değeri verildiğinde kendi konumunu korur ve top, bottom, left ile right değerleri için sıfıra sıfır noktasını kendi konumu olarak belirler. Sayfa üzerinde top, bottom, left ve right değerleri değiştirildiğinde relative özelliği verilmiş elemanın kapladığı boşluk değişmez static gibi davranır. Göreceli olarak konumlandırılmış bir öğe normal konumuna göre konumlandırılmıştır. Göreceli olarak konumlandırılan elemanlar, diğer elementler taşınır ve katmanlar(gimp, photoshop gibi resim katmanları) halinde bulunabilir, ancak element için ayrılan alan normal akışta korunur.


^position: absolute;

Absolute değeri almış eleman kendisine en yakın olan relative değerine sahip bir üst eleman içerisinde konumlanır. Eğer üstünde relative değerine sahip bir konteyner yoksa, absolute değeri almış eleman sayfanın sol üst köşesinde konumlanır. Top, bottom, left ve right değerleri elemanın sayfa içerisinde konumlanmasına yardımcı olur.

^position: fixed;

Fixed değeri ile HTML elemanı sayfa üzerinde istenilen bir noktaya sabitlenebilir, pencere kaydırılsa bile hareket etmez ve öğeyi konumlandırmak için kullanılır. Top, bottom, left ve right değerleri fixed değeri verilmiş elemanın sayfa içerisinde konumlanmasına yardımcı olur.

^position: sticky;

Position Sticky
Sticky değeri, relative ile fixed değerlerinin karışımı olarak düşünülebilir. Sticky pozisyonu verilmiş eleman belirli bir eşiği geçene kadar belirtilmiş noktada sabit kalır. Bu belirli nokta ise sticky pozisyonu verilmiş elemanın bir üst konteynır elemanıdır. Top, bottom, left ve right değerleri elemanın sticky pozisyonu ile sayfa içerisinde konumlanmasına yardımcı olur. Sticky pozisyonunun çalışabilmesi için top özelliğinin eklenmesi elzemdir.

^Çakışan (Overlapping) Etiketler

Öğeler konumlandırıldığında, diğer öğelerle çakışabilirler. CSS'te "z-index" özelliği, bir öğenin gözükme sırasını belirtir (hangi öğenin diğerlerinin önüne veya arkasına yerleştirilmesi gerekir).
Bir öğe, pozitif veya negatif bir indis sırasına sahip olabilir:

img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
Daha büyük indis sırasına sahip bir öğe, her zaman daha düşük indis sırasına sahip bir öğenin önündedir. Konumlandırılmış iki öğe bir z-index belirtilmeden çakışırsa, HTML kodunda en son konumlandırılan etiket en üstte gösterilir.
````