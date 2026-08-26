> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/stripprefixregex.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/stripprefixregex.md)

The `stripPrefixRegex` middleware strips the matching path prefix and stores it in an `X-Forwarded-Prefix` header.

> **Tip**
> Use a `stripPrefixRegex` middleware if your backend listens on the root path (`/`) but should be exposed on a specific prefix.

## Configuration Example

**Structured (YAML)**

```yaml
http:
  middlewares:
    test-stripprefixregex:
      stripPrefixRegex:
        regex:
          - "/foo/[a-z0-9]+/[0-9]+/"
```

**Structured (TOML)**

```toml
[http.middlewares]
  [http.middlewares.test-stripprefixregex.stripPrefixRegex]
    regex = ["/foo/[a-z0-9]+/[0-9]+/"]
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.test-stripprefixregex.stripprefixregex.regex=/foo/[a-z0-9]+/[0-9]+/"
```

**Tags**

```yaml
{
  //..
  "Tags" : [
    "traefik.http.middlewares.test-stripprefixregex.stripprefixregex.regex=/foo/[a-z0-9]+/[0-9]+/"
  ]
}
-
```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-stripprefixregex
spec:
  stripPrefixRegex:
    regex:
      - "/foo/[a-z0-9]+/[0-9]+/"
```

## Configuration Options

| Field                         | Description                                                                                                                                                                                             | Default | Required |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ | :------- |
| <a id="opt-regex"></a>`regex` | List of regular expressions to match the path prefix from the request URL.<br /> For instance, `/products` also matches `/products/shoes` and `/products/shirts`.<br />More information [here](#regex). |         | No       |

### regex

If your backend is serving assets (for example, images or JavaScript files), it can use the `X-Forwarded-Prefix` header to construct relative URLs.
Using the previous example, the backend should return `/products/shoes/image.png` (and not `/images.png`, which Traefik would likely not be able to associate with the same backend).

> **Tip**
> Regular expressions and replacements can be tested using online tools such as [Go Playground](https://play.golang.org/p/mWU9p-wk2ru) or the [Regex101](https://regex101.com/r/58sIgx/2).
>
> When defining a regular expression within YAML, any escaped character needs to be escaped twice: `example\.com` needs to be written as `example\\.com`.
