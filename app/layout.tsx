import Link from "next/link";
import { PropsWithChildren } from "react";

import "./globals.css";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <title>Next 13 App</title>
      </head>
      <body>
        <div>
          <h1>Layout</h1>

          <nav>
            <ul>
              <li>
                <Link href="/dynamic/posts">Posts</Link>
              </li>
              <li>
                <Link href="/dynamic/careers">Careers</Link>
              </li>
              <li>
                <Link href="/dynamic/about">About</Link>
              </li>
            </ul>
          </nav>

          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
