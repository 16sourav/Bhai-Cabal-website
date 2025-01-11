import { http } from 'viem';
import { polygon } from 'viem/chains';
import { createConfig } from 'wagmi';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [polygon],
  connectors: [injected()],
  transports: {
    [polygon.id]: http(),
  },
});