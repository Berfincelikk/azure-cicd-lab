const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Ana sayfa ziyaret edildi.");

  res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Azure App Service Lab</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f6ff;
          text-align: center;
          padding-top: 100px;
          margin: 0;
        }
        .card {
          background: white;
          width: 70%;
          max-width: 700px;
          margin: auto;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        h1 {
          color: #1f4aa8;
        }
        p {
          font-size: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Azure App Service CI/CD Lab</h1>
        <p><strong>Ad Soyad:</strong> Berfin Çelik</p>
        <p><strong>Öðrenci No:</strong> 2023XXXXXX</p>
        <p>Bu uygulama GitHub Actions ile otomatik daðýtýlmaktadýr.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Uygulama ${PORT} portunda çalýþýyor.`);
});
