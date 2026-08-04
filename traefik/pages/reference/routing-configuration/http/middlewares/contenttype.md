> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/middlewares/contenttype.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/middlewares/contenttype.md)

The `contentType` middleware sets the `Content-Type` header value to the media type detected from the response content,
when it is not set by the backend.

> **Info**
> The `contentType` middleware only applies when Traefik detects the MIME type. If any middleware (such as Headers or Compress) sets the `contentType` header at any point in the chain, the `contentType` middleware has no effect.

## Configuration Examples

**Structured (YAML)**

```yaml
# Enable auto-detection
http:
  middlewares:
    autodetect:
      contentType: {}
```

**Structured (TOML)**

```toml
# Enable auto-detection
[http.middlewares]
  [http.middlewares.autodetect.contentType]
```

**Labels**

```yaml
# Enable auto-detection
labels:
  - "traefik.http.middlewares.autodetect.contenttype=true"
```

**Tags**

```json
// Enable auto-detection
{
  // ...
  "Tags": [
    "traefik.http.middlewares.autodetect.contenttype=true"
  ]
}
```

**Kubernetes**

```yaml
# Enable auto-detection
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: autodetect
spec:
  contentType: {}
```
