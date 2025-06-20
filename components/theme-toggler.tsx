"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SelectTheme({ text }: { text?: boolean }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <>
      {text === false ? (
        <div
          className={`flex items-center gap-2 rounded-lg p-3 text-center transition-all duration-300 hover:bg-blue-600/5 hover:text-blue-500 relative cursor-pointer`}
          onClick={toggleTheme}
        >
          <Sun className="size-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute size-6 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
      ) : (
        <div
          className={`flex items-center gap-2 rounded-lg text-center transition-all duration-300 hover:bg-blue-600/5 hover:text-blue-500 relative cursor-pointer`}
          onClick={toggleTheme}
        >
          <Moon className="size-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Sun className="absolute size-4 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="text-base">
            {resolvedTheme === "light" ? "Dark" : "Light"} Mode
          </span>
        </div>
      )}
    </>
  );
}