> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/other-providers/file.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/other-providers/file.md)

# Traefik File Routing Configuration

The file provider lets you define routing configuration in YAML or TOML.
Use it to declare routers, services, middlewares, TCP and UDP routing, and TLS options that Traefik should load from a file or a directory.

To configure the file provider itself, see the [File provider install configuration](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file) page.

## Configuration Examples

> **Configuring the File Provider and Exposing One HTTP Service**
> Enabling the file provider:
>
> **Structured (YAML)**
>
> ```yaml
> providers:
>   file:
>     filename: /etc/traefik/dynamic.yml
> ```
>
> **Structured (TOML)**
>
> ```toml
> [providers.file]
>   filename = "/etc/traefik/dynamic.toml"
> ```
>
> **CLI**
>
> ```bash
> --providers.file.filename=/etc/traefik/dynamic.yml
> ```
>
> Declaring the dynamic HTTP configuration:
>
> **Structured (YAML)**
>
> ```yaml
> http:
>   routers:
>     app:
>       rule: Host(`example.com`)
>       entryPoints:
>         - websecure
>       service: app
>       tls: {}
>
>   services:
>     app:
>       loadBalancer:
>         servers:
>           - url: http://127.0.0.1:8080
> ```
>
> **Structured (TOML)**
>
> ```toml
> [http.routers.app]
>   rule = "Host(`example.com`)"
>   entryPoints = ["websecure"]
>   service = "app"
>
>   [http.routers.app.tls]
>
> [http.services.app.loadBalancer]
>   [[http.services.app.loadBalancer.servers]]
>     url = "http://127.0.0.1:8080"
> ```
>
> **Specifying More Than One Router and Service**
> Define each router and explicitly attach it to the service that should handle matching requests.
>
> **Structured (YAML)**
>
> ```yaml
> http:
>   routers:
>     app:
>       rule: Host(`example-a.com`)
>       service: app
>     admin:
>       rule: Host(`example-b.com`)
>       service: admin
>
>   services:
>     app:
>       loadBalancer:
>         servers:
>           - url: http://127.0.0.1:8000
>     admin:
>       loadBalancer:
>         servers:
>           - url: http://127.0.0.1:9000
> ```
>
> **Structured (TOML)**
>
> ```toml
> [http.routers.app]
>   rule = "Host(`example-a.com`)"
>   service = "app"
>
> [http.routers.admin]
>   rule = "Host(`example-b.com`)"
>   service = "admin"
>
> [http.services.app.loadBalancer]
>   [[http.services.app.loadBalancer.servers]]
>     url = "http://127.0.0.1:8000"
>
> [http.services.admin.loadBalancer]
>   [[http.services.admin.loadBalancer.servers]]
>     url = "http://127.0.0.1:9000"
> ```
>
> **Declaring and Referencing Middlewares**
> Middlewares declared by the file provider can be used by routers from the file provider or by routers from other providers.
> When another provider references them, use the `@file` provider suffix.
>
> **Structured (YAML)**
>
> ```yaml
> http:
>   routers:
>     app:
>       rule: Host(`secure.example.com`)
>       entryPoints:
>         - websecure
>       middlewares:
>         - secure-headers
>       service: app
>       tls:
>         options: modern
>
>   middlewares:
>     secure-headers:
>       headers:
>         stsSeconds: 31536000
>         forceSTSHeader: true
>
>   services:
>     app:
>       loadBalancer:
>         servers:
>           - url: http://127.0.0.1:8080
>
> tls:
>   options:
>     modern:
>       minVersion: VersionTLS12
>       sniStrict: true
> ```
>
> **Structured (TOML)**
>
> ```toml
> [http.routers.app]
>   rule = "Host(`secure.example.com`)"
>   entryPoints = ["websecure"]
>   middlewares = ["secure-headers"]
>   service = "app"
>
>   [http.routers.app.tls]
>     options = "modern"
>
> [http.middlewares.secure-headers.headers]
>   stsSeconds = 31536000
>   forceSTSHeader = true
>
> [http.services.app.loadBalancer]
>   [[http.services.app.loadBalancer.servers]]
>     url = "http://127.0.0.1:8080"
>
> [tls.options.modern]
>   minVersion = "VersionTLS12"
>   sniStrict = true
> ```
>
> **Loading Multiple Dynamic Configuration Files**
> Configure the file provider with a directory when you want to split dynamic configuration across multiple files.
>
> **Structured (YAML)**
>
> ```yaml
> providers:
>   file:
>     directory: /etc/traefik/dynamic
>     watch: true
> ```
>
> **Structured (TOML)**
>
> ```toml
> [providers.file]
>   directory = "/etc/traefik/dynamic"
>   watch = true
> ```
>
> **CLI**
>
> ```bash
> --providers.file.directory=/etc/traefik/dynamic
> --providers.file.watch=true
> ```
>
> Example `/etc/traefik/dynamic/http.yml`:
>
> ```yaml
> http:
>   routers:
>     app:
>       rule: Host(`example.com`)
>       service: app
>
>   services:
>     app:
>       loadBalancer:
>         servers:
>           - url: http://127.0.0.1:8080
> ```
>
> Example `/etc/traefik/dynamic/tls.yml`:
>
> ```yaml
> tls:
>   certificates:
>     - certFile: /certs/example.crt
>       keyFile: /certs/example.key
> ```

## Configuration Options

### General

The file provider does not discover services automatically.
Define every router, service, middleware, and TLS resource explicitly in the routing configuration file.

When another provider references a resource declared by the file provider, append the `@file` provider suffix.
For example, a Docker label can reference a file-provider middleware with `secure-headers@file`.

The examples below use YAML-style field paths.
In TOML, use the equivalent table and array syntax, such as `[http.routers.<router_name>]` and `[[http.services.<service_name>.loadBalancer.servers]]`.

### HTTP

#### Routers

Define HTTP routers under `http.routers.<router_name>`.

> **The character `@` is not authorized in the router name `<router_name>`.**
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-http-routers-router-name-rule"></a>`http.routers.<router_name>.rule` | See [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rules) for more information. | ``Host(`example.com`)`` |
> \| <a id="opt-http-routers-router-name-ruleSyntax"></a>`http.routers.<router_name>.ruleSyntax` | See [ruleSyntax](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rulesyntax) for more information.<br/>RuleSyntax is deprecated and will be removed in the next major version. | `v3` |
> \| <a id="opt-http-routers-router-name-entryPointsn"></a>`http.routers.<router_name>.entryPoints[n]` | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information. | `websecure` |
> \| <a id="opt-http-routers-router-name-middlewaresn"></a>`http.routers.<router_name>.middlewares[n]` | See [middlewares overview](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview) for more information. | `secure-headers` |
> \| <a id="opt-http-routers-router-name-service"></a>`http.routers.<router_name>.service` | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information. | `app` |
> \| <a id="opt-http-routers-router-name-parentRefsn"></a>`http.routers.<router_name>.parentRefs[n]` | See [multi-layer routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/multi-layer-routing) for more information. | `parent-router@file` |
> \| <a id="opt-http-routers-router-name-tls"></a>`http.routers.<router_name>.tls` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/overview) for more information. | `{}` |
> \| <a id="opt-http-routers-router-name-tls-certResolver"></a>`http.routers.<router_name>.tls.certResolver` | See [certResolver](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview) for more information. | `myresolver` |
> \| <a id="opt-http-routers-router-name-tls-domainsn-main"></a>`http.routers.<router_name>.tls.domains[n].main` | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information. | `example.org` |
> \| <a id="opt-http-routers-router-name-tls-domainsn-sansn"></a>`http.routers.<router_name>.tls.domains[n].sans[n]` | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information. | `www.example.org` |
> \| <a id="opt-http-routers-router-name-tls-options"></a>`http.routers.<router_name>.tls.options` | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `modern` |
> \| <a id="opt-http-routers-router-name-observability-accessLogs"></a>`http.routers.<router_name>.observability.accessLogs` | Enables or disables access logs for the router. | `true` |
> \| <a id="opt-http-routers-router-name-observability-metrics"></a>`http.routers.<router_name>.observability.metrics` | Enables or disables metrics for the router. | `true` |
> \| <a id="opt-http-routers-router-name-observability-tracing"></a>`http.routers.<router_name>.observability.tracing` | Enables or disables tracing for the router. | `true` |
> \| <a id="opt-http-routers-router-name-observability-traceVerbosity"></a>`http.routers.<router_name>.observability.traceVerbosity` | See [trace verbosity](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/observability#opt-traceVerbosity) for more information. | `minimal` |
> \| <a id="opt-http-routers-router-name-priority"></a>`http.routers.<router_name>.priority` | See [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#priority-calculation) for more information. | `42` |

#### Services

Define HTTP services under `http.services.<service_name>`.

> **The character `@` is not authorized in the service name `<service_name>`.**
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-http-services-service-name-loadBalancer-serversn-url"></a>`http.services.<service_name>.loadBalancer.servers[n].url` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#servers) for more information. | `http://127.0.0.1:8080` |
> \| <a id="opt-http-services-service-name-loadBalancer-serversn-weight"></a>`http.services.<service_name>.loadBalancer.servers[n].weight` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#servers) for more information. | `1` |
> \| <a id="opt-http-services-service-name-loadBalancer-serversn-preservePath"></a>`http.services.<service_name>.loadBalancer.servers[n].preservePath` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#servers) for more information. | `true` |
> \| <a id="opt-http-services-service-name-loadBalancer-strategy"></a>`http.services.<service_name>.loadBalancer.strategy` | See [load balancing strategies](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#load-balancing-strategies) for more information. | `wrr` |
> \| <a id="opt-http-services-service-name-loadBalancer-passHostHeader"></a>`http.services.<service_name>.loadBalancer.passHostHeader` | See [service load balancer](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information. | `true` |
> \| <a id="opt-http-services-service-name-loadBalancer-healthCheck"></a>`http.services.<service_name>.loadBalancer.healthCheck.*` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `path: /health` |
> \| <a id="opt-http-services-service-name-loadBalancer-passiveHealthCheck"></a>`http.services.<service_name>.loadBalancer.passiveHealthCheck.*` | See [passive health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#passive-health-check) for more information. | `maxFailedAttempts: 3` |
> \| <a id="opt-http-services-service-name-loadBalancer-sticky-cookie"></a>`http.services.<service_name>.loadBalancer.sticky.cookie.*` | See [sticky sessions](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `name: app-cookie` |
> \| <a id="opt-http-services-service-name-loadBalancer-responseForwarding-flushInterval"></a>`http.services.<service_name>.loadBalancer.responseForwarding.flushInterval` | See [service load balancer](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information. | `100ms` |
> \| <a id="opt-http-services-service-name-loadBalancer-serversTransport"></a>`http.services.<service_name>.loadBalancer.serversTransport` | See [ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport) for more information. | `secure-transport` |
> \| <a id="opt-http-services-service-name-weighted-servicesn-name"></a>`http.services.<service_name>.weighted.services[n].name` | See [weighted round robin](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `app-v1` |
> \| <a id="opt-http-services-service-name-weighted-servicesn-weight"></a>`http.services.<service_name>.weighted.services[n].weight` | See [weighted round robin](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `3` |
> \| <a id="opt-http-services-service-name-weighted-sticky-cookie"></a>`http.services.<service_name>.weighted.sticky.cookie.*` | See [sticky sessions](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `name: app-cookie` |
> \| <a id="opt-http-services-service-name-weighted-healthCheck"></a>`http.services.<service_name>.weighted.healthCheck` | See [weighted service health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `{}` |
> \| <a id="opt-http-services-service-name-highestRandomWeight-servicesn-name"></a>`http.services.<service_name>.highestRandomWeight.services[n].name` | See [highest random weight](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#highest-random-weight) for more information. | `app-v1` |
> \| <a id="opt-http-services-service-name-highestRandomWeight-servicesn-weight"></a>`http.services.<service_name>.highestRandomWeight.services[n].weight` | See [highest random weight](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#highest-random-weight) for more information. | `3` |
> \| <a id="opt-http-services-service-name-highestRandomWeight-healthCheck"></a>`http.services.<service_name>.highestRandomWeight.healthCheck` | See [highest random weight](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#highest-random-weight) for more information. | `{}` |
> \| <a id="opt-http-services-service-name-mirroring-service"></a>`http.services.<service_name>.mirroring.service` | See [mirroring](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `app-main` |
> \| <a id="opt-http-services-service-name-mirroring-mirrorBody"></a>`http.services.<service_name>.mirroring.mirrorBody` | See [mirroring](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `true` |
> \| <a id="opt-http-services-service-name-mirroring-maxBodySize"></a>`http.services.<service_name>.mirroring.maxBodySize` | See [mirroring](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `1048576` |
> \| <a id="opt-http-services-service-name-mirroring-mirrorsn-name"></a>`http.services.<service_name>.mirroring.mirrors[n].name` | See [mirroring](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `app-shadow` |
> \| <a id="opt-http-services-service-name-mirroring-mirrorsn-percent"></a>`http.services.<service_name>.mirroring.mirrors[n].percent` | See [mirroring](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `10` |
> \| <a id="opt-http-services-service-name-mirroring-healthCheck"></a>`http.services.<service_name>.mirroring.healthCheck` | See [mirroring](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `{}` |
> \| <a id="opt-http-services-service-name-failover-service"></a>`http.services.<service_name>.failover.service` | See [failover](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#failover) for more information. | `app-main` |
> \| <a id="opt-http-services-service-name-failover-fallback"></a>`http.services.<service_name>.failover.fallback` | See [failover](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#failover) for more information. | `app-backup` |
> \| <a id="opt-http-services-service-name-failover-healthCheck"></a>`http.services.<service_name>.failover.healthCheck` | See [failover](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#failover) for more information. | `{}` |

#### Middlewares

Define HTTP middlewares under `http.middlewares.<middleware_name>`.

For example, to declare an [`AddPrefix`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/addprefix) middleware named `add-api`, set `http.middlewares.add-api.addPrefix.prefix=/api`.

More information about available middlewares can be found in the dedicated [middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview).

> **The character `@` is not authorized in the middleware name `<middleware_name>`.**
> **Conflicts in Declaration**
> If you declare multiple middlewares with the same name but different parameters, the middleware fails to be declared.
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-http-middlewares-middleware-name-middleware-type-middleware-option"></a>`http.middlewares.<middleware_name>.<middleware_type>.<middleware_option>` | With `middleware_type` the middleware type, such as `addPrefix` or `headers`, and `middleware_option` the option to set. | `prefix: /api` |

#### ServersTransports

Define HTTP ServersTransports under `http.serversTransports.<servers_transport_name>`.

| Field                                                                                                             | Description                                                                                                                                            | Value                     |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| <a id="opt-http-serversTransports-servers-transport-name"></a>`http.serversTransports.<servers_transport_name>.*` | See [ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport) for more information. | `serverName: example.org` |

### TCP

You can declare TCP routers, services, middlewares, and ServersTransports with the file provider.

#### TCP Routers

Define TCP routers under `tcp.routers.<router_name>`.

> **The character `@` is not authorized in the router name `<router_name>`.**
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-tcp-routers-router-name-entryPointsn"></a>`tcp.routers.<router_name>.entryPoints[n]` | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information. | `websecure` |
> \| <a id="opt-tcp-routers-router-name-rule"></a>`tcp.routers.<router_name>.rule` | See [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#rules) for more information. | ``HostSNI(`example.com`)`` |
> \| <a id="opt-tcp-routers-router-name-ruleSyntax"></a>`tcp.routers.<router_name>.ruleSyntax` | Configures the rule syntax to use for parsing the rule on a per-router basis.<br/>RuleSyntax is deprecated and will be removed in the next major version. | `v3` |
> \| <a id="opt-tcp-routers-router-name-middlewaresn"></a>`tcp.routers.<router_name>.middlewares[n]` | See [TCP middlewares overview](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/overview) for more information. | `ip-allowlist` |
> \| <a id="opt-tcp-routers-router-name-service"></a>`tcp.routers.<router_name>.service` | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service) for more information. | `tcp-app` |
> \| <a id="opt-tcp-routers-router-name-tls"></a>`tcp.routers.<router_name>.tls` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information. | `{}` |
> \| <a id="opt-tcp-routers-router-name-tls-certResolver"></a>`tcp.routers.<router_name>.tls.certResolver` | See [certResolver](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls#configuration-options) for more information. | `myresolver` |
> \| <a id="opt-tcp-routers-router-name-tls-domainsn-main"></a>`tcp.routers.<router_name>.tls.domains[n].main` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information. | `example.org` |
> \| <a id="opt-tcp-routers-router-name-tls-domainsn-sansn"></a>`tcp.routers.<router_name>.tls.domains[n].sans[n]` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information. | `www.example.org` |
> \| <a id="opt-tcp-routers-router-name-tls-options"></a>`tcp.routers.<router_name>.tls.options` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information. | `modern` |
> \| <a id="opt-tcp-routers-router-name-tls-passthrough"></a>`tcp.routers.<router_name>.tls.passthrough` | See [Passthrough](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls#opt-passthrough) for more information. | `true` |
> \| <a id="opt-tcp-routers-router-name-priority"></a>`tcp.routers.<router_name>.priority` | See [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#priority-calculation) for more information. | `42` |

#### TCP Services

Define TCP services under `tcp.services.<service_name>`.

> **The character `@` is not authorized in the service name `<service_name>`.**
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-tcp-services-service-name-loadBalancer-serversn-address"></a>`tcp.services.<service_name>.loadBalancer.servers[n].address` | See [servers load balancer](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#servers-load-balancer) for more information. | `127.0.0.1:9000` |
> \| <a id="opt-tcp-services-service-name-loadBalancer-serversn-tls"></a>`tcp.services.<service_name>.loadBalancer.servers[n].tls` | Determines whether to use TLS when dialing the backend server. | `true` |
> \| <a id="opt-tcp-services-service-name-loadBalancer-serversTransport"></a>`tcp.services.<service_name>.loadBalancer.serversTransport` | See [TCP ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport) for more information. | `secure-tcp` |
> \| <a id="opt-tcp-services-service-name-loadBalancer-proxyProtocol-version"></a>`tcp.services.<service_name>.loadBalancer.proxyProtocol.version` | Enables Proxy Protocol for backend connections. | `2` |
> \| <a id="opt-tcp-services-service-name-loadBalancer-terminationDelay"></a>`tcp.services.<service_name>.loadBalancer.terminationDelay` | Defines the delay before terminating connections. | `100` |
> \| <a id="opt-tcp-services-service-name-loadBalancer-healthCheck"></a>`tcp.services.<service_name>.loadBalancer.healthCheck.*` | See [TCP service health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#health-check) for more information. | `interval: 10s` |
> \| <a id="opt-tcp-services-service-name-weighted-servicesn-name"></a>`tcp.services.<service_name>.weighted.services[n].name` | See [weighted round robin](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#weighted-round-robin) for more information. | `tcp-v1` |
> \| <a id="opt-tcp-services-service-name-weighted-servicesn-weight"></a>`tcp.services.<service_name>.weighted.services[n].weight` | See [weighted round robin](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#weighted-round-robin) for more information. | `3` |
> \| <a id="opt-tcp-services-service-name-weighted-healthCheck"></a>`tcp.services.<service_name>.weighted.healthCheck` | See [weighted round robin](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#weighted-round-robin) for more information. | `{}` |

#### TCP Middlewares

Define TCP middlewares under `tcp.middlewares.<middleware_name>`.

For example, to declare an [`InFlightConn`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/inflightconn) middleware named `limit`, set `tcp.middlewares.limit.inFlightConn.amount=10`.

More information about available middlewares is available in the dedicated [TCP middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/overview).

> **The character `@` is not authorized in the middleware name `<middleware_name>`.**
> **Conflicts in Declaration**
> If you declare multiple middlewares with the same name but different parameters, the middleware fails to be declared.
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-tcp-middlewares-middleware-name-middleware-type-middleware-option"></a>`tcp.middlewares.<middleware_name>.<middleware_type>.<middleware_option>` | With `middleware_type` the middleware type, such as `inFlightConn`, and `middleware_option` the option to set. | `amount: 10` |

#### TCP ServersTransports

Define TCP ServersTransports under `tcp.serversTransports.<servers_transport_name>`.

| Field                                                                                                           | Description                                                                                                                                | Value              |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| <a id="opt-tcp-serversTransports-servers-transport-name"></a>`tcp.serversTransports.<servers_transport_name>.*` | See [TCP ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport) for more information. | `dialTimeout: 30s` |

### UDP

You can declare UDP routers and services with the file provider.

#### UDP Routers

Define UDP routers under `udp.routers.<router_name>`.

> **The character `@` is not authorized in the router name `<router_name>`.**
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-udp-routers-router-name-entryPointsn"></a>`udp.routers.<router_name>.entryPoints[n]` | See [UDP router entrypoints](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/routing/rules-priority#entrypoints) for more information. | `dns` |
> \| <a id="opt-udp-routers-router-name-service"></a>`udp.routers.<router_name>.service` | See [UDP router configuration](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/routing/rules-priority#configuration-example) for more information. | `dns-service` |

#### UDP Services

Define UDP services under `udp.services.<service_name>`.

> **The character `@` is not authorized in the service name `<service_name>`.**
> \| Field | Description | Value |
> \|------|-------------|-------|
> \| <a id="opt-udp-services-service-name-loadBalancer-serversn-address"></a>`udp.services.<service_name>.loadBalancer.servers[n].address` | See [UDP service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information. | `127.0.0.1:5353` |
> \| <a id="opt-udp-services-service-name-weighted-servicesn-name"></a>`udp.services.<service_name>.weighted.services[n].name` | See [UDP service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information. | `dns-v1` |
> \| <a id="opt-udp-services-service-name-weighted-servicesn-weight"></a>`udp.services.<service_name>.weighted.services[n].weight` | See [UDP service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information. | `3` |

### TLS

You can declare TLS certificates, options, and stores with the file provider.

#### Certificates

| Field                                                                     | Description                                                                                                                                                       | Value                |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| <a id="opt-tls-certificatesn-certFile"></a>`tls.certificates[n].certFile` | See [TLS certificates](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates) for more information.                       | `/certs/example.crt` |
| <a id="opt-tls-certificatesn-keyFile"></a>`tls.certificates[n].keyFile`   | See [TLS certificates](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates) for more information.                       | `/certs/example.key` |
| <a id="opt-tls-certificatesn-storesn"></a>`tls.certificates[n].stores[n]` | See [certificate stores](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#certificates-stores) for more information. | `default`            |

#### TLS Options

| Field                                                                                                                     | Description                                                                                                                                                                                                                   | Value                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| <a id="opt-tls-options-options-name-minVersion"></a>`tls.options.<options_name>.minVersion`                               | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information.                                                                                             | `VersionTLS12`                          |
| <a id="opt-tls-options-options-name-maxVersion"></a>`tls.options.<options_name>.maxVersion`                               | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information.                                                                                             | `VersionTLS13`                          |
| <a id="opt-tls-options-options-name-cipherSuitesn"></a>`tls.options.<options_name>.cipherSuites[n]`                       | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information.                                                                                             | `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` |
| <a id="opt-tls-options-options-name-curvePreferencesn"></a>`tls.options.<options_name>.curvePreferences[n]`               | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information.                                                                                             | `CurveP256`                             |
| <a id="opt-tls-options-options-name-clientAuth-caFilesn"></a>`tls.options.<options_name>.clientAuth.caFiles[n]`           | See [client authentication](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options#client-authentication-mtls) for more information.                                                        | `/certs/client-ca.crt`                  |
| <a id="opt-tls-options-options-name-clientAuth-clientAuthType"></a>`tls.options.<options_name>.clientAuth.clientAuthType` | See [client authentication](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options#client-authentication-mtls) for more information.                                                        | `RequireAndVerifyClientCert`            |
| <a id="opt-tls-options-options-name-sniStrict"></a>`tls.options.<options_name>.sniStrict`                                 | See [strict SNI checking](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options#strict-sni-checking) for more information.                                                                 | `true`                                  |
| <a id="opt-tls-options-options-name-alpnProtocolsn"></a>`tls.options.<options_name>.alpnProtocols[n]`                     | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information.                                                                                             | `h2`                                    |
| <a id="opt-tls-options-options-name-disableSessionTickets"></a>`tls.options.<options_name>.disableSessionTickets`         | See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information.                                                                                             | `true`                                  |
| <a id="opt-tls-options-options-name-preferServerCipherSuites"></a>`tls.options.<options_name>.preferServerCipherSuites`   | **Deprecated:** This option is no longer effective and will be ignored by the Go TLS stack. See [TLS options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `true`                                  |

#### TLS Stores

| Field                                                                                                                                 | Description                                                                                                                                                                  | Value                |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| <a id="opt-tls-stores-store-name-defaultCertificate-certFile"></a>`tls.stores.<store_name>.defaultCertificate.certFile`               | See [default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#default-certificate) for more information.           | `/certs/default.crt` |
| <a id="opt-tls-stores-store-name-defaultCertificate-keyFile"></a>`tls.stores.<store_name>.defaultCertificate.keyFile`                 | See [default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#default-certificate) for more information.           | `/certs/default.key` |
| <a id="opt-tls-stores-store-name-defaultGeneratedCert-resolver"></a>`tls.stores.<store_name>.defaultGeneratedCert.resolver`           | See [ACME default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#acme-default-certificate) for more information. | `myresolver`         |
| <a id="opt-tls-stores-store-name-defaultGeneratedCert-domain-main"></a>`tls.stores.<store_name>.defaultGeneratedCert.domain.main`     | See [ACME default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#acme-default-certificate) for more information. | `example.org`        |
| <a id="opt-tls-stores-store-name-defaultGeneratedCert-domain-sansn"></a>`tls.stores.<store_name>.defaultGeneratedCert.domain.sans[n]` | See [ACME default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#acme-default-certificate) for more information. | `www.example.org`    |

## Go Templating

> **Warning**
> Go Templating only works with dedicated dynamic configuration files.
> Templating does not work in the Traefik main static configuration file.
> Traefik supports using Go templating to automatically generate repetitive sections of configuration files.
> These sections must be a valid [Go template](https://pkg.go.dev/text/template/), and can use
> [sprig template functions](https://masterminds.github.io/sprig/).

To illustrate, it is possible to easily define multiple routers, services, and TLS certificates as described in the following examples:

> **Configuring Using Templating**
> **YAML**
>
> ```yaml
> http:
>   routers:
>     {{range $i, $e := until 100 }}
>     router{{ $e }}-{{ env "MY_ENV_VAR" }}:
>       # ...
>     {{end}}
>
>   services:
>     {{range $i, $e := until 100 }}
>     application{{ $e }}:
>       # ...
>     {{end}}
>
> tcp:
>   routers:
>     {{range $i, $e := until 100 }}
>     router{{ $e }}:
>       # ...
>     {{end}}
>
>   services:
>     {{range $i, $e := until 100 }}
>     service{{ $e }}:
>       # ...
>     {{end}}
>
> tls:
>   certificates:
>   {{ range $i, $e := until 10 }}
>   - certFile: "/etc/traefik/cert-{{ $e }}.pem"
>     keyFile: "/etc/traefik/cert-{{ $e }}.key"
>     stores:
>     - "my-store-foo-{{ $e }}"
>     - "my-store-bar-{{ $e }}"
>   {{end}}
> ```
>
> **TOML**
>
> ```toml
> # template-rules.toml
> [http]
>
>   [http.routers]
>   {{ range $i, $e := until 100 }}
>     [http.routers.router{{ $e }}-{{ env "MY_ENV_VAR" }}]
>     # ...
>   {{ end }}
>
>   [http.services]
>   {{ range $i, $e := until 100 }}
>       [http.services.service{{ $e }}]
>       # ...
>   {{ end }}
>
> [tcp]
>
>   [tcp.routers]
>   {{ range $i, $e := until 100 }}
>     [tcp.routers.router{{ $e }}]
>     # ...
>   {{ end }}
>
>   [tcp.services]
>   {{ range $i, $e := until 100 }}
>       [tcp.services.service{{ $e }}]
>       # ...
>   {{ end }}
>
> {{ range $i, $e := until 10 }}
> [[tls.certificates]]
>   certFile = "/etc/traefik/cert-{{ $e }}.pem"
>   keyFile = "/etc/traefik/cert-{{ $e }}.key"
>   stores = ["my-store-foo-{{ $e }}", "my-store-bar-{{ $e }}"]
> {{ end }}
>
> [tls.options]
> {{ range $i, $e := until 10 }}
>   [tls.options.TLS{{ $e }}]
>   # ...
> {{ end }}
> ```
