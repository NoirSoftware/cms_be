const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS for all requests
app.use(cors());

// Proxy configuration
const proxyOptions = {
  target: 'http://localhost:3000', // Replace with your backend URL
  changeOrigin: true, // Needed for virtual hosted sites
  onProxyRes: function (proxyRes, req, res) {
    // Add CORS headers
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    proxyRes.headers['Access-Control-Allow-Methods'] = '*';
    proxyRes.headers['Access-Control-Allow-Headers'] = '*';
  }
};

// Use the proxy
app.use('/', createProxyMiddleware(proxyOptions));

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});