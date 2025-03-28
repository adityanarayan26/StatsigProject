'use client';

import { useGate } from '@statsig/react-bindings';

export default function FeatureButton() {
  const { value: showButton } = useGate('show_new_button');
  
  return showButton ? (
    <button className="gradient-button">
      New Feature Enabled!
    </button>
  ) : null;
}