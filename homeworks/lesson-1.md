# Lesson 1

  > **1. ders için verilen ödevler**

  ***
  

## Library(Kütüphane) ile Framework(Çerçeve) arasındaki farklar nelerdir?

````
İkisi de daha önceden yazılmış ve başkaları tarafından kullanıma açık ortak kod yapısı olup, arasında amaç anlamında bir fark yoktur fakat teknik kısımda birbirinden ayrılırlar. Bu teknik fark, kodun nasıl çağrıldığı ile ilgilidir.

Library’den alınan kodlar istenilen şekilde kullanılabilmektedir fakat framework kodların nerde ve ne zaman kullanılacağı bellidir, işleve uygun kullanılmaz ise doküman kullanım dışı kalır.

Framework ev ise, Library mobilyalardır. Evin yapısını değiştiremezsin ama mobilyaların yerini değiştirebilirsin.

Örnek olarak; Jquery kütüphane, react frameworktür.
````

## Compiler(Derleyici) nedir?

````
Herhangi bir programlama dilini makine diline çeviren aracı yazılımdır. Böylece bilgisayarların bu dilleri anlamasını sağlar.

Yani iki programlama arasında tercüman görevi görür. 
`````

## Interpreter(Yorumlayıcı) nedir?

````
Compiler ile benzer yapılarda olsalar da programlara dili ile yazılan kodları compiler makine diline çevirirken interpreter komutları doğrudan işler.
Her bir satır kod interpreter tarafından yorumlanır ve doğrudan çalıştılar.
````

## ASCII Character ve Unicode Nedir? 
````
Yapısal açıdan bilgisayarlar sayılar yardımıyla çalışırlar. Her karakter için hafızlarında bir sayı tutar ve bu sayı yardımıyla karakter, rakam veya sembolün oluşturulmasını sağlarlar.ASCII ve Unicode da bu amaca yönelik elektronik iletişimde kulllanılan karakter kodlama standartıdır.

 ASCII, herhangi bir metni sayılara dönüştürerek kodlar, çünkü sayı kümesinin bilgisayar belleğinde saklanması bir dil olarak alfabelerden daha kolaydır. Büyük ölçüde İngiliz alfabelerinin, küçük harflerin (a-z), büyük harflerin (A-Z), noktalama işaretleri gibi sembollerin ve rakamların (0-9) kodlanması için kullanılır. ASCII, World Wide Web’de karakter kodlaması için büyük ölçüde kullanılmıştır ve HTML gibi modern bilgisayar programları için hala kullanılmaktadır. ASCII sadece 128 karakterden oluşur ve bir karakteri kodlamak için 7bit kullanır.

UNICODE, 0<sub>16</sub> ile 10FFFF1<sub>16</sub> sayılara karşılık gelen 1.114.112 adet kod noktasından oluşan bir kod alanı tanımlamıştır. Unicode, sırasıyla 8 bit, 6 bit ve 32 bit kullanan UTF-8, UTF-16 ve UTF-32 olmak üzere üç tür kodlama işletmiştir. Bu sayede tüm işletim sistemleri, internet tarayıcıları, bilgisayarlar vs hepsi Unicode kullanabilmektedir. Universal bir çalışma olduğundan dolayı dünya çapında kabul görmüştür ve geniş çaplı  kullanılmaktadır. ASCII karakterler sadece İngilizce üzerinde etkili olurken, Unicode tamamen evrenseldir. Unicode’un farklı sürümleri sayesinde İbranice ve Arapça gibi kompleks diller başta olmak üzere Çince gibi karmaşık diller kolayca dijital ortamlara aktarılabilmektedir. Yalnızca diller değil, Unicode kodlaması sayesinde karmaşık semboller ve karakterler kolayca meydana getirilebilirler.
````

## Semantic-Non-semantic nedir?
````
Semantik yani anlamsal etiketler içeriğin belli bir anlam ifade ettiğini belirtir.Örneğin, <header>...</header> etiketi anlamlıdır. Çünkü, bu etiketi gördüğümüzde içeriğinde bir bölüm başlığı olduğunu varsayabiliriz

![alt text](img/html%20semantik%20etiketler.png)

Non-semantik etiketler ise içeriği ile ilgili bilgi vermez. <div> ve <span> non semantic etiketlere örnektir. 

Html5 güncellemesi ile gelen semantic etiketleri kullanmak arama motorları açısından büyük önem taşımaktadır. Çünkü oluşturulan içerikleri html semantik etiketler içinde sunuyor olmak siteyi indekslemeye gelen arama motorlarına içerik ile alakalı daha anlamsal bilgi sunduğundan dolayı ziyaretçi sayısını olumlu etkilemektedir.
````

## Form yapısındaki GET/POST nedir?
````
Kullanıcıların web sitesine kayıt olabilmesi, giriş yapması, yorum yapması veya iletişime geçmesi form yapıları oluşturulmaktdır. Bunun için HTML talep methodları kullanılır. GET ve POST bu methodlara dahildir, bunlar haricinde HEAD, PUT, DELETE, OPTIONS ve CONNECT gibi methodlarda kullanılmaktadır.

GET methodu sunucudan veri almak için kullanılır. Örneğin web sayfası açıldığında veya site üzerinde herhangi bir sayfayı gidildiğinde bir adres isteğinde bulunulur tarayıcıda bu isteği GET methodu ile yapar.GET methodu ile bir html formundan gönderilen veri herkes için görünürdür. Çünkü tüm gönderilen değişkenler ve değerleri URL'ye yerleşir. Dolayısıyla GET ile değişkenler URL’de yer aldığı için sayfayı değişken değerleri kaybolmadan yer imlerine atmak mümkündür. Yani GET ile bir sayfa içeriğini sunucudan almak için tekrar tekrar forma veri girmeye ya da sayfa içi tıklamalar yapılmasına gerek yoktur.  

POST methodu sunucuya veri göndermek için kullanılır. POST metodu ile sunucuya sınırsız kapasitede veri gönderilebilmektedir. POST metodu  ile gönderilen veriler HTTP isteğinin istek gövdesinde saklandığı için veriler daha güvenli şekilde iletilir. Fakat POST mehtodu GET methoduna göre daha yavaştır. GET ile POST'un bir diğer farkı şudur ki GET ile veri göndermede karakter limiti varken POST'ta böyle bir limit yoktur. Aynı zamanda POST ile forma bir resim koyup sunucuya upload edilebilir fakat GET ile bu mümkün değildir.

Bu iki methodun birbirine göre avantajları ve dez avantajları vardır. Bundan dolayı genellike GET methodu sunucudan bilgi almak için POST methodunu ise sunucuya bilgi göndermek için kullanılmaktdır.
````

## Ajax nedir?
````
“AJAX Nedir?” AJAX, Asynchronous JavaScript and XML(eXtensible Markup Language – Genişletebilir İşaretleme Dili, XML, HTML gibi işaretleme dilinin başka bir değişkeni), Türkçe olarak Eşzamansız ve XML’in kısaltılmışıdır. Sunucuya gelen herhangi bir isteği arkaplanda işleyerek web uygulamalarının eşzamanlı olmadan çalışmasına olanak sağlayan bir takım web geliştirme teknikleridir. JavaScript AJAX teknolojisi web sayfalarını yenilemeden arka planda veri gönderme ve veri alma işlemleri için kullanılır.
````

## CDN nedir?
`````
CDN(Content Delivery Service), Türkçe karşılığı içerik dağıtım ağı olan CDN bir web sitesine erişimi hızlandırmak için coğrafi olarak en yakın sunucuya yönlendiren ve böylece daha hızlı erişim olanağı sağlayan bir sunucu ağı sistemidir. 

CDN sahip olduğu (web sitesine ait) tüm verileri, o web sitesinin asıl (origin) sunucusundan çekmektedir. CDN çektiği verileri önbelleğine alır (cache’ler) ve bir internet kullanıcısı o verileri talep ettiğinde önbelleğine aldığı verileri internet kullanıcısına sunar. Bu önbellekleme süresi dilendiği gibi ayarlanabilir ve önbellekleme süresi bittiğinde origin sunucuya yapılan yeni bir istek ile birlikte taze veriler çekilmektedir.

CDN kullanımının ana sebebi hızlı erişime olanak sağlamasının dışında güvenliği artırması, ana sunucunun yükünü azaltması, trafik yoğunluğunun yönetilmesini sağlamasıdır.
`````
## Integrity nedir?
````
Integrity, web uygulama geliştiricilerine, Content Delivery Networks (CDN) gibi üçüncü parti servislerde barındırılan kaynakların herhangi bir beklenmeyen modifikasyon olmadan dağıtıldığını garanti altına alma fırsatı sunan bir metottur.

CDN hacklendiğinde bunu kullanan web sitesinin etkilenmemesi için source taginin içine yazılan integrity tagi ile sitenin güvene altına alınması sağlanmaktadır.
`````
## Crossorigin nedir?
````
CORS (Kaynaklar Arası Veri Paylaşımı), web uygulamalarının kendi domain adresi dışındaki domain adreslerinden web tarayıcısı aracılığı ile gelen veri paylaşım ihtiyaçlarının karşılaması için oluşturulmuş bir mekanizmadır. CORS, kökler arası kaynak paylaşımı olarak geçer. Aynı browser üzerinde bir web uygulaması farklı bir origin’e herhangi bir istek gönderirse bu istek cross-origin HTTP isteği olarak oluşur.

Örnek vermek gerekirse, bir http://website-1.com websitesi üzerinde yer alan bir uygulamanın JavaScript kullanarak Ajax isteği ile http://website-2.com ‘a erişmeye çalışması bir cross origin isteğidir.
`````