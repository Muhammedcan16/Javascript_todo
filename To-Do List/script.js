const giris= document.querySelector(".giris");//değerleri tanımlıyorum
const input= document.getElementById("input");//ıd tanımladığımız için
const button= document.getElementById("button");
const icerik= document.querySelector(".icerik");


var sırala = 0; // listede sıralama olsun istiyorum
button.addEventListener("click",git);//tıklandığı zaman git isimli function çalışacak ve ekleme yapacak
 input.addEventListener("keyup",function(e){ 
if (e.keyCode == 13){//enter ın kodu 13 internetten baktım keycode.info
    git();
}
});


function git(){
    if(input.value!=""){ //sorun şu boş iken de ekleme yapıyor o yüzden if ile bu durumlarda ekleme yapmamasını yazıyorum

 sırala++;//içi boş değilse 1 1 arttır ve değerin başına yaz 
  var paragraf = document.createElement("p"); 
  var deleteButton = document.createElement("div");//listeden silmek için buton
  var finishButton = document.createElement("div");
  
  finishButton.classList.add("finishButton");
  finishButton.innerText = "Tamamlandı";//butonun içine sil yazdım

  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "SİL";//butonun içine sil yazdım

  paragraf.innerText = sırala+"-" + input.value; //inputun içine girilen değeri paragrafa aktar 
  icerik.appendChild(paragraf);//html de tanımladığım icerik div ine ekleyecek 
  paragraf.appendChild(deleteButton);//paragraf a ekliyoruz çünkü listede yazdığımız metnin yanında çıkmasını istiyoruz
  paragraf.appendChild(finishButton); 
  input.value = "";//bi girdi yazıp ekle denince yazılan değer hala orada kalıyor içini boşaltmasını yazdım

deleteButton.addEventListener("click",function(){ //tıklayınca function çalıştır
    sırala--;  //yazdığımızda sırala hala artıyordu onu azalttım
icerik.removeChild(paragraf);//içine eklediğimiz metni (çocuğu) kaldır

});

finishButton.addEventListener("click",function(){ 
paragraf.classList.toggle("deneme");//deneme class ı paragrafın üstünde tanımlıysa onu kaldırdeğilse paragrafın içine atıyor
});

}
}