import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Who Voted Me Out?',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'Enter Your Twitter Handle',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'CTG-Backstabbers',
  description: 'CTG',
  openGraph: {
    title: 'ctg-backstabbers',
    description: 'CTG',
    images: [`${NEXT_PUBLIC_URL}/eliminated.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>ctg-backstabber</h1>
    </>
  );
}
