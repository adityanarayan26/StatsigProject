// app/my-statsig.tsx

"use client";

import React from "react";
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';


export default function MyStatsig({ children }) {
  const { client } = useClientAsyncInit(
    "client-zL1PtkkKHkDcjmstw69WPKpodQga7YkHbUKgQJN6XNK",
    { userID: 'a-user' }, 
    { plugins: [ new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin() ] },
  );

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      {children}
    </StatsigProvider>
  );
}
