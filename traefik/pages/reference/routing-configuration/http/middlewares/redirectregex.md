> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/middlewares/redirectregex.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/middlewares/redirectregex.md)

The `RedirectRegex` redirects a request using regex matching and replacement.

## Configuration Examples

**Structured (YAML)**

```yaml
# Redirect with domain replacement
http:
  middlewares:
    test-redirectregex:
      redirectRegex:
        regex: "^http://localhost/(.*)"
        replacement: "http://mydomain/${1}"
```

**Structured (TOML)**

```toml
# Redirect with domain replacement
[http.middlewares]
  [http.middlewares.test-redirectregex.redirectRegex]
    regex = "^http://localhost/(.*)"
    replacement = "http://mydomain/${1}"
```

**Labels**

```yaml
# Redirect with domain replacement
# Note: all dollar signs need to be doubled for escaping.
labels:
  - "traefik.http.middlewares.test-redirectregex.redirectregex.regex=^http://localhost/(.*)"
  - "traefik.http.middlewares.test-redirectregex.redirectregex.replacement=http://mydomain/$${1}"
```

**Tags**

```json
// Redirect with domain replacement
// Note: all dollar signs need to be doubled for escaping.
{
  // ...
  "Tags" : [
    "traefik.http.middlewares.test-redirectregex.redirectregex.regex=^http://localhost/(.*)"
    "traefik.http.middlewares.test-redirectregex.redirectregex.replacement=http://mydomain/$${1}"
  ]
}
```

**Kubernetes**

```yaml
# Redirect with domain replacement
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-redirectregex
spec:
  redirectRegex:
    regex: ^http://localhost/(.*)
    replacement: http://mydomain/${1}
```

## Configuration Options

| Field                                     | Description                                                                                                                                                                                                                      | Default | Required |
| :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-regex"></a>`regex`             | The `regex` option is the regular expression to match and capture elements from the request URL.                                                                                                                                 | ""      | Yes      |
| <a id="opt-permanent"></a>`permanent`     | Enable a permanent redirection.                                                                                                                                                                                                  | false   | No       |
| <a id="opt-replacement"></a>`replacement` | The `replacement` option defines how to modify the URL to have the new target URL..<br /> `$1x` is equivalent to `${1x}`, not `${1}x` (see [Regexp.Expand](https://golang.org/pkg/regexp/#Regexp.Expand)), so use `${1}` syntax. | ""      | No       |

### `regex`

The `regex` option is the regular expression to match and capture elements from the request URL.

> **Tip**
> Regular expressions and replacements can be tested using online tools such as [Go Playground](https://play.golang.org/p/mWU9p-wk2ru) or the [Regex101](https://regex101.com/r/58sIgx/2).
>
> When defining a regular expression within YAML, any escaped character needs to be escaped twice: `example\.com` needs to be written as `example\\.com`.

### `replacement`

The `replacement` option defines how to modify the URL to have the new target URL.

> **Warning**
> Care should be taken when defining replacement expand variables: `$1x` is equivalent to `${1x}`, not `${1}x` (see [Regexp.Expand](https://golang.org/pkg/regexp/#Regexp.Expand)), so use `${1}` syntax.
