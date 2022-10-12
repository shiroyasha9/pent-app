import { createTRPCReact } from "@trpc/react";
import type { AppRouter } from "web/src/server/trpc/router";

export const trpc = createTRPCReact<AppRouter>();
