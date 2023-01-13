const http = require('http')
const PORT = process.env.PORT || 3030;

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/html')
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
        background-color: #E5E5E5;
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
        <li>Path: ${req.url}</li>
        <li>Query String: ${JSON.stringify(req.query)}</li>
        <li>Headers: <pre>${JSON.stringify(req.headers, null, 2)}</pre></li>
      </ul>
    </div>
  </body>
  </html>
  `
  res.end(response)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
