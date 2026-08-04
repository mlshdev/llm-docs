> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/middlewares/encodedcharacters.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/middlewares/encodedcharacters.md)

The EncodedCharacters middleware controls which ambiguous reserved encoded characters are allowed in the request path.

When you use this middleware, by default, potentially dangerous encoded characters are rejected for security enhancement.

## Configuration Examples

**Docker & Swarm**

```yaml
# Allow encoded slash in the request path.
labels:
  - "traefik.http.middlewares.test-encodedchars.encodedcharacters.allowencodedslash=true"
```

**Kubernetes**

```yaml
# Allow encoded slash in the request path.
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-encodedchars
spec:
  encodedCharacters:
    allowEncodedSlash: true
```

**Consul Catalog**

```yaml
# Allow encoded slash in the request path.
- "traefik.http.middlewares.test-encodedchars.encodedcharacters.allowencodedslash=true"
```

**File (YAML)**

```yaml
# Allow encoded slash in the request path.
http:
  middlewares:
    test-encodedchars:
      encodedCharacters:
        allowEncodedSlash: true
```

**File (TOML)**

```toml
# Allow encoded slash in the request path.
[http.middlewares]
  [http.middlewares.test-encodedchars.encodedCharacters]
    allowEncodedSlash = true
```

## Configuration Options

When you are configuring these options, check if your backend is fully compliant with [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986).
This helps avoid split-view situation, where Traefik and your backend interpret the same URL differently.

| Field                                                               | Description                                                        | Default | Required |
| ------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- | -------- |
| <a id="opt-allowEncodedSlash"></a>`allowEncodedSlash`               | Allow encoded slash (`%2F` and `%2f`) in the request path.         | `false` | No       |
| <a id="opt-allowEncodedBackSlash"></a>`allowEncodedBackSlash`       | Allow encoded backslash (`%5C` and `%5c`) in the request path.     | `false` | No       |
| <a id="opt-allowEncodedSemicolon"></a>`allowEncodedSemicolon`       | Allow encoded semicolon (`%3B` and `%3b`) in the request path.     | `false` | No       |
| <a id="opt-allowEncodedPercent"></a>`allowEncodedPercent`           | Allow encoded percent (`%25`) in the request path.                 | `false` | No       |
| <a id="opt-allowEncodedQuestionMark"></a>`allowEncodedQuestionMark` | Allow encoded question mark (`%3F` and `%3f`) in the request path. | `false` | No       |
| <a id="opt-allowEncodedHash"></a>`allowEncodedHash`                 | Allow encoded hash (`%23`) in the request path.                    | `false` | No       |
