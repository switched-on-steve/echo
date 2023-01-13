const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html')
  let response = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      /* Add some basic styling */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      pre {
        background-color: #f2f2f2;
        padding: 1em;
        overflow-x: auto;
      }
    </style>
  </head>
  <body>
    <div>
      <h3>Request Information</h3>
      <ul>
        <li>Path: ${req.path}</li>
        <li>Query String: ${JSON.stringify(req.query)}</li>
        <li>Headers: <pre>${JSON.stringify(req.headers, null, 2)}</pre></li>
      </ul>
    </div>
  </body>
  </html>
  `
  res.send(response)
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
