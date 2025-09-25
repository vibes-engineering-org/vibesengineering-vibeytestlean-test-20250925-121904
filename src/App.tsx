import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // important, never remove this sdk init
    sdk.actions.ready();
  }, []);

  const formattedCount = useMemo(() => count.toLocaleString("en-US"), [count]);

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 px-6 py-10 sm:px-8">
        <header className="w-full max-w-sm space-y-3 text-center">
          <h1 className="text-balance text-3xl font-semibold leading-tight xs:text-4xl">Tap Counter</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tap the button to grow the number as high as you like.
          </p>
        </header>
        <section className="w-full max-w-sm space-y-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800">
          <div
            className="rounded-3xl bg-slate-100 px-6 py-10 text-center shadow-inner dark:bg-slate-800"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Current count
            </span>
            <div
              className="mt-4 font-semibold tracking-tight text-slate-900 dark:text-slate-50"
              style={{ fontSize: "clamp(3.5rem, 12vw, 5rem)" }}
            >
              {formattedCount}
            </div>
          </div>
          <Button type="button" onClick={() => setCount((prev) => prev + 1)} className="w-full">
            Increase count
          </Button>
        </section>
      </div>
    </main>
  );
}

export default App;
