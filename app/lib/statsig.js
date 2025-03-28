import { StatsigProvider } from '@statsig/react-bindings';
import { StatsigSessionReplay } from '@statsig/session-replay';
import { StatsigWebAnalytics } from '@statsig/web-analytics';

const STATSIG_SDK_KEY = process.env.NEXT_PUBLIC_STATSIG_SDK_KEY;

export function initializeStatsig() {
  if (typeof window !== 'undefined') {
    StatsigWebAnalytics.initialize(STATSIG_SDK_KEY);
    StatsigSessionReplay.initialize();
  }
}

export function StatsigWrapper({ children, user }) {
  return (
    <StatsigProvider
      sdkKey={STATSIG_SDK_KEY}
      user={user || { userID: 'anonymous' }}
      initializeValues={initializeStatsig}
    >
      {children}
    </StatsigProvider>
  );
}