// 1000 elemanlı rasgele bir dizi oluşturuyor
let dizi = [];
for (let i = 0; i < 1000; i++) {
  dizi.push(Math.floor(Math.random() * 1000));
}

// Quick sort 
function quickSort(dizi) {
  if (dizi.length <= 1) {
    return dizi;
  }

  const pivot = dizi[Math.floor(Math.random() * dizi.length)];
  const sol = [];
  const sağ = [];

  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < pivot) {
      sol.push(dizi[i]);
    } else if (dizi[i] > pivot) {
      sağ.push(dizi[i]);
    }
  }

  return [...quickSort(sol), pivot, ...quickSort(sağ)];
}

dizi = quickSort(dizi);
console.log(dizi);