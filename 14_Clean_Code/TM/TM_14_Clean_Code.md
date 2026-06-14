# Tugas Mandiri 14: Clean Code

Nama : Rafael Putra Septava  
NIM  : 103122400015  
Kelas: SE0801  

## Tugas

Dari dua kode di bawah ini, mana yang kamu ingin cari masalahnya dan perbaiki di tengah-tengah malam, katakanlah jam 1 malam? Mengapa?

```javascript
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user)
      }
    }
  }
  return null
}
```

```javascript
function processUser(user) {
  if (!isValidCandidate(user)) return null;
  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}
```

## Program/Kode

tersedia di [index.js](https://github.com/RafaelSeptava/KPL_RafaelPutraSeptava_103122400015_SE0801/blob/main/14_Clean_Code/TM/index.js)

## Output

-

## Deskripsi

Kode program yang akan saya cari masalahnya dan memperbaikinya adalah kode program pertama, karena banyaknya nested if atau if bersarang yang terlalu dalam. Hal tersebut membuat kode program sulit dibaca, menambah beban developer untuk berpikir logic program, dan sulit untuk dipelihara.  

Cara memperbaikinya dengan menggunakan guard clause, yang dimana memeriksa kondisi yang akan menyebabkan proses gagal di awal fungsi akan langsung menghentikan eksekusi program menggunakan return.
Contohnya:  
-jika user tidak ada, maka akan mengembalikan null.  
-jika user tidak aktif, maka akan mengembalikan null.  
-jika user tidak memiliki izin, maka akan mengembalikan null.  
-jika semua syarat terpenuhi maka akan menjalankan doSomething(user)

Hal ini membuat kode lebih mudah dibaca dan dipelihara.
