> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/security/content-length.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/security/content-length.md)

Traefik acts as a streaming proxy. By default, it checks each chunk of data against the `Content-Length` header as it passes it on to the backend or client.
This live check blocks truncated or over‑long streams without holding the entire message.

If you need Traefik to read and verify the full body before any data moves on, add the [buffering middleware](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/buffering):

```yaml
http:
  middlewares:
    buffer-and-validate:
      buffering: {}
```

With buffering enabled, Traefik will:

- Read the entire request or response into memory.
- Compare the actual byte count to the `Content-Length` header.
- Reject the message if the counts do not match.

> **Warning**
> Buffering adds overhead. Every request and response is held in full before forwarding, which can increase memory use and latency.
> Use it when strict content validation is critical to your security posture.
