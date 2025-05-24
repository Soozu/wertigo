// Configuration for API endpoints
const CONFIG = {
  // In production (Vercel), use your local IP or ngrok URL
  // In development, use localhost
  API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:5000/api'
    : 'http://YOUR_LOCAL_IP:5000/api', // Replace YOUR_LOCAL_IP with your actual local IP
  
  // Alternative: Use ngrok for external access (recommended)
  // API_BASE_URL: 'https://your-ngrok-url.ngrok.io/api',
  
  // Map manager settings
  DEFAULT_COORDINATES: {
    lat: 14.5995,
    lng: 120.9842 // Manila, Philippines
  },
  
  // Other app settings
  DEFAULT_ZOOM: 10,
  MAX_DESTINATIONS: 20,
  REQUEST_TIMEOUT: 30000
};

// Helper function to get full API URL
function getApiUrl(endpoint) {
  return `${CONFIG.API_BASE_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, getApiUrl };
}

window.CONFIG = CONFIG;
window.getApiUrl = getApiUrl; 