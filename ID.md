<div align="center">
<img src="https://telegra.ph/file/fbe3160f0ad0e14abeeeb.jpg" width="150" height="150" border="0" alt="PFP">

# Kaguya PublicBot - MD
### Use at your own risk!

## [![JavaScript](https://img.shields.io/badge/JavaScript-d6cc0f?style=for-the-badge&logo=javascript&logoColor=white)](https://javascript.com) [![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![discord.js](https://img.shields.io/badge/discord.js-0026a3?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org)

> Build with Baileys and discord.js ( as a command handler ) <br />

</div><br />
<br />

## Highlights

- [x] Mendukung WhatsApp Multi Perangkat
- [x] Banyak Fitur

## Instalasi
Isi semua yang dibutuhkan di file `config.json`.

### Dibutuhkan
1. [nodejs](https://nodejs.org/en/download) 16x/17x
2. [ffmpeg](https://ffmpeg.org)
3. [libWebP](hhtps://developers.google.com/speed/webp/download)

### Instalasi Ffmpeg
- Untuk pengguna Windows, kamu bisa lihat tutorial disini [WikiHow](https://www.wikihow.com/Install-Ffmpeg-on-Windows)<br />
- Untuk pengguna Distribusi Linux, kamu bisa pakai manager paket kamu sendiri. Contohnya;
```bash
# apt (Ubuntu)
apt install ffmpeg -y

# pacman (Arch Linux)
pacman -S ffmpeg
```

### Instalasi libWebP
- Untuk pengguna Windows,
1. Unduh libWebP untuk Windows dari [sini](https://developers.google.com/speed/webp/download)
2. Ekstrak ke C:\
3. Ganti nama folder yang diekstrak ke `libwebp`
4. Buka PowerShell dan jalankan perintah berikut;
```cmd
setx /m PATH "C:\libwebp\bin;%PATH%"
```
> Bila sukses terinstal dengan baik, silahkan check dengan perintah berikut di Command Prompt
```cmd
webpmux -version
```

- Untuk pengguna Distribusi Linux, kamu bisa pakai manager paket kamu. Contohnya;
```bash
# apt (Ubuntu)
apt install libwebp-dev -y

# pacman (Arch Linux)
pacman -S libwebp
```

### Menkloning Repo ini
```bash
# kloning dimulai
git clone https://github.com/FaizBastomi/wbot.git --branch "multi-device"

# ubah posisi direktori kamu
cd wbot

# install semua dependensi
npm install
# or
yarn install

# bila depedensi @adiwajshing/baileys-md tidak terkompilasi secara otomatis
cd node_modules/@adiwajshing/baileys-md
npm install -g typescript # jalankan sebagai root atau admin (Windows)
npm run build:tsc

# jalankan program dan scan QR
node main.js
```