// app/layout.tsx

import MyStatsig from "./statsig";

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>
        <MyStatsig>{children}</MyStatsig>
      </body>
    </html>
  );
}
