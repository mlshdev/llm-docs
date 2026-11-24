> Pinned source for Traefik Proxy v3.8.0: [docs/content/reference/routing-configuration/http/routing/router.md](https://github.com/traefik/traefik/blob/644b1f19cf031ec079cca10fad0c86e5ab7181b7/docs/content/reference/routing-configuration/http/routing/router.md)

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
      respondingTimeouts:
        readTimeout: "30s"
        writeTimeout: "30s"
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

    [http.routers.my-router.respondingTimeouts]
      readTimeout = "30s"
      writeTimeout = "30s"
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
  - "traefik.http.routers.my-router.respondingtimeouts.readtimeout=30s"
  - "traefik.http.routers.my-router.respondingtimeouts.writetimeout=30s"
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
    "traefik.http.routers.my-router.respondingtimeouts.readtimeout=30s",
    "traefik.http.routers.my-router.respondingtimeouts.writetimeout=30s",
  ]
}
```

## Configuration Options

| Field                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default                     | Required |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -------- |
| <a id="opt-entryPoints"></a>`entryPoints`                                         | The list of entry points to which the router is attached. If not specified, HTTP routers are attached to all entry points.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | All entry points            | No       |
| <a id="opt-rule"></a>`rule`                                                       | Rules are a set of matchers configured with values, that determine if a particular request matches specific criteria. If the rule is verified, the router becomes active, calls middlewares, and then forwards the request to the service. See [Rules & Priority](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/routing/rules-and-priority) for details.                                                                                                                                                                                                                                                                                 |                             | Yes      |
| <a id="opt-priority"></a>`priority`                                               | To avoid path overlap, routes are sorted, by default, in descending order using rules length. The priority is directly equal to the length of the rule, and so the longest length has the highest priority. A value of `0` for the priority is ignored. Negative values are supported. See [Rules & Priority](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/routing/rules-and-priority) for details.                                                                                                                                                                                                                                     | Rule length                 | No       |
| <a id="opt-middlewares"></a>`middlewares`                                         | The list of middlewares that are applied to the router. Middlewares are applied in the order they are declared. See [Middlewares overview](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/middlewares/overview) for available middlewares.                                                                                                                                                                                                                                                                                                                                                                                                |                             | No       |
| <a id="opt-tls"></a>`tls`                                                         | TLS configuration for the router. When specified, the router will only handle HTTPS requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                             | No       |
| <a id="opt-tls-certResolver"></a>`tls.certResolver`                               | The name of the certificate resolver to use for automatic certificate generation. See [Certificate Resolver](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/tls/overview#certificate-resolver) for details.                                                                                                                                                                                                                                                                                                                                                                                                                               |                             | No       |
| <a id="opt-tls-options"></a>`tls.options`                                         | The name of the TLS options to use for configuring TLS parameters (cipher suites, min/max TLS version, client authentication, etc.). They are mapped to the host names of the router rule, and not to the router itself, so all the routers serving the same host name on the same entry point must reference the same TLS options. See [TLS Options](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/tls/tls-options) for detailed configuration, and [Conflicting TLS Options](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/tls/tls-options#conflicting-tls-options) for the consequences of not doing so.   | `default`                   | No       |
| <a id="opt-tls-domains"></a>`tls.domains`                                         | List of domains and Subject Alternative Names (SANs) for explicit certificate domain specification. When using ACME certificate resolvers, domains are automatically extracted from router rules, making this option optional.                                                                                                                                                                                                                                                                                                                                                                                                                                      |                             | No       |
| <a id="opt-observability"></a>`observability`                                     | Observability configuration for the router. Allows fine-grained control over access logs, metrics, and tracing per router. See [Observability](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/routing/observability) for details.                                                                                                                                                                                                                                                                                                                                                                                                         | Inherited from entry points | No       |
| <a id="opt-observability-traceVerbosity"></a>`observability.traceVerbosity`       | Defines the verbosity level of tracing for this router. Accepted values are `minimal` and `detailed`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `minimal`                   | No       |
| <a id="opt-respondingTimeouts"></a>`respondingTimeouts`                           | Overrides the entry point [`respondingTimeouts`](https://doc.traefik.io/traefik/v3.8/reference/install-configuration/entrypoints#opt-transport-respondingTimeouts-readTimeout) for the requests matched by the router. Both timeouts count from when the router receives the request, and each one replaces the entry point one, whether longer or shorter. An unset timeout leaves the entry point one in force. Only one router per branch of a [multi-layer routing](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/routing/multi-layer-routing) tree can define `respondingTimeouts`, otherwise the router is disabled with an error. |                             | No       |
| <a id="opt-respondingTimeouts-readTimeout"></a>`respondingTimeouts.readTimeout`   | Maximum duration for reading the request body. `0` means no timeout. It must not be longer than `writeTimeout`, otherwise the router is disabled with an error. A value longer than the entry point [`readTimeout`](https://doc.traefik.io/traefik/v3.8/reference/install-configuration/entrypoints#opt-transport-respondingTimeouts-readTimeout) weakens its protection against slow clients (Slowloris) for the whole entry point, so set it only on the routes that need it.                                                                                                                                                                                     | Entry point `readTimeout`   | No       |
| <a id="opt-respondingTimeouts-writeTimeout"></a>`respondingTimeouts.writeTimeout` | Maximum duration for handling the request: the router middlewares, the backend processing (including retries), and the response write. `0` means no timeout. If it expires before the response has started, the client receives a `504 Gateway Timeout`; afterwards, the connection is closed. It does not apply to protocol upgrades (WebSocket, ...), but applies to streaming responses (SSE, gRPC streaming, ...): leave it unset or set it to `0` on such routers.                                                                                                                                                                                             | Entry point `writeTimeout`  | No       |
| <a id="opt-parentRefs"></a>`parentRefs`                                           | References to parent router names for multi-layer routing. When specified, this router becomes a child router that processes requests after parent routers have applied their middlewares. See [Multi-Layer Routing](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/routing/multi-layer-routing) for details.                                                                                                                                                                                                                                                                                                                             |                             | No       |
| <a id="opt-service"></a>`service`                                                 | The name of the service that will handle the matched requests. Services can be load balancer services, weighted round robin, mirroring, or failover services. See [Service](https://doc.traefik.io/traefik/v3.8/reference/routing-configuration/http/load-balancing/service) for details.                                                                                                                                                                                                                                                                                                                                                                           |                             | Yes      |

## Router Naming

- The character `@` is not authorized in the router name
- In provider-specific configurations (Docker, Kubernetes), router names are often auto-generated based on service names and rules
