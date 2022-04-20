const htmlContent = (title) => {
   return `
   <!DOCTYPE html>
   <html lang="pt-br">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="style.css">
   </head>
   <body>

      <!-- Corpo da página -->

      <script src="script.js" defer></script>
   </body>
   </html>`
}

module.exports = htmlContent