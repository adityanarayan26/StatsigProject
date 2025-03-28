import { StatsigWrapper } from './lib/statsig';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StatsigWrapper>
          {children}
        </StatsigWrapper>
      </body>
    </html>
  );
}