##############################################################################
Untuk menggunakannya gunakan perintah berikut di 3 terminal terpisah

npm run dev --> menjalankan app.js menggunakan nodemon

npm run worker --> menjalankan emailWorker.js sebagai pengirim email

npm run redis --> menjalankan redis sebagai message broker untuk bull queue

###############################################################################

untuk melihat hasil app.js ada di http://localhost:3000

untuk melakukan POST, bisa menggunakan POSTMAN

untuk melihat email yang dikirim, akan muncul diterminal worker berupa link:
https://ethereal.email/message/...

jadi kita pakai fake receiver dari ethereal