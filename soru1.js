// 1000 elemanlı rasgele bir dizi oluşturuyor
let dizi = [];
for (let i = 0; i < 1000; i++) {
  dizi.push(Math.floor(Math.random() * 1000));
}

// Binary Search algoritması sıralı dizilerde çalıştığı için küçükten büyüğe sıralıyor
dizi.sort((a, b) => a - b);

// Binary search fonksiyonu
function binarySearch(dizi, aranan) {
  let sol = 0;
  let sağ = dizi.length - 1;

  while (sol <= sağ) {
    let ortanca = Math.floor((sol + sağ) / 2);
    if (dizi[ortanca] === aranan) {
      return ortanca;
    } else if (dizi[ortanca] < aranan) {
      sol = ortanca + 1;
    } else {
      sağ = ortanca - 1;
    }
  }

  return -1; // sayı bulunamazsa -1 döndürüyor
}

// Arama işlemi burda gerçekleştiriliyor
const aranan = 107;
const sonuc = binarySearch(dizi, aranan);

// Sonucu ekrana yazdırıyor
if (sonuc === -1) {
  console.log(`${aranan} sayısı dizide bulunamadı.`);
} else {
  console.log(`${aranan} sayısı ${sonuc}. indekste bulundu.`);
}
