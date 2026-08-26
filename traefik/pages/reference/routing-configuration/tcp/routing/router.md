> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/tcp/routing/router.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/tcp/routing/router.md)

## TCP Router

A TCP router is in charge of connecting incoming TCP connections to the services that can handle them. TCP routers analyze incoming connections based on rules, and when a match is found, forward the connection through any configured middlewares to the appropriate service.

> **TCP vs HTTP Routing**
> If both HTTP routers and TCP routers listen to the same EntryPoint, the TCP routers will apply before the HTTP routers. If no matching route is found for the TCP routers, then the HTTP routers will take over.

## Configuration Example

**Structured (YAML)**

```yaml
tcp:
  routers:
    my-tcp-router:
      entryPoints:
        - "tcp-ep"
        - "websecure"
      rule: "HostSNI(`example.com`)"
      priority: 10
      middlewares:
        - "tcp-ipallowlist"
      tls:
        passthrough: false
        certResolver: "letsencrypt"
        options: "modern-tls"
        domains:
          - main: "example.com"
            sans:
              - "www.example.com"
      service: my-tcp-service
```

**Structured (TOML)**

```toml
[tcp.routers]
  [tcp.routers.my-tcp-router]
    entryPoints = ["tcp-ep", "websecure"]
    rule = "HostSNI(`example.com`)"
    priority = 10
    middlewares = ["tcp-ipallowlist"]
    service = "my-tcp-service"

    [tcp.routers.my-tcp-router.tls]
      passthrough = false
      certResolver = "letsencrypt"
      options = "modern-tls"

      [[tcp.routers.my-tcp-router.tls.domains]]
        main = "example.com"
        sans = ["www.example.com"]
```

**Labels**

```yaml
labels:
  - "traefik.tcp.routers.my-tcp-router.entrypoints=tcp-ep,websecure"
  - "traefik.tcp.routers.my-tcp-router.rule=HostSNI(`example.com`)"
  - "traefik.tcp.routers.my-tcp-router.priority=10"
  - "traefik.tcp.routers.my-tcp-router.middlewares=tcp-ipallowlist"
  - "traefik.tcp.routers.my-tcp-router.tls.certresolver=letsencrypt"
  - "traefik.tcp.routers.my-tcp-router.tls.passthrough=false"
  - "traefik.tcp.routers.my-tcp-router.tls.options=modern-tls"
  - "traefik.tcp.routers.my-tcp-router.tls.domains[0].main=example.com"
  - "traefik.tcp.routers.my-tcp-router.tls.domains[0].sans=www.example.com"
  - "traefik.tcp.routers.my-tcp-router.service=my-tcp-service"
```

**Tags**

```json
{
  "Tags": [
    "traefik.tcp.routers.my-tcp-router.entrypoints=tcp-ep,websecure",
    "traefik.tcp.routers.my-tcp-router.rule=HostSNI(`example.com`)",
    "traefik.tcp.routers.my-tcp-router.priority=10",
    "traefik.tcp.routers.my-tcp-router.middlewares=tcp-ipallowlist",
    "traefik.tcp.routers.my-tcp-router.tls.certresolver=letsencrypt",
    "traefik.tcp.routers.my-tcp-router.tls.passthrough=false",
    "traefik.tcp.routers.my-tcp-router.tls.options=modern-tls",
    "traefik.tcp.routers.my-tcp-router.tls.domains[0].main=example.com",
    "traefik.tcp.routers.my-tcp-router.tls.domains[0].sans=www.example.com",
    "traefik.tcp.routers.my-tcp-router.service=my-tcp-service"
  ]
}
```

## Configuration Options

| Field                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                    | Default              | Required |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | -------- |
| <a id="opt-entryPoints"></a>`entryPoints` | The list of entry points to which the router is attached. If not specified, TCP routers are attached to all TCP entry points.                                                                                                                                                                                                                                                                                                  | All TCP entry points | No       |
| <a id="opt-rule"></a>`rule`               | Rules are a set of matchers configured with values, that determine if a particular connection matches specific criteria. If the rule is verified, the router becomes active, calls middlewares, and then forwards the connection to the service. See [Rules & Priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority) for details.                                       |                      | Yes      |
| <a id="opt-ruleSyntax"></a>`ruleSyntax`   | **Deprecated.** Specifies the syntax used for the `rule` field to support v2→v3 migrations. Do not use this field in new configurations; rewrite router rules to use the v3 syntax instead.                                                                                                                                                                                                                                    |                      | No       |
| <a id="opt-priority"></a>`priority`       | To avoid rule overlap, routes are sorted, by default, in descending order using rules length. The priority is directly equal to the length of the rule, and so the longest length has the highest priority. A value of `0` for the priority is ignored. Negative values are supported. See [Rules & Priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority) for details. | Rule length          | No       |
| <a id="opt-middlewares"></a>`middlewares` | The list of middlewares that are applied to the router. Middlewares are applied in the order they are declared. See [TCP Middlewares overview](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/overview) for available TCP middlewares.                                                                                                                                                    |                      | No       |
| <a id="opt-tls"></a>`tls`                 | TLS configuration for the router. When specified, the router will only handle TLS connections. See [TLS configuration](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for detailed TLS options.                                                                                                                                                                                                  |                      | No       |
| <a id="opt-service"></a>`service`         | The name of the service that will handle the matched connections. Services can be load balancer services or weighted round robin services. See [TCP Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service) for details.                                                                                                                                                                     |                      | Yes      |

## Router Naming

- The character `@` is not authorized in the router name
- Router names should be descriptive and follow your naming conventions
- In provider-specific configurations (Docker, Kubernetes), router names are often auto-generated based on service names and rules
