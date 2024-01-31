import Link from "next/link";
import React from "react";

export default function Links() {
  return (
    <div className="flex justify-between mt-4 gap-x-36">
      <Link href="/">Go to Home</Link>

      <Link href="/page-1">Go to Page 1</Link>

      <Link href="/page-2">Go to Page 2</Link>

      <Link href="/page-3">Go to Page 3</Link>
    </div>
  );
}
