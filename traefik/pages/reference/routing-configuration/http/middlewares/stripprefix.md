> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/stripprefix.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/stripprefix.md)

The `stripPrefix` middleware strips the matching path prefix and stores it in an `X-Forwarded-Prefix` header.

> **Tip**
> Use a `StripPrefix` middleware if your backend listens on the root path (`/`) but should be exposed on a specific prefix.

## Configuration Examples

**Structured (YAML)**

```yaml
# Strip prefix /foobar and /fiibar
http:
  middlewares:
    test-stripprefix:
      stripPrefix:
        prefixes:
          - "/foobar"
          - "/fiibar"
```

**Structured (TOML)**

```toml
# Strip prefix /foobar and /fiibar
[http.middlewares]
  [http.middlewares.test-stripprefix.stripPrefix]
    prefixes = ["/foobar", "/fiibar"]
```

**Labels**

```yaml
# Strip prefix /foobar and /fiibar
labels:
  - "traefik.http.middlewares.test-stripprefix.stripprefix.prefixes=/foobar,/fiibar"
```

**Tags**

```json
// Strip prefix /foobar and /fiibar
{
  "Tags" : [
    "traefik.http.middlewares.test-stripprefix.stripprefix.prefixes=/foobar,/fiibar"
  ]
}
```

**Kubernetes**

```yaml
# Strip prefix /foobar and /fiibar
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-stripprefix
spec:
  stripPrefix:
    prefixes:
      - /foobar
      - /fiibar
```

## Configuration Options

| Field                               | Description                                                                                                                                                                                              | Default | Required |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-prefixes"></a>`prefixes` | List of prefixes to strip from the request URL.<br />If your backend is serving assets (for example, images or JavaScript files), it can use the `X-Forwarded-Prefix` header to construct relative URLs. | \[]     | No       |
