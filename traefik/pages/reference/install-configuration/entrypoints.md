> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/install-configuration/entrypoints.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/install-configuration/entrypoints.md)

Listening for Incoming Connections/Requests

### Configuration Example

**File (YAML)**

```yaml
entryPoints:
  web:
    address: :80
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https
          permanent: true
    observability:
      accessLogs: false
      metrics: false
      tracing: false

  websecure:
    address: :443
    http:
      tls: {}
      middlewares:
        - default-auth@kubernetescrd
        - default-strip@kubernetescrd
```

**File (TOML)**

```toml
[entryPoints]
  [entryPoints.web]
    address = ":80"
    [entryPoints.web.http]
      [entryPoints.web.http.redirections.entryPoint]
        to = "websecure"
        scheme = "https"
        permanent = true
    [entryPoints.web.observability]
      accessLogs = false
      metrics = false
      tracing = false

  [entryPoints.websecure]
    address = ":443"
    [entryPoints.websecure.http]
      middlewares = ["default-auth@kubernetescrd", "default-strip@kubernetescrd"]
      [entryPoints.websecure.http.tls]
```

**Helm Chart Values**

```yaml
## Values file
ports:
  web:
    port: :80
  websecure:
    port: :443
    tls:
      enabled: true
    middlewares:
      - default-auth@kubernetescrd
      - default-strip@kubernetescrd
additionalArguments:
  - --entryPoints.web.http.redirections.entryPoint.to=websecure
  - --entryPoints.web.http.redirections.entryPoint.scheme=https
  - --entryPoints.web.http.redirections.entryPoint.permanent=true
  - --entryPoints.web.observability.accessLogs=false
  - --entryPoints.web.observability.metrics=false
  - --entryPoints.web.observability.tracing=false
```

> **Tip**
> In the Helm Chart, the entryPoints `web` (port 80), `websecure` (port 443), `traefik` (port 8080) and `metrics` (port 9100) are created by default.
> The entryPoints `web`, `websecure` are exposed by default using a Service.
>
> The default behaviors can be overridden in the Helm Chart.

## Configuration Options

| Field                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default                                                            | Required |
| :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- | :------- |
| <a id="opt-address"></a>`address`                                                                                             | Define the port, and optionally the hostname, on which to listen for incoming connections and packets.<br /> It also defines the protocol to use (TCP or UDP).<br /> If no protocol is specified, the default is TCP. The format is:\`\[host]:port\[/tcp\|/udp]                                                                                                                                                                                                                                                                                                                                                                                                                     | -                                                                  | Yes      |
| <a id="opt-asDefault"></a>`asDefault`                                                                                         | Mark the `entryPoint` to be in the list of default `entryPoints`.<br /> `entryPoints`in this list are used (by default) on HTTP and TCP routers that do not define their own `entryPoints` option.<br /> More information [here](#asdefault).                                                                                                                                                                                                                                                                                                                                                                                                                                       | false                                                              | No       |
| <a id="opt-allowACMEByPass"></a>`allowACMEByPass`                                                                             | Enables handling of ACME TLS and HTTP challenges with custom routers instead of the internal ACME router.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | false                                                              | No       |
| <a id="opt-forwardedHeaders-connection"></a>`forwardedHeaders.`<br />`connection`                                             | List of Connection headers that are allowed to pass through the middleware chain before being removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -                                                                  | No       |
| <a id="opt-forwardedHeaders-insecure"></a>`forwardedHeaders.`<br />`insecure`                                                 | Set the insecure mode to always trust the forwarded headers information (`X-Forwarded-*`).<br />We recommend to use this option only for tests purposes, not in production.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | false                                                              | No       |
| <a id="opt-forwardedHeaders-trustedIPs"></a>`forwardedHeaders.`<br />`trustedIPs`                                             | Set the IPs or CIDR from where Traefik trusts the forwarded headers information (`X-Forwarded-*`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                  | No       |
| <a id="opt-forwardedHeaders-notAppendXForwardedFor"></a>`forwardedHeaders.`<br />`notAppendXForwardedFor`                     | When set to `true`, Traefik will not append the client's `RemoteAddr` to the `X-Forwarded-For` header. The existing header is preserved as-is. If no `X-Forwarded-For` header exists, none will be added.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | false                                                              | No       |
| <a id="opt-http-redirections-entryPoint-to"></a>`http.redirections.`<br />`entryPoint.to`                                     | The target element to enable (permanent) redirecting of all incoming requests on an entry point to another one. <br /> The target element can be an entry point name (ex: `websecure`), or a port (`:443`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                  | Yes      |
| <a id="opt-http-redirections-entryPoint-scheme"></a>`http.redirections.`<br />`entryPoint.scheme`                             | The target scheme to use for (permanent) redirection of all incoming requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | https                                                              | No       |
| <a id="opt-http-redirections-entryPoint-permanent"></a>`http.redirections.`<br />`entryPoint.permanent`                       | Enable permanent redirecting of all incoming requests on an entry point to another one changing the scheme. <br /> The target element, it can be an entry point name (ex: `websecure`), or a port (`:443`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | true                                                               | No       |
| <a id="opt-http-redirections-entryPoint-priority"></a>`http.redirections.`<br />`entryPoint.priority`                         | Default priority applied to the routers attached to the `entryPoint`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | MaxInt-1 (`2147483646` on 32-bit, `9223372036854775806` on 64-bit) | No       |
| <a id="opt-http-encodedCharacters"></a>`http.encodedCharacters`                                                               | Defines which encoded characters are allowed in the request path. More information [here](#encoded-characters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | false                                                              | No       |
| <a id="opt-http-encodedCharacters-allowEncodedSlash"></a>`http.encodedCharacters.`<br />`allowEncodedSlash`                   | Defines whether requests with encoded slash characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | true                                                               | No       |
| <a id="opt-http-encodedCharacters-allowEncodedBackSlash"></a>`http.encodedCharacters.`<br />`allowEncodedBackSlash`           | Defines whether requests with encoded back slash characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | true                                                               | No       |
| <a id="opt-http-encodedCharacters-allowEncodedNullCharacter"></a>`http.encodedCharacters.`<br />`allowEncodedNullCharacter`   | Defines whether requests with encoded null characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | true                                                               | No       |
| <a id="opt-http-encodedCharacters-allowEncodedSemicolon"></a>`http.encodedCharacters.`<br />`allowEncodedSemicolon`           | Defines whether requests with encoded semicolon characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | true                                                               | No       |
| <a id="opt-http-encodedCharacters-allowEncodedPercent"></a>`http.encodedCharacters.`<br />`allowEncodedPercent`               | Defines whether requests with encoded percent characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | true                                                               | No       |
| <a id="opt-http-encodedCharacters-allowEncodedQuestionMark"></a>`http.encodedCharacters.`<br />`allowEncodedQuestionMark`     | Defines whether requests with encoded question mark characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | true                                                               | No       |
| <a id="opt-http-encodedCharacters-allowEncodedHash"></a>`http.encodedCharacters.`<br />`allowEncodedHash`                     | Defines whether requests with encoded hash characters in the path are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | true                                                               | No       |
| <a id="opt-http-encodeQuerySemicolons"></a>`http.encodeQuerySemicolons`                                                       | Enable query semicolons encoding. <br /> Use this option to avoid non-encoded semicolons to be interpreted as query parameter separators by Traefik. <br /> When using this option, the non-encoded semicolons characters in query will be transmitted encoded to the backend.<br /> More information [here](#encodequerysemicolons).                                                                                                                                                                                                                                                                                                                                               | false                                                              | No       |
| <a id="opt-http-underscoreHeadersStrategy"></a>`http.underscoreHeadersStrategy`                                               | Defines the strategy to handle requests with headers with underscores (keep, delete, and reject).<br /> More information [here](#underscoreheadersstrategy).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | keep                                                               | No       |
| <a id="opt-http-sanitizePath"></a>`http.sanitizePath`                                                                         | Defines whether to enable the request path sanitization.<br /> More information [here](#sanitizepath).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | true                                                               | No       |
| <a id="opt-http-maxHeaderBytes"></a>`http.maxHeaderBytes`                                                                     | Set the maximum size of request headers in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 1048576                                                            | No       |
| <a id="opt-http-middlewares"></a>`http.middlewares`                                                                           | Set the list of middlewares that are prepended by default to the list of middlewares of each router associated to the named entry point. <br />More information [here](#httpmiddlewares).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -                                                                  | No       |
| <a id="opt-http-tls"></a>`http.tls`                                                                                           | Enable TLS on every router attached to the `entryPoint`. <br /> If no certificate are set, a default self-signed certificate is generated by Traefik. <br /> We recommend to not use self signed certificates in production.                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -                                                                  | No       |
| <a id="opt-http-tls-options"></a>`http.tls.options`                                                                           | Apply TLS options on every router attached to the `entryPoint`. <br /> The TLS options can be overidden per router. <br /> More information in the [dedicated section](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options).                                                                                                                                                                                                                                                                                                                                                                                                                   | -                                                                  | No       |
| <a id="opt-http-tls-certResolver"></a>`http.tls.certResolver`                                                                 | Apply a certificate resolver on every router attached to the `entryPoint`. <br /> The TLS options can be overidden per router. <br /> More information in the [dedicated section](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview).                                                                                                                                                                                                                                                                                                                                                                                          | -                                                                  | No       |
| <a id="opt-http2-maxConcurrentStreams"></a>`http2.`<br />`maxConcurrentStreams`                                               | Set the number of concurrent streams per connection that each client is allowed to initiate. <br /> The value must be greater than zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 250                                                                | No       |
| <a id="opt-http2-maxDecoderHeaderTableSize"></a>`http2.`<br />`maxDecoderHeaderTableSize`                                     | Set the maximum size of the decoder header compression table. This controls the maximum size of the header cache that the server is willing to maintain so the client does not need to repeatedly send the same header across requests in the same http2 connection. <br /> This value is only a maximum, the other end of the connection can use a lower size.                                                                                                                                                                                                                                                                                                                     | 4096                                                               | No       |
| <a id="opt-http2-maxEncoderHeaderTableSize"></a>`http2.`<br />`maxEncoderHeaderTableSize`                                     | Set the maximum size of the encoder header compression table. This controls the maximum size of the header cache that the server is willing to maintain when sending headers to the client, allowing the server to reduce the amount of duplicate headers it is sending in responses. <br /> This value is only a maximum, the other end of the connection can use a lower size.                                                                                                                                                                                                                                                                                                    | 4096                                                               | No       |
| <a id="opt-http3"></a>`http3`                                                                                                 | Enable HTTP/3 protocol on the `entryPoint`. <br /> HTTP/3 requires a TCP `entryPoint`. as HTTP/3 always starts as a TCP connection that then gets upgraded to UDP. In most scenarios, this `entryPoint` is the same as the one used for TLS traffic.<br /> More information [here](#http3).                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                  | No       |
| <a id="opt-http3-advertisedPort"></a>`http3.advertisedPort`                                                                   | Set the UDP port to advertise as the HTTP/3 authority. <br /> It defaults to the entryPoint's address port. <br /> It can be used to override the authority in the `alt-svc` header, for example if the public facing port is different from where Traefik is listening.                                                                                                                                                                                                                                                                                                                                                                                                            | -                                                                  | No       |
| <a id="opt-observability-accessLogs"></a>`observability.`<br />`accessLogs`                                                   | Defines whether a router attached to this EntryPoint produces access-logs by default. Nonetheless, a router defining its own observability configuration will opt-out from this default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | true                                                               | No       |
| <a id="opt-observability-metrics"></a>`observability.`<br />`metrics`                                                         | Defines whether a router attached to this EntryPoint produces metrics by default. Nonetheless, a router defining its own observability configuration will opt-out from this default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | true                                                               | No       |
| <a id="opt-observability-tracing"></a>`observability.`<br />`tracing`                                                         | Defines whether a router attached to this EntryPoint produces traces by default. Nonetheless, a router defining its own observability configuration will opt-out from this default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | true                                                               | No       |
| <a id="opt-observability-traceVerbosity"></a>`observability.`<br />`traceVerbosity`                                           | Defines the tracing verbosity level for routers attached to this EntryPoint. Possible values: `minimal` (default), `detailed`. Routers can override this value in their own observability configuration. <br /> More information [here](#traceverbosity).                                                                                                                                                                                                                                                                                                                                                                                                                           | minimal                                                            | No       |
| <a id="opt-proxyProtocol-trustedIPs"></a>`proxyProtocol.`<br />`trustedIPs`                                                   | Enable PROXY protocol with Trusted IPs. <br /> Traefik supports [PROXY protocol](https://www.haproxy.org/download/2.0/doc/proxy-protocol.txt) version 1 and 2. <br /> If PROXY protocol header parsing is enabled for the entry point, this entry point can accept connections with or without PROXY protocol headers. <br /> If the PROXY protocol header is passed, then the version is determined automatically.<br /> More information [here](#proxyprotocol-and-load-balancers).                                                                                                                                                                                               | -                                                                  | No       |
| <a id="opt-proxyProtocol-insecure"></a>`proxyProtocol.`<br />`insecure`                                                       | Enable PROXY protocol trusting every incoming connection. <br /> Every remote client address will be replaced (`trustedIPs`) won't have any effect). <br /> Traefik supports [PROXY protocol](https://www.haproxy.org/download/2.0/doc/proxy-protocol.txt) version 1 and 2. <br /> If PROXY protocol header parsing is enabled for the entry point, this entry point can accept connections with or without PROXY protocol headers. <br /> If the PROXY protocol header is passed, then the version is determined automatically.<br />We recommend to use this option only for tests purposes, not in production.<br /> More information [here](#proxyprotocol-and-load-balancers). | -                                                                  | No       |
| <a id="opt-reusePort"></a>`reusePort`                                                                                         | Enable `entryPoints` from the same or different processes listening on the same TCP/UDP port by utilizing the `SO_REUSEPORT` socket option. <br /> It also allows the kernel to act like a load balancer to distribute incoming connections between entry points.<br /> More information [here](#reuseport).                                                                                                                                                                                                                                                                                                                                                                        | false                                                              | No       |
| <a id="opt-transport-respondingTimeouts-readTimeout"></a>`transport.`<br />`respondingTimeouts.`<br />`readTimeout`           | Set the timeouts for incoming requests to the Traefik instance. This is the maximum duration for reading the entire request, including the body. Setting them has no effect for UDP `entryPoints`.<br /> If zero, no timeout exists. <br />Can be provided in a format supported by [time.ParseDuration](https://golang.org/pkg/time/#ParseDuration) or as raw values (digits).<br />If no units are provided, the value is parsed assuming seconds.                                                                                                                                                                                                                                | 60s (seconds)                                                      | No       |
| <a id="opt-transport-respondingTimeouts-writeTimeout"></a>`transport.`<br />`respondingTimeouts.`<br />`writeTimeout`         | Maximum duration before timing out writes of the response. <br /> It covers the time from the end of the request header read to the end of the response write. <br /> If zero, no timeout exists. <br />Can be provided in a format supported by [time.ParseDuration](https://golang.org/pkg/time/#ParseDuration) or as raw values (digits).<br />If no units are provided, the value is parsed assuming seconds.                                                                                                                                                                                                                                                                   | 0s (seconds)                                                       | No       |
| <a id="opt-transport-respondingTimeouts-idleTimeout"></a>`transport.`<br />`respondingTimeouts.`<br />`idleTimeout`           | Maximum duration an idle (keep-alive) connection will remain idle before closing itself. <br /> If zero, no timeout exists <br />Can be provided in a format supported by [time.ParseDuration](https://golang.org/pkg/time/#ParseDuration) or as raw values (digits).<br />If no units are provided, the value is parsed assuming seconds                                                                                                                                                                                                                                                                                                                                           | 180s (seconds)                                                     | No       |
| <a id="opt-transport-lifeCycle-graceTimeOut"></a>`transport.`<br />`lifeCycle.`<br />`graceTimeOut`                           | Set the duration to give active requests a chance to finish before Traefik stops. <br />Can be provided in a format supported by [time.ParseDuration](https://golang.org/pkg/time/#ParseDuration) or as raw values (digits).<br />If no units are provided, the value is parsed assuming seconds <br /> In this time frame no new requests are accepted.                                                                                                                                                                                                                                                                                                                            | 10s (seconds)                                                      | No       |
| <a id="opt-transport-lifeCycle-requestAcceptGraceTimeout"></a>`transport.`<br />`lifeCycle.`<br />`requestAcceptGraceTimeout` | Set the duration to keep accepting requests prior to initiating the graceful termination period (as defined by the `transportlifeCycle.graceTimeOut` option). <br /> This option is meant to give downstream load-balancers sufficient time to take Traefik out of rotation. <br />Can be provided in a format supported by [time.ParseDuration](https://golang.org/pkg/time/#ParseDuration) or as raw values (digits).<br />If no units are provided, the value is parsed assuming seconds                                                                                                                                                                                         | 0s (seconds)                                                       | No       |
| <a id="opt-transport-keepAliveMaxRequests"></a>`transport.`<br />`keepAliveMaxRequests`                                       | Set the maximum number of requests Traefik can handle before sending a `Connection: Close` header to the client (for HTTP2, Traefik sends a GOAWAY). <br /> Zero means no limit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 0                                                                  | No       |
| <a id="opt-transport-keepAliveMaxTime"></a>`transport.`<br />`keepAliveMaxTime`                                               | Set the maximum duration Traefik can handle requests before sending a `Connection: Close` header to the client (for HTTP2, Traefik sends a GOAWAY). Zero means no limit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0s (seconds)                                                       | No       |
| <a id="opt-udp-timeout"></a>`udp.timeout`                                                                                     | Define how long to wait on an idle session before releasing the related resources. <br />The Timeout value must be greater than zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 3s (seconds)                                                       | No       |

### asDefault

If there is no entryPoint with the `asDefault` option set to `true`, then the
list of default entryPoints includes all HTTP/TCP entryPoints.

If at least one entryPoint has the `asDefault` option set to `true`,
then the list of default entryPoints includes only entryPoints that have the
`asDefault` option set to `true`.

Some built-in entryPoints are always excluded from the list, namely: `traefik`.

The `asDefault` option has no effect on UDP entryPoints.
When a UDP router does not define the entryPoints option, it is attached to all
available UDP entryPoints.

### allowACMEByPass

By default, Traefik creates an internal router with the highest possible priority (`MaxInt`) to handle
ACME HTTP and TLS challenges. This ensures that certificate challenges always succeed,
but it also prevents any user-defined router from intercepting challenge requests on the same entrypoint.

When `allowACMEByPass` is set to `true` on an entrypoint:

- The internal ACME HTTP challenge router is created **without** an explicit high priority,
  allowing user-defined routers to handle challenge requests instead.
- The TLS-ALPN challenge passthrough is enabled on the entrypoint,
  allowing user-defined TLS routers to handle TLS challenges.

This is useful when you need custom handling of ACME challenges,
for example when using a dedicated service to solve HTTP-01 or TLS-ALPN-01 challenges.

> **Note**
> When no TLS challenge resolver is configured, `allowACMEByPass` is implicitly enabled
> for TLS passthrough on all entrypoints.
> **Note**
> When `allowACMEByPass` is enabled and the entrypoint has an HTTP redirect configured
> (via `http.redirections.entryPoint`), the redirect router automatically excludes
> the ACME challenge path (`/.well-known/acme-challenge/`).
> This allows user-defined ACME challenge routers to handle challenge requests
> without being overridden by the redirect.
> **File (YAML)**

```yaml
entryPoints:
  web:
    address: ":80"
    allowACMEByPass: true
```

**File (TOML)**

```toml
[entryPoints.web]
  address = ":80"
  allowACMEByPass = true
```

**CLI**

```bash
--entryPoints.web.address=:80
--entryPoints.web.allowACMEByPass=true
```

### http.middlewares

- You can attach a list of [middlewares](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview)
  to each entryPoint.
- The middlewares will take effect only if the rule matches, and before forwarding
  the request to the service.
- Middlewares are applied in the same order as their declaration.
- Middlewares are applied by default to every router exposed through the EntryPoint
  (the Middlewares declared on the [IngressRoute](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/ingressroute#middleware)
  or the [Ingress](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/ingress#on-ingress)
  are applied after the ones declared on the Entrypoint)
- Middlewares must be referenced by their **fully qualified name**, including the
  [provider namespace](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview#provider-namespace)
  suffix (`<middleware-name>@<provider-name>`). The exact value depends on the
  provider that declares the middleware:

  | Provider                                      | Format                                                   | Example                      |
  | --------------------------------------------- | -------------------------------------------------------- | ---------------------------- |
  | <a id="opt-File"></a>File                     | `<middleware-name>@file`                                 | `strip@file`                 |
  | <a id="opt-Docker"></a>Docker                 | `<middleware-name>@docker`                               | `strip@docker`               |
  | <a id="opt-Kubernetes-CRD"></a>Kubernetes CRD | `<middleware-namespace>-<middleware-name>@kubernetescrd` | `default-auth@kubernetescrd` |

**File (YAML)**

```yaml
entryPoints:
  web:
    address: :80
    http:
      middlewares:
        - default-auth@kubernetescrd
        - strip@file
```

**Helm Chart Values**

```yaml
ports:
  web:
    port: :80
    http:
      middlewares:
        - default-auth@kubernetescrd
        - strip@file
```

### encodeQuerySemicolons

Behavior examples:

| EncodeQuerySemicolons         | Request Query        | Resulting Request Query |
| ----------------------------- | -------------------- | ----------------------- |
| <a id="opt-false"></a>false   | foo=bar;baz=bar      | foo=bar\&baz=bar        |
| <a id="opt-true"></a>true     | foo=bar;baz=bar      | foo=bar%3Bbaz=bar       |
| <a id="opt-false-2"></a>false | foo=bar\&baz=bar;foo | foo=bar\&baz=bar\&foo   |
| <a id="opt-true-2"></a>true   | foo=bar\&baz=bar;foo | foo=bar\&baz=bar%3Bfoo  |

### underscoreHeadersStrategy

*Optional, Default=keep*

The `underscoreHeadersStrategy` option defines how request headers with underscores in their names are handled before routing:

- `keep`: request headers with underscores are forwarded as is (default).
- `delete`: any request header whose name contains an underscore character is silently removed from the request.
- `reject`: any request carrying a header whose name contains an underscore character is rejected with a `400 Bad Request` response.

Underscores are valid characters in HTTP header names, but Go canonicalizes header names only on dashes, so a middleware
managing a header in its dash form (e.g. `X-Auth-User` with the ForwardAuth `authResponseHeaders` option) cannot see or remove an underscore variant (e.g. `X_Auth_User`).

> **Security**
> Backends mapping both forms to the same variable (CGI, WSGI, PHP, ...) can be spoofed with the underscore variant of a managed header.
> Setting the `underscoreHeadersStrategy` option to `delete` or `reject` is recommended when such backends are exposed.
> See the [Headers with Underscores](https://doc.traefik.io/traefik/v3.7/security/header-underscores) security documentation for more details.
> **File (YAML)**

```yaml
entryPoints:
  websecure:
    address: ':443'
    http:
      underscoreHeadersStrategy: delete
```

**File (TOML)**

```toml
[entryPoints.websecure]
  address = ":443"

  [entryPoints.websecure.http]
    underscoreHeadersStrategy = "delete"
```

**CLI**

```bash
--entryPoints.websecure.address=:443
--entryPoints.websecure.http.underscoreHeadersStrategy=delete
```

### sanitizePath

The `sanitizePath` option defines whether to enable the request path sanitization.
When disabled, the incoming request path is passed to the backend as is.
This can be useful when dealing with legacy clients that are not url-encoding data in the request path.
For example, as base64 uses the “/” character internally,
if it's not url encoded,
it can lead to unsafe routing when the `sanitizePath` option is set to `false`.

> **Security**
> Setting the sanitizePath option to false is not safe.
> Ensure every request is properly url encoded instead.

#### Examples

| SanitizePath                  | Request Path    | Resulting Request Path |
| ----------------------------- | --------------- | ---------------------- |
| <a id="opt-false-3"></a>false | /./foo/bar      | /./foo/bar             |
| <a id="opt-true-3"></a>true   | /./foo/bar      | /foo/bar               |
| <a id="opt-false-4"></a>false | /foo/../bar     | /foo/../bar            |
| <a id="opt-true-4"></a>true   | /foo/../bar     | /bar                   |
| <a id="opt-false-5"></a>false | /foo/bar//      | /foo/bar//             |
| <a id="opt-true-5"></a>true   | /foo/bar//      | /foo/bar/              |
| <a id="opt-false-6"></a>false | /./foo/../bar// | /./foo/../bar//        |
| <a id="opt-true-6"></a>true   | /./foo/../bar// | /bar/                  |

### Encoded Characters

You can configure Traefik to control the handling of encoded characters in request paths for security purposes.
By default, Traefik do not reject requests with path containing certain encoded characters that could be used in path traversal or other security attacks.

> **Info**
> This check is not done against the request query parameters,
> but only against the request path as defined in [RFC3986 section-3](https://datatracker.ietf.org/doc/html/rfc3986#section-3).
> **Security Considerations**
> When your backend is not fully compliant with [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and notably decode encoded reserved characters in the requets path,
> it is recommended to set these options to `false` to avoid split-view situation and helps prevent path traversal attacks or other malicious attempts to bypass security controls.
> Here is the list of the encoded characters that are allowed by default:

| Encoded Character                       | Character               |
| --------------------------------------- | ----------------------- |
| <a id="opt-2f-or-2F"></a>`%2f` or `%2F` | `/` (slash)             |
| <a id="opt-5c-or-5C"></a>`%5c` or `%5C` | `\` (backslash)         |
| <a id="opt-00"></a>`%00`                | `NULL` (null character) |
| <a id="opt-3b-or-3B"></a>`%3b` or `%3B` | `;` (semicolon)         |
| <a id="opt-25"></a>`%25`                | `%` (percent)           |
| <a id="opt-3f-or-3F"></a>`%3f` or `%3F` | `?` (question mark)     |
| <a id="opt-23"></a>`%23`                | `#` (hash)              |

### Forwarded Headers

You can configure Traefik to trust the forwarded headers information (`X-Forwarded-*`).

> **`forwardedHeaders.trustedIPs`**
> Trusting Forwarded Headers from specific IPs.
>
> **File (YAML)**
>
> ```yaml
> ## Static configuration
> entryPoints:
>   web:
>     address: ":80"
>     forwardedHeaders:
>       trustedIPs:
>         - "127.0.0.1/32"
>         - "192.168.1.7"
> ```
>
> **File (TOML)**
>
> ```toml
> ## Static configuration
> [entryPoints]
>   [entryPoints.web]
>     address = ":80"
>
>     [entryPoints.web.forwardedHeaders]
>       trustedIPs = ["127.0.0.1/32", "192.168.1.7"]
> ```
>
> **CLI**
>
> ```bash
> ## Static configuration
> --entryPoints.web.address=:80
> --entryPoints.web.forwardedHeaders.trustedIPs=127.0.0.1/32,192.168.1.7
> ```
>
> **`forwardedHeaders.insecure`**
> Insecure Mode (Always Trusting Forwarded Headers).
>
> **File (YAML)**
>
> ```yaml
> ## Static configuration
> entryPoints:
>   web:
>     address: ":80"
>     forwardedHeaders:
>       insecure: true
> ```
>
> **File (TOML)**
>
> ```toml
> ## Static configuration
> [entryPoints]
>   [entryPoints.web]
>     address = ":80"
>
>     [entryPoints.web.forwardedHeaders]
>       insecure = true
> ```
>
> **CLI**
>
> ```bash
> ## Static configuration
> --entryPoints.web.address=:80
> --entryPoints.web.forwardedHeaders.insecure
> ```
>
> **`forwardedHeaders.connection`**
> As per RFC7230, Traefik respects the Connection options from the client request.
> By doing so, it removes any header field(s) listed in the request Connection header and the Connection header field itself when empty.
> The removal happens as soon as the request is handled by Traefik,
> thus the removed headers are not available when the request passes through the middleware chain.
> The `connection` option lists the Connection headers allowed to passthrough the middleware chain before their removal.
>
> **File (YAML)**
>
> ```yaml
> ## Static configuration
> entryPoints:
>   web:
>     address: ":80"
>     forwardedHeaders:
>       connection:
>         - foobar
> ```
>
> **File (TOML)**
>
> ```toml
> ## Static configuration
> [entryPoints]
>   [entryPoints.web]
>     address = ":80"
>
>     [entryPoints.web.forwardedHeaders]
>       connection = ["foobar"]
> ```
>
> **CLI**
>
> ```bash
> ## Static configuration
> --entryPoints.web.address=:80
> --entryPoints.web.forwardedHeaders.connection=foobar
> ```

### HTTP3

As HTTP/3 actually uses UDP, when Traefik is configured with a TCP `entryPoint`
on port N with HTTP/3 enabled, the underlying HTTP/3 server that is started
automatically listens on UDP port N too. As a consequence,
it means port N cannot be used by another UDP `entryPoint`.
Since HTTP/3 requires the use of TLS,
only routers with TLS enabled will be usable with HTTP/3.

### ProxyProtocol and Load-Balancers

The replacement of the remote client address will occur only for IP addresses listed in `trustedIPs`. This is where you specify your load balancer IPs or CIDR ranges.

When queuing Traefik behind another load-balancer, make sure to configure
PROXY protocol on both sides.
Not doing so could introduce a security risk in your system (enabling request forgery).

### reusePort

#### Examples

Many processes on the same EntryPoint:

**File (YAML)**

```yaml
  entryPoints:
    web:
      address: ":80"
      reusePort: true
```

**Helm Chart Values**

```yaml
  ## Values file
  additionalArguments:
    - --entryPoints.web.reusePort=true
```

Many processes on the same EntryPoint on another host:

**File (YAML)**

```yaml
entryPoints:
  web:
    address: ":80"
    reusePort: true
  privateWeb:
    address: "192.168.1.2:80"
    reusePort: true
```

**Helm Chart Values**

```yaml
additionalArguments:
  - --entryPoints.web.reusePort=true
  - --entryPoints.privateWeb.address=192.168.1.2:80
  - --entryPoints.privateWeb.reusePort=true
```

#### Supported platforms

The `reusePort` option currently works only on Linux, FreeBSD, OpenBSD and Darwin.
It will be ignored on other platforms.

There is a known bug in the Linux kernel that may cause unintended TCP connection
failures when using the `reusePort` option. For more details, see [here](https://lwn.net/Articles/853637/).

#### Canary deployment

Use the `reusePort` option with the other option `transport.lifeCycle.gracetimeout`
to do
canary deployments against Traefik itself. Like upgrading Traefik version
or reloading the static configuration without any service downtime.

### traceVerbosity

`observability.traceVerbosity` defines the tracing verbosity level for routers attached to this EntryPoint.
Routers can override this value in their own observability configuration.

Possible values are:

- `minimal`: produces a single server span and one client span for each request processed by a router.
- `detailed`: enables the creation of additional spans for each middleware executed for each request processed by a router.
