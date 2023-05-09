import { TravelTimeClient } from 'traveltime-api';

const api = new TravelTimeClient({
  apiKey: process.env.APP_KEY || '',
  applicationId: process.env.APP_ID || '',
});

export default api;