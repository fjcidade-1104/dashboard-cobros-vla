import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Dashboard de Cobros — VLA Academy",
  description: "Bienestar Estudiantil · VLA Academy",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body style={{ margin: 0, padding: 0 }}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
