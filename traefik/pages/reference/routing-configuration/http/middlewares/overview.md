> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/middlewares/overview.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/middlewares/overview.md)

# HTTP Middleware Overview

Attached to [routers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/router) or [services](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service), pieces of middleware are a means of tweaking the requests before they are sent to your backend servers (or before the answer is sent to the clients).

Middlewares can be attached at two levels:

- **Router-level:** Applied to all requests matching the router's rule, before forwarding to the service.
- **Service-level:** Applied to all requests handled by the service, regardless of which router forwards the request. See [service middlewares](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/load-balancing/service#middlewares).

When both are configured, router middlewares execute first, followed by service middlewares.

There are several available middlewares in Traefik, some can modify the request, the headers, some are in charge of redirections, some add authentication, and so on.

Middlewares that use the same protocol can be combined into chains to fit every scenario.

> **Provider Namespace**
> Be aware of the concept of Providers Namespace described in the [Configuration Discovery](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview#provider-namespace) section.
> It also applies to Middlewares.

## Available HTTP Middlewares

| Middleware                                                                                                                                                    | Purpose                                                         | Area                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------- |
| <a id="opt-AddPrefix"></a>[AddPrefix](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/addprefix)                         | Adds a Path Prefix                                              | Path Modifier               |
| <a id="opt-BasicAuth"></a>[BasicAuth](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/basicauth)                         | Adds Basic Authentication                                       | Security, Authentication    |
| <a id="opt-Buffering"></a>[Buffering](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/buffering)                         | Buffers the request/response                                    | Request Lifecycle           |
| <a id="opt-Chain"></a>[Chain](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/chain)                                     | Combines multiple pieces of middleware                          | Misc                        |
| <a id="opt-CircuitBreaker"></a>[CircuitBreaker](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/circuitbreaker)          | Prevents calling unhealthy services                             | Request Lifecycle           |
| <a id="opt-Compress"></a>[Compress](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/compress)                            | Compresses the response                                         | Content Modifier            |
| <a id="opt-ContentType"></a>[ContentType](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/contenttype)                   | Handles Content-Type auto-detection                             | Misc                        |
| <a id="opt-DigestAuth"></a>[DigestAuth](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/digestauth)                      | Adds Digest Authentication                                      | Security, Authentication    |
| <a id="opt-EncodedCharacters"></a>[EncodedCharacters](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/encodedcharacters) | Defines allowed reserved encoded characters in the request path | Security, Request Lifecycle |
| <a id="opt-Errors"></a>[Errors](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/errorpages)                              | Defines custom error pages                                      | Request Lifecycle           |
| <a id="opt-ForwardAuth"></a>[ForwardAuth](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/forwardauth)                   | Delegates Authentication                                        | Security, Authentication    |
| <a id="opt-GrpcWeb"></a>[GrpcWeb](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/grpcweb)                               | Converts gRPC Web requests to HTTP/2 gRPC requests.             | Request                     |
| <a id="opt-Headers"></a>[Headers](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/headers)                               | Adds / Updates headers                                          | Security                    |
| <a id="opt-IPAllowList"></a>[IPAllowList](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/ipallowlist)                   | Limits the allowed client IPs                                   | Security, Request lifecycle |
| <a id="opt-InFlightReq"></a>[InFlightReq](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/inflightreq)                   | Limits the number of simultaneous connections                   | Security, Request lifecycle |
| <a id="opt-PassTLSClientCert"></a>[PassTLSClientCert](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/passtlsclientcert) | Adds Client Certificates in a Header                            | Security                    |
| <a id="opt-RateLimit"></a>[RateLimit](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/ratelimit)                         | Limits the call frequency                                       | Security, Request lifecycle |
| <a id="opt-RedirectScheme"></a>[RedirectScheme](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/redirectscheme)          | Redirects based on scheme                                       | Request lifecycle           |
| <a id="opt-RedirectRegex"></a>[RedirectRegex](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/redirectregex)             | Redirects based on regex                                        | Request lifecycle           |
| <a id="opt-ReplacePath"></a>[ReplacePath](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/replacepath)                   | Changes the path of the request                                 | Path Modifier               |
| <a id="opt-ReplacePathRegex"></a>[ReplacePathRegex](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/replacepathregex)    | Changes the path of the request                                 | Path Modifier               |
| <a id="opt-Retry"></a>[Retry](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/retry)                                     | Automatically retries in case of error                          | Request lifecycle           |
| <a id="opt-StripPrefix"></a>[StripPrefix](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/stripprefix)                   | Changes the path of the request                                 | Path Modifier               |
| <a id="opt-StripPrefixRegex"></a>[StripPrefixRegex](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/stripprefixregex)    | Changes the path of the request                                 | Path Modifier               |

## Community Middlewares

Please take a look at the community-contributed plugins in the [plugin catalog](https://plugins.traefik.io/plugins).
