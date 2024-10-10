// app/layout.js
"use client";  // Add this line

import './globals.css';  // Import global CSS
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apolloClient';  // Import your Apollo client

export default function RootLayout({ children }) {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
