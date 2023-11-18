import { cn } from "@/lib";
import React, { ReactNode } from "react";

export type MaxWithWrapperProps = {
  className?: string;
  children: ReactNode;
};

function MaxWithWrapper({ className, children }: MaxWithWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWithWrapper;
