> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/redirectscheme.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/redirectscheme.md)

The `RedirectScheme` middleware redirects the request if the request scheme is different from the configured scheme.

> **When behind another reverse-proxy**
> When there is at least one other reverse-proxy between the client and Traefik,
> the other reverse-proxy (i.e. the last hop) needs to be a [trusted](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints#configuration-options) one.
>
> Otherwise, Traefik would clean up the `X-Forwarded` headers coming from this last hop,
> and as the RedirectScheme middleware relies on them to determine the scheme used,
> it would not function as intended.

## Configuration Examples

**Structured (YAML)**

```yaml
# Redirect to https
http:
  middlewares:
    test-redirectscheme:
      redirectScheme:
        scheme: https
        permanent: true
```

**Structured (TOML)**

```toml
# Redirect to https
[http.middlewares]
  [http.middlewares.test-redirectscheme.redirectScheme]
    scheme = "https"
    permanent = true
```

**Labels**

```yaml
# Redirect to https
labels:
  - "traefik.http.middlewares.test-redirectscheme.redirectscheme.scheme=https"
  - "traefik.http.middlewares.test-redirectscheme.redirectscheme.permanent=true"
```

**Tags**

```json
// Redirect to https
{
  // ...
  "Tags": [
    "traefik.http.middlewares.test-redirectscheme.redirectscheme.scheme=https",
    "traefik.http.middlewares.test-redirectscheme.redirectscheme.permanent=true"
  ]
}

```

**Kubernetes**

```yaml
# Redirect to https
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-redirectscheme
spec:
  redirectScheme:
    scheme: https
    permanent: true
```

## Configuration Options

| Field                                 | Description                                                      | Default | Required |
| :------------------------------------ | ---------------------------------------------------------------- | :------ | :------- |
| <a id="opt-scheme"></a>`scheme`       | Scheme of the new URL.                                           | ""      | Yes      |
| <a id="opt-permanent"></a>`permanent` | Enable a permanent redirection.                                  | false   | No       |
| <a id="opt-port"></a>`port`           | Port of the new URL.<br />Set a string, **not** a numeric value. | ""      | No       |
