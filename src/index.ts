import { Hono } from "hono";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

app.get("/hello", (c) => {
  return c.json({
    message: `Hello!`,
  });
});

export default app;
