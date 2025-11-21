import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter', // Tu ID puede variar
  appName: 'Ej1_Tema4_Luismi',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  // AÑADE ESTO:
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;