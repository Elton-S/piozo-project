import "./globals.css";

export const metadata = {
  title: "Piozo Project",
  description: "This is a groupwork",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
