> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/replacepath.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/replacepath.md)

The `replacePath` middleware will:

- Replace the actual path with the specified one.
- Store the original path in a `X-Replaced-Path` header

## Configuration Examples

**Structured (YAML)**

```yaml
# Replace the path with /foo
http:
  middlewares:
    test-replacepath:
      replacePath:
        path: "/foo"
```

**Structured (TOML)**

```toml
# Replace the path with /foo
[http.middlewares]
  [http.middlewares.test-replacepath.replacePath]
    path = "/foo"
```

**Labels**

```yaml
# Replace the path with /foo
labels:
  - "traefik.http.middlewares.test-replacepath.replacepath.path=/foo"
```

**Tags**

```json
// Replace the path with /foo
{
  // ...
  "Tags" : [
    "traefik.http.middlewares.test-replacepath.replacepath.path=/foo"
  ]
}
```

**Kubernetes**

```yaml
# Replace the path with /foo
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-replacepath
spec:
  replacePath:
    path: "/foo"
```

## Configuration Options

| Field                       | Description                                                                  |
| :-------------------------- | :--------------------------------------------------------------------------- |
| <a id="opt-path"></a>`path` | The `path` option defines the path to use as replacement in the request URL. |
