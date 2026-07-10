import "./globals.css";

export const metadata = {
  title: "ConfidentBuy",
  description: "Know the signal before you subscribe."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
