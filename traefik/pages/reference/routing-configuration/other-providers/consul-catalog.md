> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/other-providers/consul-catalog.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/other-providers/consul-catalog.md)

# Traefik & Consul Catalog

One of the best feature of Traefik is to delegate the routing configuration to the application level.
With Consul Catalog, Traefik can leverage tags attached to a service to generate routing rules.

> **Tags & sensitive data**
> We recommend to *not* use tags to store sensitive data (certificates, credentials, etc).
> Instead, we recommend to store sensitive data in a safer storage (secrets, file, etc).

## Configuration Examples

> **Configuring Consul Catalog & Deploying / Exposing one Service**
> Enabling the consul catalog provider
>
> **Structured (YAML)**
>
> ```yaml
> providers:
>   consulCatalog: {}
> ```
>
> **Structured (TOML)**
>
> ```toml
> [providers.consulCatalog]
> ```
>
> **CLI**
>
> ```bash
> --providers.consulcatalog=true
> ```
>
> Attaching tags to services (when registering a service in Consul)
>
> ```bash
> consul services register -name=my-service -tag="traefik.http.routers.my-service.rule=Host(`example.com`)"
> ```
>
> Or using a service definition file:
>
> ```json
> {
>   "service": {
>     "name": "my-service",
>     "tags": [
>       "traefik.http.routers.my-service.rule=Host(`example.com`)"
>     ]
>   }
> }
> ```
>
> **Specify a Custom Port for the Container**
> Forward requests for `http://example.com` to `http://<private IP of container>:12345`:
>
> ```json
> {
>   "service": {
>     "name": "my-service",
>     "tags": [
>       "traefik.http.routers.my-service.rule=Host(`example.com`)",
>       "traefik.http.routers.my-service.service=my-service",
>       "traefik.http.services.my-service.loadbalancer.server.port=12345"
>     ]
>   }
> }
> ```
>
> > **Traefik Connecting to the Wrong Port: `HTTP/502 Gateway Error`**
> > By default, Traefik uses the first exposed port of a container.
> >
> > Setting the tag `traefik.http.services.xxx.loadbalancer.server.port`
> > overrides that behavior.
> > **Specifying more than one router and service per container**
> > Forwarding requests to more than one port on a container requires referencing the service loadbalancer port definition using the service parameter on the router.
>
> In this example, requests are forwarded for `http://example-a.com` to `http://<private IP of container>:8000` in addition to `http://example-b.com` forwarding to `http://<private IP of container>:9000`:
>
> ```json
> {
>   "service": {
>     "name": "my-service",
>     "tags": [
>       "traefik.http.routers.www-router.rule=Host(`example-a.com`)",
>       "traefik.http.routers.www-router.service=www-service",
>       "traefik.http.services.www-service.loadbalancer.server.port=8000",
>       "traefik.http.routers.admin-router.rule=Host(`example-b.com`)",
>       "traefik.http.routers.admin-router.service=admin-service",
>       "traefik.http.services.admin-service.loadbalancer.server.port=9000"
>     ]
>   }
> }
> ```

## Configuration Options

> **tags**
> Tags are case-insensitive.
> **TLS Default Generated Certificates**
> To learn how to configure Traefik default generated certificate, refer to the [TLS Certificates](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#acme-default-certificate) page.

### General

Traefik creates, for each consul Catalog service, a corresponding [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) and [router](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority).

The Service automatically gets a server per instance in this consul Catalog service, and the router gets a default rule attached to it, based on the service name.

### Routers

To update the configuration of the Router automatically attached to the service, add tags starting with `traefik.http.routers.{name-of-your-choice}.` and followed by the option you want to change.

For example, to change the rule, you could add the tag ``traefik.http.routers.my-service.rule=Host(`example.com`)``.

#### Configuration Options

| Label                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                      | Value                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| <a id="opt-traefik-http-routers-router-name-rule"></a>`traefik.http.routers.<router_name>.rule`                                         | See [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rules) for more information.                                                                                                                                                                                      | ``Host(`example.com`)``            |
| <a id="opt-traefik-http-routers-router-name-ruleSyntax"></a>`traefik.http.routers.<router_name>.ruleSyntax`                             | See [ruleSyntax](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rulesyntax) for more information.<br/>RuleSyntax option is deprecated and will be removed in the next major version.<br/>Please do not use this field and rewrite the router rules to use the v3 syntax.    | `v3`                               |
| <a id="opt-traefik-http-routers-router-name-priority"></a>`traefik.http.routers.<router_name>.priority`                                 | See [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#priority-calculation) for more information.                                                                                                                                                                   | `42`                               |
| <a id="opt-traefik-http-routers-router-name-entrypoints"></a>`traefik.http.routers.<router_name>.entrypoints`                           | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information.                                                                                                                                                                                                        | `web,websecure`                    |
| <a id="opt-traefik-http-routers-router-name-middlewares"></a>`traefik.http.routers.<router_name>.middlewares`                           | See [middlewares overview](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview) for more information.                                                                                                                                                                                  | `auth,prefix,cb`                   |
| <a id="opt-traefik-http-routers-router-name-service"></a>`traefik.http.routers.<router_name>.service`                                   | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service) for more information.                                                                                                                                                                                             | `myservice`                        |
| <a id="opt-traefik-http-routers-router-name-tls"></a>`traefik.http.routers.<router_name>.tls`                                           | See [tls](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/overview) for more information.                                                                                                                                                                                                           | `true`                             |
| <a id="opt-traefik-http-routers-router-name-tls-certresolver"></a>`traefik.http.routers.<router_name>.tls.certresolver`                 | See [certResolver](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview) for more information.                                                                                                                                                                                 | `myresolver`                       |
| <a id="opt-traefik-http-routers-router-name-tls-domainsn-main"></a>`traefik.http.routers.<router_name>.tls.domains[n].main`             | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information.                                                                                                                                                                        | `example.org`                      |
| <a id="opt-traefik-http-routers-router-name-tls-domainsn-sans"></a>`traefik.http.routers.<router_name>.tls.domains[n].sans`             | See [domains](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition) for more information.                                                                                                                                                                        | `test.example.org,dev.example.org` |
| <a id="opt-traefik-http-routers-router-name-tls-options"></a>`traefik.http.routers.<router_name>.tls.options`                           | See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for more information, and [Conflicting TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options#conflicting-tls-options) when several routers serve the same host name. | `foobar`                           |
| <a id="opt-traefik-http-routers-router-name-observability-accesslogs"></a>`traefik.http.routers.<router_name>.observability.accesslogs` | The accessLogs option controls whether the router will produce access-logs.                                                                                                                                                                                                                                                      | `true`                             |
| <a id="opt-traefik-http-routers-router-name-observability-metrics"></a>`traefik.http.routers.<router_name>.observability.metrics`       | The metrics option controls whether the router will produce metrics.                                                                                                                                                                                                                                                             | `true`                             |
| <a id="opt-traefik-http-routers-router-name-observability-tracing"></a>`traefik.http.routers.<router_name>.observability.tracing`       | The tracing option controls whether the router will produce traces.                                                                                                                                                                                                                                                              | `true`                             |

### Services

To update the configuration of the Service automatically attached to the service,
add tags starting with `traefik.http.services.{name-of-your-choice}.`, followed by the option you want to change.

For example, to change the `passHostHeader` behavior,
you'd add the tag `traefik.http.services.{name-of-your-choice}.loadbalancer.passhostheader=false`.

#### Configuration Options

| Label                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                         | Value         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <a id="opt-traefik-http-services-service-name-loadbalancer-server-port"></a>`traefik.http.services.<service_name>.loadbalancer.server.port`                                           | Registers a port.<br/>Useful when the service exposes multiples ports.                                                                                                                                                                                                              | `8080`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-server-scheme"></a>`traefik.http.services.<service_name>.loadbalancer.server.scheme`                                       | Overrides the default scheme.                                                                                                                                                                                                                                                       | `http`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-server-weight"></a>`traefik.http.services.<service_name>.loadbalancer.server.weight`                                       | Overrides the default weight.                                                                                                                                                                                                                                                       | `42`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-serverstransport"></a>`traefik.http.services.<service_name>.loadbalancer.serverstransport`                                 | Allows to reference a ServersTransport resource that is defined either with the File provider or the Kubernetes CRD one.<br/>See [serverstransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/serverstransport) for more information. | `foobar@file` |
| <a id="opt-traefik-http-services-service-name-loadbalancer-passhostheader"></a>`traefik.http.services.<service_name>.loadbalancer.passhostheader`                                     |                                                                                                                                                                                                                                                                                     | `true`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-headers-header-name"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.headers.<header_name>` | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `foobar`      |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-hostname"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.hostname`                         | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `example.org` |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-interval"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.interval`                         | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `10`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-unhealthyinterval"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.unhealthyinterval`       | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `10`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-path"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.path`                                 | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `/foo`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-method"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.method`                             | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `foobar`      |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-status"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.status`                             | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `42`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-port"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.port`                                 | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `42`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-scheme"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.scheme`                             | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `http`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-timeout"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.timeout`                           | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `10`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-healthcheck-followredirects"></a>`traefik.http.services.<service_name>.loadbalancer.healthcheck.followredirects`           | See [health check](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#health-check) for more information.                                                                                                                              | `true`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie`                                       |                                                                                                                                                                                                                                                                                     | `true`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie-httponly"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie.httponly`                     |                                                                                                                                                                                                                                                                                     | `true`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie-name"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie.name`                             |                                                                                                                                                                                                                                                                                     | `foobar`      |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie-path"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie.path`                             |                                                                                                                                                                                                                                                                                     | `/foobar`     |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie-secure"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie.secure`                         |                                                                                                                                                                                                                                                                                     | `true`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie-samesite"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie.samesite`                     |                                                                                                                                                                                                                                                                                     | `none`        |
| <a id="opt-traefik-http-services-service-name-loadbalancer-sticky-cookie-maxage"></a>`traefik.http.services.<service_name>.loadbalancer.sticky.cookie.maxage`                         |                                                                                                                                                                                                                                                                                     | `42`          |
| <a id="opt-traefik-http-services-service-name-loadbalancer-responseforwarding-flushinterval"></a>`traefik.http.services.<service_name>.loadbalancer.responseforwarding.flushinterval` |                                                                                                                                                                                                                                                                                     | `10`          |

### Middleware

You can declare pieces of middleware using tags starting with `traefik.http.middlewares.{name-of-your-choice}.`, followed by the middleware type/options.

For example, to declare a middleware [`redirectscheme`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/redirectscheme) named `my-redirect`, you'd write `traefik.http.middlewares.my-redirect.redirectscheme.scheme: https`.

More information about available middlewares in the dedicated [middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview).

> **Declaring and Referencing a Middleware**
>
> ```yaml
> # ...
> # Declaring a middleware
> traefik.http.middlewares.my-redirect.redirectscheme.scheme=https
> # Referencing a middleware
> traefik.http.routers.my-service.middlewares=my-redirect
> ```
>
> **Conflicts in Declaration**
> If you declare multiple middleware with the same name but with different parameters, the middleware fails to be declared.

### TCP

You can declare TCP Routers, Middlewares and/or Services using tags.

> **Declaring TCP Routers and Services**
>
> ```yaml
> traefik.tcp.routers.my-router.rule=HostSNI(`example.com`)
> traefik.tcp.routers.my-router.tls=true
> traefik.tcp.services.my-service.loadbalancer.server.port=4123
> ```
>
> **TCP and HTTP**
> If you declare a TCP Router/Service, it will prevent Traefik from automatically creating an HTTP Router/Service (like it does by default if no TCP Router/Service is defined).
> You can declare both a TCP Router/Service and an HTTP Router/Service for the same consul service (but you have to do so manually).

#### TCP Routers

##### Configuration Options

| Label                                                                                                                     | Description                                                                                                                                                                                                                                             | Value                              |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| <a id="opt-traefik-tcp-routers-router-name-entrypoints"></a>`traefik.tcp.routers.<router_name>.entrypoints`               | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information.                                                                                                                               | `ep1,ep2`                          |
| <a id="opt-traefik-tcp-routers-router-name-rule"></a>`traefik.tcp.routers.<router_name>.rule`                             | See [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#rules) for more information.                                                                                                              | ``HostSNI(`example.com`)``         |
| <a id="opt-traefik-tcp-routers-router-name-ruleSyntax"></a>`traefik.tcp.routers.<router_name>.ruleSyntax`                 | configure the rule syntax to be used for parsing the rule on a per-router basis.<br/>RuleSyntax option is deprecated and will be removed in the next major version.<br/>Please do not use this field and rewrite the router rules to use the v3 syntax. | `v3`                               |
| <a id="opt-traefik-tcp-routers-router-name-priority"></a>`traefik.tcp.routers.<router_name>.priority`                     | See [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#priority-calculation) for more information.                                                                                           | `42`                               |
| <a id="opt-traefik-tcp-routers-router-name-service"></a>`traefik.tcp.routers.<router_name>.service`                       | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service) for more information.                                                                                                                                    | `myservice`                        |
| <a id="opt-traefik-tcp-routers-router-name-tls"></a>`traefik.tcp.routers.<router_name>.tls`                               | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                                                                                                            | `true`                             |
| <a id="opt-traefik-tcp-routers-router-name-tls-certresolver"></a>`traefik.tcp.routers.<router_name>.tls.certresolver`     | See [certResolver](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls#configuration-options) for more information.                                                                                                             | `myresolver`                       |
| <a id="opt-traefik-tcp-routers-router-name-tls-domainsn-main"></a>`traefik.tcp.routers.<router_name>.tls.domains[n].main` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                                                                                                            | `example.org`                      |
| <a id="opt-traefik-tcp-routers-router-name-tls-domainsn-sans"></a>`traefik.tcp.routers.<router_name>.tls.domains[n].sans` | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                                                                                                            | `test.example.org,dev.example.org` |
| <a id="opt-traefik-tcp-routers-router-name-tls-options"></a>`traefik.tcp.routers.<router_name>.tls.options`               | See [TLS](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls) for more information.                                                                                                                                            | `mysoptions`                       |
| <a id="opt-traefik-tcp-routers-router-name-tls-passthrough"></a>`traefik.tcp.routers.<router_name>.tls.passthrough`       | See [Passthrough](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/tls#opt-passthrough) for more information.                                                                                                                    | `true`                             |

#### TCP Services

##### Configuration Options

| Label                                                                                                                                               | Description                                                                                                                                                                                                                                                         | Value         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <a id="opt-traefik-tcp-services-service-name-loadbalancer-server-port"></a>`traefik.tcp.services.<service_name>.loadbalancer.server.port`           | Registers a port of the application.                                                                                                                                                                                                                                | `423`         |
| <a id="opt-traefik-tcp-services-service-name-loadbalancer-server-tls"></a>`traefik.tcp.services.<service_name>.loadbalancer.server.tls`             | Determines whether to use TLS when dialing with the backend.                                                                                                                                                                                                        | `true`        |
| <a id="opt-traefik-tcp-services-service-name-loadbalancer-serverstransport"></a>`traefik.tcp.services.<service_name>.loadbalancer.serverstransport` | Allows to reference a ServersTransport resource that is defined either with the File provider or the Kubernetes CRD one.<br/>See [serverstransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport) for more information. | `foobar@file` |

#### TCP Middleware

You can declare pieces of middleware using tags starting with `traefik.tcp.middlewares.{name-of-your-choice}.`, followed by the middleware type/options.

For example, to declare a middleware [`InFlightConn`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/inflightconn) named `test-inflightconn`, you'd write `traefik.tcp.middlewares.test-inflightconn.inflightconn.amount=10`.

More information about available middlewares in the dedicated [middlewares section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/middlewares/overview).

> **Declaring and Referencing a Middleware**
>
> ```yaml
> # ...
> # Declaring a middleware
> traefik.tcp.middlewares.test-inflightconn.inflightconn.amount=10
> # Referencing a middleware
> traefik.tcp.routers.my-service.middlewares=test-inflightconn
> ```
>
> **Conflicts in Declaration**
> If you declare multiple middleware with the same name but with different parameters, the middleware fails to be declared.

### UDP

You can declare UDP Routers and/or Services using tags.

> **Declaring UDP Routers and Services**
>
> ```yaml
> traefik.udp.routers.my-router.entrypoints=udp
> traefik.udp.services.my-service.loadbalancer.server.port=4123
> ```
>
> **UDP and HTTP**
> If you declare a UDP Router/Service, it will prevent Traefik from automatically creating an HTTP Router/Service (like it does by default if no UDP Router/Service is defined).
> You can declare both a UDP Router/Service and an HTTP Router/Service for the same consul service (but you have to do so manually).

#### UDP Routers

##### Configuration Options

| Label                                                                                                       | Description                                                                                                               | Value       |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------- |
| <a id="opt-traefik-udp-routers-router-name-entrypoints"></a>`traefik.udp.routers.<router_name>.entrypoints` | See [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) for more information. | `ep1,ep2`   |
| <a id="opt-traefik-udp-routers-router-name-service"></a>`traefik.udp.routers.<router_name>.service`         | See [service](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) for more information.      | `myservice` |

#### UDP Services

##### Configuration Options

| Label                                                                                                                                     | Description                          | Value |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----- |
| <a id="opt-traefik-udp-services-service-name-loadbalancer-server-port"></a>`traefik.udp.services.<service_name>.loadbalancer.server.port` | Registers a port of the application. | `423` |

### Specific Provider Options

| Label                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Value  |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| <a id="opt-traefik-enable"></a>`traefik.enable`                               | You can tell Traefik to consider (or not) the service by setting `traefik.enable` to true or false.<br/>This option overrides the value of `exposedByDefault`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `true` |
| <a id="opt-traefik-consulcatalog-connect"></a>`traefik.consulcatalog.connect` | You can tell Traefik to consider (or not) the service as a Connect capable one by setting `traefik.consulcatalog.connect` to true or false.<br/>This option overrides the value of `connectByDefault`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `true` |
| <a id="opt-traefik-consulcatalog-canary"></a>`traefik.consulcatalog.canary`   | When ConsulCatalog, in the context of a Nomad orchestrator, is a provider (of service registration) for Traefik, one might have the need to distinguish within Traefik between a [Canary](https://learn.hashicorp.com/tutorials/nomad/job-blue-green-and-canary-deployments#deploy-with-canaries) instance of a service, or a production one.<br/>For example if one does not want them to be part of the same load-balancer.<br/><br/>Therefore, this option, which is meant to be provided as one of the values of the `canary_tags` field in the Nomad [service stanza](https://www.nomadproject.io/docs/job-specification/service#canary_tags), allows Traefik to identify that the associated instance is a canary one. | `true` |

#### Port Lookup

Traefik is capable of detecting the port to use, by following the default consul Catalog flow.
That means, if you just expose lets say port `:1337` on the consul Catalog ui, traefik will pick up this port and use it.
