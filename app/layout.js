// app/layout.js
import '../globals.css';  // Import global CSS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Todo App</title>
      </head>
      <body>
        <main>
          {children}  {/* Render the specific page's content */}
        </main>
      </body>
    </html>
  );
}
