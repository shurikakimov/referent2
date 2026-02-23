export const metadata = {
  title: "Next App",
  description: "Минимальное приложение на Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 24 }}>
        {children}
      </body>
    </html>
  );
}


