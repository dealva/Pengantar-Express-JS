##############################################################################
Untuk menggunakannya gunakan perintah berikut di 3 terminal terpisah, pastikan dockernya berjalan

npm run dev --> menjalankan app.js menggunakan nodemon

npm run worker --> menjalankan emailWorker.js sebagai pengirim email

npm run redis --> menjalankan redis sebagai message broker untuk bull queue (di running jika belum ada redis di dockernya) 
npm run redis:start --> untuk menjalankan redis jika sudah ada redis namun belum dijalankan (tidak perlu di running saat pertamakali membangun redis, karena statusnya sudah jalan)
npm run redis:status --> melihat status redis di dockernya
###############################################################################

untuk melihat hasil app.js ada di http://localhost:3000

untuk melakukan POST, bisa menggunakan POSTMAN

untuk melihat email yang dikirim, akan muncul diterminal worker berupa link:
https://ethereal.email/message/...

jadi kita pakai fake receiver dari ethereal