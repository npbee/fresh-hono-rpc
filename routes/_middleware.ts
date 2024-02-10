import { Handler } from "$fresh/server.ts";

export const handler: Array<Handler> = [
  loggingMiddleware(),
];

function loggingMiddleware(): Handler {
  return (req, ctx) => {
    if (ctx.destination !== "route") {
      return ctx.next();
    }
    console.log(`${req.method}  ${req.url}`);
    return ctx.next();
  };
}
