> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/http/middlewares/opa.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/http/middlewares/opa.md)

> **Traefik Hub Feature**
> This middleware is available exclusively in [Traefik Hub](https://traefik.io/traefik-hub/). Learn more about [Traefik Hub's advanced features](https://doc.traefik.io/traefik-hub/api-gateway/intro).
> Traefik Hub comes with an Open Policy Agent middleware that allows you to restrict access to your services. It also allows you to enrich request headers with data extracted from policies.
> The OPA middleware works as an [OPA agent](https://www.openpolicyagent.org/).

> **OPA Version**
> This middleware uses [OPA v1.x](https://www.openpolicyagent.org/) with Rego v0-compatible syntax.
> Policies written in Rego v0 style (e.g. `allow { ... }` without the `if` keyword) are fully supported.

## Configuration Example

**Allow requests with specific JWT claim**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: opa-allow-jwt-claim
  namespace: apps
spec:
  plugin:
    opa:
      policy: |
        package example.policies

        allow {
          [_, encoded] := split(input.headers.Authorization, " ")
          [header, payload, signature] = io.jwt.decode(encoded)
          payload["email"] == "bibi@example.com"
        }
      forwardHeaders:
        Group: data.package.grp
```

**Deny requests with JSON Accept Header**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: opa-deny-json
  namespace: apps
spec:
  plugin:
    opa:
      policy: |
        package example.policies

        default allow = false

        json_content {
          input.headers["Accept"] == "application/json"
        }

        allow {
          not json_content
        }
      allow: data.example.policies.allow
```

## Configuration Options

| Field                                           | Description                                                                                                                           | Default | Required                                            |
| :---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------- |
| <a id="opt-policy"></a>`policy`                 | Path or the content of a [policy file](https://www.openpolicyagent.org/docs/v0.66.0/kubernetes-primer/#writing-policies).             | ""      | No (one of `policy` or `bundlePath` must be set)    |
| <a id="opt-bundlePath"></a>`bundlePath`         | The `bundlePath` option should contain the path to an OPA [bundle](https://www.openpolicyagent.org/docs/v0.66.0/management-bundles/). | ""      | No (one of `policy` or `bundlePath` must be set)    |
| <a id="opt-allow"></a>`allow`                   | The `allow` option sets the expression to evaluate that determines if the request should be authorized.                               | ""      | No (one of `allow` or `forwardHeaders` must be set) |
| <a id="opt-forwardHeaders"></a>`forwardHeaders` | The `forwardHeaders` option sets the HTTP headers to add to requests and populates them with the result of the given expression.      | {}      | No (one of `allow` or `forwardHeaders` must be set) |
