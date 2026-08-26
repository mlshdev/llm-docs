> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/addprefix.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/addprefix.md)

The `addPrefix` middleware updates the path of a request before forwarding it.

## Configuration Examples

**Structured (YAML)**

```yaml
# Prefixing with /foo
http:
  middlewares:
    add-foo:
      addPrefix:
        prefix: "/foo"
```

**Structured (TOML)**

```toml
# Prefixing with /foo
[http.middlewares]
  [http.middlewares.add-foo.addPrefix]
    prefix = "/foo"
```

**Labels**

```yaml
# Prefixing with /foo
labels:
  - "traefik.http.middlewares.add-foo.addprefix.prefix=/foo"
```

**Tags**

```json
// Prefixing with /foo
{
  // ...
  "Tags": [
    "traefik.http.middlewares.add-foo.addprefix.prefix=/foo"
  ]
}
```

**Kubernetes**

```yaml
# Prefixing with /foo
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: add-foo
spec:
  addPrefix:
    prefix: /foo
```

## Configuration Options

| Field                           | Description                                                                                              | Default | Required |
| :------------------------------ | :------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-prefix"></a>`prefix` | String to add **before** the current path in the requested URL. It should include a leading slash (`/`). | ""      | Yes      |
