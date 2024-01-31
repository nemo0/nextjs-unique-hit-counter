import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <div className="flex justify-center items-center h-2/3">
        <h1 className="text-4xl font-bold">Page 1</h1>
      </div>
      <div className="flex justify-between mt-4 h-1/3">
        <Link href="/page-1">Go to Page 1</Link>

        <Link href="/page-2">Go to Page 2</Link>

        <Link href="/page-3">Go to Page 3</Link>
      </div>
    </div>
  );
}
