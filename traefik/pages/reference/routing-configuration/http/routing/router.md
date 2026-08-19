> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/http/routing/router.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/http/routing/router.md)

## HTTP Router

An HTTP router is in charge of connecting incoming requests to the services that can handle them. Routers analyze incoming requests based on rules, and when a match is found, forward the request through any configured middlewares to the appropriate service.

## Configuration Example

**Structured (YAML)**

```yaml
http:
  routers:
    my-router:
      entryPoints:
        - "web"
        - "websecure"
      rule: "Host(`example.com`) && Path(`/api`)"
      priority: 10
      middlewares:
        - "auth"
        - "ratelimit"
      tls:
        certResolver: "letsencrypt"
        options: "modern"
        domains:
          - main: "example.com"
            sans:
              - "www.example.com"
      observability:
        metrics: true
        accessLogs: true
        tracing: true
      parentRefs:
        - "parent-router-1"
        - "parent-router-2"
      service: my-service
```

**Structured (TOML)**

```toml
[http.routers]
  [http.routers.my-router]
    entryPoints = ["web", "websecure"]
    rule = "Host(`example.com`) && Path(`/api`)"
    priority = 10
    middlewares = ["auth", "ratelimit"]
    service = "my-service"
    parentRefs = ["parent-router-1", "parent-router-2"]

    [http.routers.my-router.tls]
      certResolver = "letsencrypt"
      options = "modern"

      [[http.routers.my-router.tls.domains]]
        main = "example.com"
        sans = ["www.example.com"]

    [http.routers.my-router.observability]
      metrics = true
      accessLogs = true
      tracing = true
```

**Labels**

```yaml
labels:
  - "traefik.http.routers.my-router.entrypoints=web,websecure"
  - "traefik.http.routers.my-router.rule=Host(`example.com`) && Path(`/api`)"
  - "traefik.http.routers.my-router.priority=10"
  - "traefik.http.routers.my-router.middlewares=auth,ratelimit"
  - "traefik.http.routers.my-router.service=my-service"
  - "traefik.http.routers.my-router.tls.certresolver=letsencrypt"
  - "traefik.http.routers.my-router.tls.options=modern"
  - "traefik.http.routers.my-router.tls.domains[0].main=example.com"
  - "traefik.http.routers.my-router.tls.domains[0].sans=www.example.com"
  - "traefik.http.routers.my-router.observability.metrics=true"
  - "traefik.http.routers.my-router.observability.accessLogs=true"
  - "traefik.http.routers.my-router.observability.tracing=true"
```

**Tags**

```json
{
  "Tags": [
    "traefik.http.routers.my-router.entrypoints=web,websecure",
    "traefik.http.routers.my-router.rule=Host(`example.com`) && Path(`/api`)",
    "traefik.http.routers.my-router.priority=10",
    "traefik.http.routers.my-router.middlewares=auth,ratelimit",
    "traefik.http.routers.my-router.service=my-service",
    "traefik.http.routers.my-router.tls.certresolver=letsencrypt",
    "traefik.http.routers.my-router.tls.options=modern",
    "traefik.http.routers.my-router.tls.domains[0].main=example.com",
    "traefik.http.routers.my-router.tls.domains[0].sans=www.example.com",
    "traefik.http.routers.my-router.observability.metrics=true",
    "traefik.http.routers.my-router.observability.accessLogs=true",
    "traefik.http.routers.my-router.observability.tracing=true",
  ]
}
```

## Configuration Options

| Field                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Default                     | Required |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -------- |
| <a id="opt-entryPoints"></a>`entryPoints`                                   | The list of entry points to which the router is attached. If not specified, HTTP routers are attached to all entry points.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | All entry points            | No       |
| <a id="opt-rule"></a>`rule`                                                 | Rules are a set of matchers configured with values, that determine if a particular request matches specific criteria. If the rule is verified, the router becomes active, calls middlewares, and then forwards the request to the service. See [Rules & Priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority) for details.                                                                                                                                                                                                                                                                               |                             | Yes      |
| <a id="opt-priority"></a>`priority`                                         | To avoid path overlap, routes are sorted, by default, in descending order using rules length. The priority is directly equal to the length of the rule, and so the longest length has the highest priority. A value of `0` for the priority is ignored. Negative values are supported. See [Rules & Priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority) for details.                                                                                                                                                                                                                                   | Rule length                 | No       |
| <a id="opt-middlewares"></a>`middlewares`                                   | The list of middlewares that are applied to the router. Middlewares are applied in the order they are declared. See [Middlewares overview](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview) for available middlewares.                                                                                                                                                                                                                                                                                                                                                                                              |                             | No       |
| <a id="opt-tls"></a>`tls`                                                   | TLS configuration for the router. When specified, the router will only handle HTTPS requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                             | No       |
| <a id="opt-tls-certResolver"></a>`tls.certResolver`                         | The name of the certificate resolver to use for automatic certificate generation. See [Certificate Resolver](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/overview#certificate-resolver) for details.                                                                                                                                                                                                                                                                                                                                                                                                                             |                             | No       |
| <a id="opt-tls-options"></a>`tls.options`                                   | The name of the TLS options to use for configuring TLS parameters (cipher suites, min/max TLS version, client authentication, etc.). They are mapped to the host names of the router rule, and not to the router itself, so all the routers serving the same host name on the same entry point must reference the same TLS options. See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for detailed configuration, and [Conflicting TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options#conflicting-tls-options) for the consequences of not doing so. | `default`                   | No       |
| <a id="opt-tls-domains"></a>`tls.domains`                                   | List of domains and Subject Alternative Names (SANs) for explicit certificate domain specification. When using ACME certificate resolvers, domains are automatically extracted from router rules, making this option optional.                                                                                                                                                                                                                                                                                                                                                                                                                                    |                             | No       |
| <a id="opt-observability"></a>`observability`                               | Observability configuration for the router. Allows fine-grained control over access logs, metrics, and tracing per router. See [Observability](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/observability) for details.                                                                                                                                                                                                                                                                                                                                                                                                       | Inherited from entry points | No       |
| <a id="opt-observability-traceVerbosity"></a>`observability.traceVerbosity` | Defines the verbosity level of tracing for this router. Accepted values are `minimal` and `detailed`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `minimal`                   | No       |
| <a id="opt-parentRefs"></a>`parentRefs`                                     | References to parent router names for multi-layer routing. When specified, this router becomes a child router that processes requests after parent routers have applied their middlewares. See [Multi-Layer Routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/multi-layer-routing) for details.                                                                                                                                                                                                                                                                                                                           |                             | No       |
| <a id="opt-service"></a>`service`                                           | The name of the service that will handle the matched requests. Services can be load balancer services, weighted round robin, mirroring, or failover services. See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for details.                                                                                                                                                                                                                                                                                                                                                                         |                             | Yes      |

## Router Naming

- The character `@` is not authorized in the router name
- In provider-specific configurations (Docker, Kubernetes), router names are often auto-generated based on service names and rules
