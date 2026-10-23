// 1. Deklarasi variabel
const nama = "Apriani Batadi";
const nim = "05301425092";
let semester = 3;
const aktif = true;
const hobi = ["Membaca", "memasak", "mendengarkan musik"];
// 2. Output ke Console
console.log("Nama:", nama);
console.log("Tipe data semester:", typeof semester);
console.log("Tipe data aktif:", typeof aktif);
console.log("Hobi pertama:", hobi[0]);
// 3. Output ke halaman
document.getElementById("nama").textContent = nama;
document.getElementById("detail").innerHTML = `
NIM: ${nim}<br>
Semester: ${semester}<br>
aktif: ${aktif ? "true" : "Cuti"}<br>
Hobi: ${hobi.join(", ")}
`;
nama = "tes";