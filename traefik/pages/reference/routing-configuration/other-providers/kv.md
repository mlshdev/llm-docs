> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/other-providers/kv.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/other-providers/kv.md)

# Traefik & KV Stores

## Configuration Examples

> **Configuring KV Store & Deploying / Exposing one Service**
> Enabling a KV store provider (example: Consul)
>
> **Structured (YAML)**
>
> ```yaml
> providers:
>   consul:
>     endpoints:
>       - "127.0.0.1:8500"
> ```
>
> **Structured (TOML)**
>
> ```toml
> [providers.consul]
>   endpoints = ["127.0.0.1:8500"]
> ```
>
> **CLI**
>
> ```bash
> --providers.consul.endpoints=127.0.0.1:8500
> ```
>
> Setting keys in the KV store (example: Consul)
>
> ```bash
> consul kv put traefik/http/routers/my-router/rule "Host(`example.com`)"
> consul kv put traefik/http/routers/my-router/service "my-service"
> consul kv put traefik/http/services/my-service/loadbalancer/servers/0/url "http://127.0.0.1:8080"
> ```
>
> **Specify a Custom Port for the Service**
> Forward requests for `http://example.com` to `http://127.0.0.1:12345`:
>
> ```bash
> consul kv put traefik/http/routers/my-router/rule "Host(`example.com`)"
> consul kv put traefik/http/routers/my-router/service "my-service"
> consul kv put traefik/http/services/my-service/loadbalancer/servers/0/url "http://127.0.0.1:12345"
> ```
>
> **Specifying more than one router and service**
> Forwarding requests to more than one service requires defining multiple routers and services.
>
> In this example, requests are forwarded for `http://example-a.com` to `http://127.0.0.1:8000` in addition to `http://example-b.com` forwarding to `http://127.0.0.1:9000`:
>
> ```bash
> consul kv put traefik/http/routers/www-router/rule "Host(`example-a.com`)"
> consul kv put traefik/http/routers/www-router/service "www-service"
> consul kv put traefik/http/services/www-service/loadbalancer/servers/0/url "http://127.0.0.1:8000"
>
> consul kv put traefik/http/routers/admin-router/rule "Host(`example-b.com`)"
> consul kv put traefik/http/routers/admin-router/service "admin-service"
> consul kv put traefik/http/services/admin-service/loadbalancer/servers/0/url "http://127.0.0.1:9000"
> ```

## Configuration Options

> **Keys**
> Keys are case-insensitive.

### HTTP

#### Routers

> **The character `@` is not authorized in the router name `<router_name>`.**
> \| Key (Path)                           | Description                          | Value                      |
> \|--------------------------------------|--------------------------------------|----------------------------|
> \| <a id="opt-traefikhttproutersrouter-namerule"></a>`traefik/http/routers/<router_name>/rule` | See [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rules) for more information. | ``Host(`example.com`)``  |
> \| <a id="opt-traefikhttproutersrouter-nameruleSyntax"></a>`traefik/http/routers/<router_name>/ruleSyntax` | See [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rulesyntax) for more information.<br/>RuleSyntax option is deprecated and will be removed in the next major version.<br/>Please do not use this field and rewrite the router rules to use the v3 syntax. | `v3`  |
> \| <a id="opt-traefikhttproutersrouter-nameentrypoints0"></a>`traefik/http/routers/<router_name>/entrypoints/0` | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information. | `web`       |
> \| <a id="opt-traefikhttproutersrouter-nameentrypoints1"></a>`traefik/http/routers/<router_name>/entrypoints/1` | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information. | `websecure` |
> \| <a id="opt-traefikhttproutersrouter-namemiddlewares0"></a>`traefik/http/routers/<router_name>/middlewares/0` | See [middlewares overview](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview) for more information. | `auth`      |
> \| <a id="opt-traefikhttproutersrouter-namemiddlewares1"></a>`traefik/http/routers/<router_name>/middlewares/1` |  | `prefix`    |
> \| <a id="opt-traefikhttproutersrouter-nameservice"></a>`traefik/http/routers/<router_name>/service` | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information. | `myservice` |
> \| <a id="opt-traefikhttproutersrouter-nametls"></a>`traefik/http/routers/<router_name>/tls` | See [tls](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/overview) for more information. | `true` |
> \| <a id="opt-traefikhttproutersrouter-nametlscertresolver"></a>`traefik/http/routers/<router_name>/tls/certresolver` | See [certResolver](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview) for more information. | `myresolver` |
> \| <a id="opt-traefikhttproutersrouter-nametlsdomains0main"></a>`traefik/http/routers/<router_name>/tls/domains/0/main` | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information. | `example.org` |
> \| <a id="opt-traefikhttproutersrouter-nametlsdomains0sans0"></a>`traefik/http/routers/<router_name>/tls/domains/0/sans/0` | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information. | `test.example.org` |
> \| <a id="opt-traefikhttproutersrouter-nametlsdomains0sans1"></a>`traefik/http/routers/<router_name>/tls/domains/0/sans/1` | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information. | `dev.example.org`  |
> \| <a id="opt-traefikhttproutersrouter-nametlsoptions"></a>`traefik/http/routers/<router_name>/tls/options` | See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `foobar` |
> \| <a id="opt-traefikhttproutersrouter-nameobservabilityaccesslogs"></a>`traefik/http/routers/<router_name>/observability/accesslogs` | The accessLogs option controls whether the router will produce access-logs. | `true` |
> \| <a id="opt-traefikhttproutersrouter-nameobservabilitymetrics"></a>`traefik/http/routers/<router_name>/observability/metrics` | The metrics option controls whether the router will produce metrics. | `true` |
> \| <a id="opt-traefikhttproutersrouter-nameobservabilitytracing"></a>`traefik/http/routers/<router_name>/observability/tracing` | The tracing option controls whether the router will produce traces. | `true` |
> \| <a id="opt-traefikhttproutersrouter-namepriority"></a>`traefik/http/routers/<router_name>/priority` | See [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#priority-calculation) for more information. | `42`  |

#### Services

> **The character `@` is not authorized in the service name `<service_name>`.**
> \| Key (Path)                                                                                                                                                                                                                                                                                                                                       | Description                                                      |  Value                                   |
> \|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------|
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerservers0url"></a>`traefik/http/services/<service_name>/loadbalancer/servers/0/url` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#servers) for more information. | `http://<ip-server-1>:<port-server-1>/` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerservers0preservePath"></a>`traefik/http/services/<service_name>/loadbalancer/servers/0/preservePath` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#servers) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerservers0weight"></a>`traefik/http/services/<service_name>/loadbalancer/servers/0/weight` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#servers) for more information. | `1` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerserverstransport"></a>`traefik/http/services/<service_name>/loadbalancer/serverstransport` | Allows to reference a ServersTransport resource that is defined either with the File provider or the Kubernetes CRD one.<br/> See [serverstransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport) for more information. | `foobar@file` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerpasshostheader"></a>`traefik/http/services/<service_name>/loadbalancer/passhostheader` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckheadersX-Foo"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/headers/X-Foo` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckhostname"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/hostname` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `example.org` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckinterval"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/interval` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `10`  |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckpath"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/path` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `/foo` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckmethod"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/method` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckstatus"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/status` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `42`  |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckport"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/port` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `42`  |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthcheckscheme"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/scheme` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `http` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerhealthchecktimeout"></a>`traefik/http/services/<service_name>/loadbalancer/healthcheck/timeout` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information. | `10`  |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancersticky"></a>`traefik/http/services/<service_name>/loadbalancer/sticky` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerstickycookiehttponly"></a>`traefik/http/services/<service_name>/loadbalancer/sticky/cookie/httponly` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerstickycookiename"></a>`traefik/http/services/<service_name>/loadbalancer/sticky/cookie/name` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerstickycookiepath"></a>`traefik/http/services/<service_name>/loadbalancer/sticky/cookie/path` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `/foobar` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerstickycookiesecure"></a>`traefik/http/services/<service_name>/loadbalancer/sticky/cookie/secure` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerstickycookiesamesite"></a>`traefik/http/services/<service_name>/loadbalancer/sticky/cookie/samesite` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `none` |
> \| <a id="opt-traefikhttpservicesservice-nameloadbalancerstickycookiemaxage"></a>`traefik/http/services/<service_name>/loadbalancer/sticky/cookie/maxage` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#sticky-sessions) for more information. | `42`  |
> \| <a id="opt-traefikhttpservicesmyserviceloadbalancerresponseforwardingflushinterval"></a>`traefik/http/services/myservice/loadbalancer/responseforwarding/flushinterval` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information. | `10`  |
> \| <a id="opt-traefikhttpservicesservice-namemirroringservice"></a>`traefik/http/services/<service_name>/mirroring/service` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-namemirroringmirrorsnname"></a>`traefik/http/services/<service_name>/mirroring/mirrors/<n>/name` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-namemirroringmirrorsnpercent"></a>`traefik/http/services/<service_name>/mirroring/mirrors/<n>/percent` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#mirroring)for more information. | `42`  |
> \| <a id="opt-traefikhttpservicesservice-nameweightedservicesnname"></a>`traefik/http/services/<service_name>/weighted/services/<n>/name` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-nameweightedservicesnweight"></a>`traefik/http/services/<service_name>/weighted/services/<n>/weight` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `42`  |
> \| <a id="opt-traefikhttpservicesservice-nameweightedstickycookiename"></a>`traefik/http/services/<service_name>/weighted/sticky/cookie/name` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `foobar` |
> \| <a id="opt-traefikhttpservicesservice-nameweightedstickycookiesecure"></a>`traefik/http/services/<service_name>/weighted/sticky/cookie/secure` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameweightedstickycookiesamesite"></a>`traefik/http/services/<service_name>/weighted/sticky/cookie/samesite` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `none` |
> \| <a id="opt-traefikhttpservicesservice-nameweightedstickycookiehttpOnly"></a>`traefik/http/services/<service_name>/weighted/sticky/cookie/httpOnly` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `true` |
> \| <a id="opt-traefikhttpservicesservice-nameweightedstickycookiemaxage"></a>`traefik/http/services/<service_name>/weighted/sticky/cookie/maxage` | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#weighted-round-robin-wrr) for more information. | `42`  |
> \| <a id="opt-traefikhttpservicesservice-namefailoverfallback"></a>`traefik/http/services/<service_name>/failover/fallback` | See [Failover](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#failover) for more information. | `backup`  |
> \| <a id="opt-traefikhttpservicesservice-namefailoverhealthcheck"></a>`traefik/http/services/<service_name>/failover/healthcheck` | See [Failover](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#failover) for more information. | `{}`  |
> \| <a id="opt-traefikhttpservicesservice-namefailoverservice"></a>`traefik/http/services/<service_name>/failover/service` | See [Failover](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#failover) for more information. | `main`  |

#### Middleware

##### Configuration Options

| Key (Path)                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                        | Value    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <a id="opt-traefikhttpmiddlewaresmiddleware-namemiddleware-typemiddleware-option"></a>`traefik/http/middlewares/<middleware_name>/middleware_type/middleware_option` | With `middleware_type` the type of middleware (ex: `forwardAuth`, `headers`, etc)<br/>and `middleware_option` the middleware option to set (ex for the middleware `addPrefix`: `prefix`).<br/> More information about available middlewares in the dedicated [middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview). | `foobar` |

> **The character `@` is not authorized in the middleware name.**
> **Conflicts in Declaration**
> If you declare multiple middleware with the same name but with different parameters, the middleware fails to be declared.

#### ServerTransport

##### Configuration Options

| Key (Path)                                                                                                                                      | Description                                                                                                                                                                                                                                                                         | Value                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| <a id="opt-traefikhttpserversTransportsservers-transport-namest-option"></a>`traefik/http/serversTransports/<servers_transport_name>/st_option` | With  `st_option` the ServerTransport option to set (ex `maxIdleConnsPerHost`).<br/> More information about available options in the dedicated [ServerTransport section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport). | ServerTransport Options |

### TCP

You can declare TCP Routers and/or Services using KV.

#### Routers

| Key (Path)                                                                                                            | Description                                                                                                                                                   | Value                      |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| <a id="opt-traefiktcproutersrouter-nameentrypoints0"></a>`traefik/tcp/routers/<router_name>/entrypoints/0`            | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information.                                     | `ep1`                      |
| <a id="opt-traefiktcproutersrouter-nameentrypoints1"></a>`traefik/tcp/routers/<router_name>/entrypoints/1`            | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information.                                     | `ep2`                      |
| <a id="opt-traefiktcproutersmy-routerrule"></a>`traefik/tcp/routers/my-router/rule`                                   | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information.                                     | ``HostSNI(`example.com`)`` |
| <a id="opt-traefiktcproutersrouter-nameservice"></a>`traefik/tcp/routers/<router_name>/service`                       | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service) for more information.                                          | `myservice`                |
| <a id="opt-traefiktcproutersrouter-nametls"></a>`traefik/tcp/routers/<router_name>/tls`                               | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                  | `true`                     |
| <a id="opt-traefiktcproutersrouter-nametlscertresolver"></a>`traefik/tcp/routers/<router_name>/tls/certresolver`      | See [certResolver](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls#configuration-options) for more information.                   | `myresolver`               |
| <a id="opt-traefiktcproutersrouter-nametlsdomains0main"></a>`traefik/tcp/routers/<router_name>/tls/domains/0/main`    | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                  | `example.org`              |
| <a id="opt-traefiktcproutersrouter-nametlsdomains0sans0"></a>`traefik/tcp/routers/<router_name>/tls/domains/0/sans/0` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                  | `test.example.org`         |
| <a id="opt-traefiktcproutersrouter-nametlsdomains0sans1"></a>`traefik/tcp/routers/<router_name>/tls/domains/0/sans/1` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                  | `dev.example.org`          |
| <a id="opt-traefiktcproutersrouter-nametlsoptions"></a>`traefik/tcp/routers/<router_name>/tls/options`                | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                  | `foobar`                   |
| <a id="opt-traefiktcproutersrouter-nametlspassthrough"></a>`traefik/tcp/routers/<router_name>/tls/passthrough`        | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                  | `true`                     |
| <a id="opt-traefiktcproutersrouter-namepriority"></a>`traefik/tcp/routers/<router_name>/priority`                     | See [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#priority-calculation) for more information. | `42`                       |

#### Services

| Key (Path)                                                                                                                                     | Description                                                                                                                                                                                                                                                         | Value            |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| <a id="opt-traefiktcpservicesservice-nameloadbalancerservers0address"></a>`traefik/tcp/services/<service_name>/loadbalancer/servers/0/address` | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#servers-load-balancer) for more information.                                                                                                                          | `xx.xx.xx.xx:xx` |
| <a id="opt-traefiktcpservicesservice-nameloadbalancerservers0tls"></a>`traefik/tcp/services/<service_name>/loadbalancer/servers/0/tls`         | See [servers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#servers-load-balancer) for more information.                                                                                                                          | `true`           |
| <a id="opt-traefiktcpservicesservice-nameloadbalancerserverstransport"></a>`traefik/tcp/services/<service_name>/loadbalancer/serverstransport` | Allows to reference a ServersTransport resource that is defined either with the File provider or the Kubernetes CRD one.<br/>See [serverstransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport) for more information. | `foobar@file`    |
| <a id="opt-traefiktcpservicesservice-nameweightedservices0name"></a>`traefik/tcp/services/<service_name>/weighted/services/0/name`             | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#weighted-round-robin) for more information.                                                                                                                           | `foobar`         |
| <a id="opt-traefiktcpservicesservice-nameweightedservices0weight"></a>`traefik/tcp/services/<service_name>/weighted/services/0/weight`         | See [Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service#weighted-round-robin) for more information.                                                                                                                           | `42`             |

#### Middleware

##### Configuration Options

You can declare pieces of middleware using tags starting with `traefik/tcp/middlewares/{name-of-your-choice}.`, followed by the middleware type/options.

For example, to declare a middleware [`InFlightConn`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/inflightconn) named `test-inflightconn`, you'd write `traefik/tcp/middlewares/test-inflightconn/inflightconn/amount=10`.

More information about available middlewares in the dedicated [middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/overview).

| Key (Path)                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                           | Value    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <a id="opt-traefiktcpmiddlewaresmiddleware-namemiddleware-typemiddleware-option"></a>`traefik/tcp/middlewares/<middleware_name>/middleware_type/middleware_option` | With `middleware_type` the type of middleware (ex: `inflightconn`)<br/>and `middleware_option` the middleware option to set (ex for the middleware `inflightconn`: `amount`).<br/> More information about available middlewares in the dedicated [middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/overview). | `foobar` |

> **Conflicts in Declaration**
> If you declare multiple middleware with the same name but with different parameters, the middleware fails to be declared.

#### ServerTransport

##### Configuration Options

| Key (Path)                                                                                                                                    | Description                                                                                                                                                                                                                                                         | Value                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| <a id="opt-traefiktcpserversTransportsservers-transport-namest-option"></a>`traefik/tcp/serversTransports/<servers_transport_name>/st_option` | With  `st_option` the ServerTransport option to set (ex `maxIdleConnsPerHost`).<br/> More information about available options in the dedicated [ServerTransport section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport). | ServerTransport Options |

### UDP

You can declare UDP Routers and/or Services using KV.

#### Routers

| Key (Path)                                                                                                 | Description                                                                                                                                                  | Value    |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| <a id="opt-traefikudproutersrouter-nameentrypoints0"></a>`traefik/udp/routers/<router_name>/entrypoints/0` | See [UDP Router](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/routing/rules-priority#entrypoints) for more information.           | `foobar` |
| <a id="opt-traefikudproutersrouter-nameservice"></a>`traefik/udp/routers/<router_name>/service`            | See [UDP Router](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/routing/rules-priority#configuration-example) for more information. | `foobar` |

#### Services

| Key (Path)                                                                                                                                       | Description                                                                                                              | Value    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| <a id="opt-traefikudpservicesservice-nameloadBalancerserversnaddress"></a>`traefik/udp/services/<service_name>/loadBalancer/servers/<n>/address` | See [UDP Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information. | `foobar` |
| <a id="opt-traefikudpservicesservice-nameweightedservices0name"></a>`traefik/udp/services/<service_name>/weighted/services/0/name`               | See [UDP Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information. | `foobar` |
| <a id="opt-traefikudpservicesservice-nameweightedservices0weight"></a>`traefik/udp/services/<service_name>/weighted/services/0/weight`           | See [UDP Service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information. | `42`     |

## TLS

### TLS Options

With the KV provider, you configure some parameters of the TLS connection using the `tls/options` key.

For example, you can define a basic setup like this:

| Key (Path)                                                                                                          | Description                                                                                                                       | Value    |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <a id="opt-traefiktlsoptionsOptions0alpnProtocols0"></a>`traefik/tls/options/Options0/alpnProtocols/0`              | See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `foobar` |
| <a id="opt-traefiktlsoptionsOptions0cipherSuites0"></a>`traefik/tls/options/Options0/cipherSuites/0`                | See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `foobar` |
| <a id="opt-traefiktlsoptionsOptions0clientAuthcaFiles0"></a>`traefik/tls/options/Options0/clientAuth/caFiles/0`     | See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `foobar` |
| <a id="opt-traefiktlsoptionsOptions0disableSessiontickets"></a>`traefik/tls/options/Options0/disableSessiontickets` | See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information. | `true`   |

### TLS Default Generated Certificates

You can configure Traefik to use an ACME provider (like Let's Encrypt) to generate the default certificate.

The configuration to resolve the default certificate should be defined in a TLS store.

| Key (Path)                                                                                                                           | Description                                                                                                                                        | Value    |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <a id="opt-traefiktlsstoresStore0defaultGeneratedCertdomainmain"></a>`traefik/tls/stores/Store0/defaultGeneratedCert/domain/main`    | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#certificates-stores) for more information. | `foobar` |
| <a id="opt-traefiktlsstoresStore0defaultGeneratedCertdomainsans0"></a>`traefik/tls/stores/Store0/defaultGeneratedCert/domain/sans/0` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#certificates-stores) for more information  | `foobar` |
| <a id="opt-traefiktlsstoresStore0defaultGeneratedCertdomainsans1"></a>`traefik/tls/stores/Store0/defaultGeneratedCert/domain/sans/1` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#certificates-stores) for more information  | `foobar` |
| <a id="opt-traefiktlsstoresStore0defaultGeneratedCertresolver"></a>`traefik/tls/stores/Store0/defaultGeneratedCert/resolver`         | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#certificates-stores) for more information  | `foobar` |
