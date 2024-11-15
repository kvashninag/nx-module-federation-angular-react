import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop',

  exposes: {
    './Module': './src/remote-entry.tsx',
  },
};

export default config;
