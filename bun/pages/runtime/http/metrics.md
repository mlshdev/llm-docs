> Pinned source for Bun bun-v1.4.3: [docs/runtime/http/metrics.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/runtime/http/metrics.mdx)
> Canonical documentation: https://bun.com/docs/runtime/http/metrics

# Metrics

### `server.pendingRequests` and `server.pendingWebSockets`

Monitor server activity with built-in counters:

```ts
const server = Bun.serve({
  fetch(req, server) {
    return new Response(
      `Active requests: ${server.pendingRequests}\n` + `Active WebSockets: ${server.pendingWebSockets}`,
    );
  },
});
```

### `server.subscriberCount(topic)`

Get the number of subscribers for a WebSocket topic:

```ts
const server = Bun.serve({
  fetch(req, server) {
    const chatUsers = server.subscriberCount("chat");
    return new Response(`${chatUsers} users in chat`);
  },
  websocket: {
    message(ws) {
      ws.subscribe("chat");
    },
  },
});
```
