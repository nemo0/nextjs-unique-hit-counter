"use client";

import React, { useEffect, useState } from "react";
import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";
import { usePathname } from "next/navigation";

export default function Hit() {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      const fingerprint = await getCurrentBrowserFingerPrint();

      if (fingerprint) {
        await fetch("/api/hit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: window.location.href,
            fingerprint,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      const res = await fetch(`/api/hit?url=${window.location.href}`);

      const { count } = await res.json();

      setCount(count);
    })();
  }, [pathname]);

  return (
    <div className="fixed m-auto bg-black text-white p-2 bottom-0 left-1/2  -translate-x-1/2 ">
      Total Unique Hits: {count}
    </div>
  );
}
