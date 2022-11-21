const data = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const cek = (cekData) => {
  const newData = cekData.filter(
    (item1, item2) => cekData.indexOf(item1) != item2
  );
  return newData;
};
console.log(cek(data));