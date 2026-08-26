> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/headers.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/headers.md)

The Headers middleware manages the headers of requests and responses.

By default, the following headers are automatically added when proxying requests:

| Property                                                       | HTTP Header                    |
| -------------------------------------------------------------- | ------------------------------ |
| <a id="opt-Clients-IP"></a>Client's IP                         | `X-Forwarded-For`, `X-Real-Ip` |
| <a id="opt-Host"></a>Host                                      | `X-Forwarded-Host`             |
| <a id="opt-Port"></a>Port                                      | `X-Forwarded-Port`             |
| <a id="opt-Protocol"></a>Protocol                              | `X-Forwarded-Proto`            |
| <a id="opt-Proxy-Servers-Hostname"></a>Proxy Server's Hostname | `X-Forwarded-Server`           |

## Configuration Examples

### Adding Headers to the Request and the Response

The following example adds the `X-Script-Name` header to the proxied request and the `X-Custom-Response-Header` header to the response

**Structured (YAML)**

```yaml
http:
  middlewares:
    testHeader:
      headers:
        customRequestHeaders:
          X-Script-Name: "test"
        customResponseHeaders:
          X-Custom-Response-Header: "value"
```

**Structured (TOML)**

```toml
[http.middlewares]
  [http.middlewares.testHeader.headers]
    [http.middlewares.testHeader.headers.customRequestHeaders]
        X-Script-Name = "test"
    [http.middlewares.testHeader.headers.customResponseHeaders]
        X-Custom-Response-Header = "value"
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.testHeader.headers.customrequestheaders.X-Script-Name=test"
  - "traefik.http.middlewares.testHeader.headers.customresponseheaders.X-Custom-Response-Header=value"
```

**Tags**

```json
{
  //...
  "Tags": [
    "traefik.http.middlewares.testheader.headers.customrequestheaders.X-Script-Name=test",
    "traefik.http.middlewares.testheader.headers.customresponseheaders.X-Custom-Response-Header=value"
  ]
}

```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-header
spec:
  headers:
    customRequestHeaders:
      X-Script-Name: "test"
    customResponseHeaders:
      X-Custom-Response-Header: "value"
```

### Adding and Removing Headers

In the following example, requests are proxied with an extra `X-Script-Name` header while their `X-Custom-Request-Header` header gets stripped,
and responses are stripped of their `X-Custom-Response-Header` header.

**Structured (YAML)**

```yaml
http:
  middlewares:
    testHeader:
      headers:
        customRequestHeaders:
          X-Script-Name: "test" # Adds
          X-Custom-Request-Header: "" # Removes
        customResponseHeaders:
          X-Custom-Response-Header: "" # Removes
```

**Structured (TOML)**

```toml
[http.middlewares]
  [http.middlewares.testHeader.headers]
    [http.middlewares.testHeader.headers.customRequestHeaders]
        X-Script-Name = "test" # Adds
        X-Custom-Request-Header = "" # Removes
    [http.middlewares.testHeader.headers.customResponseHeaders]
        X-Custom-Response-Header = "" # Removes
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.testheader.headers.customrequestheaders.X-Script-Name=test"
  - "traefik.http.middlewares.testheader.headers.customrequestheaders.X-Custom-Request-Header="
  - "traefik.http.middlewares.testheader.headers.customresponseheaders.X-Custom-Response-Header="
```

**Tags**

```json
{
  "Tags" : [
    "traefik.http.middlewares.testheader.headers.customrequestheaders.X-Script-Name=test",
    "traefik.http.middlewares.testheader.headers.customrequestheaders.X-Custom-Request-Header=",
    "traefik.http.middlewares.testheader.headers.customresponseheaders.X-Custom-Response-Header="
  ]
}
```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-header
spec:
  headers:
    customRequestHeaders:
      X-Script-Name: "test" # Adds
      X-Custom-Request-Header: "" # Removes
    customResponseHeaders:
      X-Custom-Response-Header: "" # Removes
```

### Using Security Headers

Security-related headers (HSTS headers, Browser XSS filter, etc) can be managed similarly to custom headers as shown above.
This functionality makes it possible to easily use security features by adding headers.

**Structured (YAML)**

```yaml
http:
  middlewares:
    testHeader:
      headers:
        frameDeny: true
        browserXssFilter: true
```

**Structured (TOML)**

```toml
[http.middlewares]
  [http.middlewares.testHeader.headers]
    frameDeny = true
    browserXssFilter = true
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.testHeader.headers.framedeny=true"
  - "traefik.http.middlewares.testHeader.headers.browserxssfilter=true"
```

**Tags**

```json
{
  "Tags" : [
    "traefik.http.middlewares.testheader.headers.framedeny=true",
    "traefik.http.middlewares.testheader.headers.browserxssfilter=true"
  ]
}

```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-header
spec:
  headers:
    frameDeny: true
    browserXssFilter: true
```

### CORS Headers

CORS (Cross-Origin Resource Sharing) headers can be added and configured in a manner similar to the custom headers above.
This functionality allows for more advanced security features to quickly be set.
If CORS headers are set, then the middleware does not pass preflight requests to any service,
instead the response will be generated and sent back to the client directly.
Please note that the example below is by no means authoritative or exhaustive,
and should not be used as is for production.

**Structured (YAML)**

```yaml
http:
  middlewares:
    testHeader:
      headers:
        accessControlAllowMethods:
          - GET
          - OPTIONS
          - PUT
        accessControlAllowHeaders:
          - "*"
        accessControlAllowOriginList:
          - https://foo.bar.org
          - https://example.org
        accessControlMaxAge: 100
        addVaryHeader: true
```

**Structured (TOML)**

```toml
[http.middlewares]
  [http.middlewares.testHeader.headers]
    accessControlAllowMethods = ["GET", "OPTIONS", "PUT"]
    accessControlAllowHeaders = [ "*" ]
    accessControlAllowOriginList = ["https://foo.bar.org","https://example.org"]
    accessControlMaxAge = 100
    addVaryHeader = true
```

**Labels**

```yaml
labels:
  - "traefik.http.middlewares.testheader.headers.accesscontrolallowmethods=GET,OPTIONS,PUT"
  - "traefik.http.middlewares.testheader.headers.accesscontrolallowheaders=*"
  - "traefik.http.middlewares.testheader.headers.accesscontrolalloworiginlist=https://foo.bar.org,https://example.org"
  - "traefik.http.middlewares.testheader.headers.accesscontrolmaxage=100"
  - "traefik.http.middlewares.testheader.headers.addvaryheader=true"
```

**Tags**

```json
{
  "Tags" : [
    "traefik.http.middlewares.testheader.headers.accesscontrolallowmethods=GET,OPTIONS,PUT",
     "traefik.http.middlewares.testheader.headers.accesscontrolallowheaders=*",
    "traefik.http.middlewares.testheader.headers.accesscontrolalloworiginlist=https://foo.bar.org,https://example.org",
    "traefik.http.middlewares.testheader.headers.accesscontrolmaxage=100",
    "traefik.http.middlewares.testheader.headers.addvaryheader=true"
  ]
}
```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-header
spec:
  headers:
    accessControlAllowMethods:
      - "GET"
      - "OPTIONS"
      - "PUT"
    accessControlAllowHeaders:
      - "*"
    accessControlAllowOriginList:
      - "https://foo.bar.org"
      - "https://example.org"
    accessControlMaxAge: 100
    addVaryHeader: true
```

## Configuration Options

> **Warning**
> Custom headers will overwrite existing headers if they have identical names.
> **Note**
> The detailed documentation for security headers can be found in [unrolled/secure](https://github.com/unrolled/secure#available-options).
> \| Field                         | Description                                       | Default   | Required |
> \| ----------------------------- | ------------------------------------------------- | --------- | -------- |
> \| <a id="opt-customRequestHeaders"></a>`customRequestHeaders` | Lists the header names and values for requests.  | \[] | No |
> \| <a id="opt-customResponseHeaders"></a>`customResponseHeaders` | Lists the header names and values for responses. | \[] | No |
> \| <a id="opt-accessControlAllowCredentials"></a>`accessControlAllowCredentials` | Indicates if the request can include user credentials.| false     | No |
> \| <a id="opt-accessControlAllowHeaders"></a>`accessControlAllowHeaders` | Specifies allowed request header names.          | \[] | No |
> \| <a id="opt-accessControlAllowMethods"></a>`accessControlAllowMethods` | Specifies allowed request methods.               | \[] | No |
> \| <a id="opt-accessControlAllowOriginList"></a>`accessControlAllowOriginList` | Specifies allowed origins. More information [here](#accesscontrolalloworiginlist)      | \[]      | No |
> \| <a id="opt-accessControlAllowOriginListRegex"></a>`accessControlAllowOriginListRegex` | Allows origins matching regex. More information [here](#accesscontrolalloworiginlistregex)            | \[]      | No |
> \| <a id="opt-accessControlExposeHeaders"></a>`accessControlExposeHeaders` | Specifies which headers are safe to expose to the API of a CORS API specification.       |  \[]    | No |
> \| <a id="opt-accessControlMaxAge"></a>`accessControlMaxAge` | Time (in seconds) to cache preflight requests.   | 0         | No |
> \| <a id="opt-addVaryHeader"></a>`addVaryHeader` | Used in conjunction with `accessControlAllowOriginList` to determine whether the `Vary` header should be added or modified to demonstrate that server responses can differ based on the value of the origin header. | false     | No |
> \| <a id="opt-allowedHosts"></a>`allowedHosts` | Lists allowed domain names.                      | \[]      | No |
> \| <a id="opt-hostsProxyHeaders"></a>`hostsProxyHeaders` | Specifies header keys for proxied hostname.      | \[]      | No |
> \| <a id="opt-sslProxyHeaders"></a>`sslProxyHeaders` | Defines a set of header keys with associated values that would indicate a valid HTTPS request. It can be useful when using other proxies (example: `"X-Forwarded-Proto": "https"`).        |   {}   | No |
> \| <a id="opt-stsSeconds"></a>`stsSeconds` | Max age for `Strict-Transport-Security` header.    | -         | No |
> \| <a id="opt-stsIncludeSubdomains"></a>`stsIncludeSubdomains` | If set to `true`, the `includeSubDomains` directive is appended to the `Strict-Transport-Security` header.    | false     | No |
> \| <a id="opt-stsPreload"></a>`stsPreload` | Adds preload flag to STS header.                 | false     | No |
> \| <a id="opt-forceSTSHeader"></a>`forceSTSHeader` | Adds STS header for HTTP connections.            | false     | No |
> \| <a id="opt-frameDeny"></a>`frameDeny` | Set `frameDeny` to `true` to add the `X-Frame-Options` header with the value of `DENY`.                | false     | No |
> \| <a id="opt-customFrameOptionsValue"></a>`customFrameOptionsValue` | allows the `X-Frame-Options` header value to be set with a custom value. This overrides the `FrameDeny` option.  |    ""  | No |
> \| <a id="opt-contentTypeNosniff"></a>`contentTypeNosniff` | Set `contentTypeNosniff` to true to add the `X-Content-Type-Options` header with the value `nosniff`.  | false     | No |
> \| <a id="opt-browserXssFilter"></a>`browserXssFilter` | Set `browserXssFilter` to true to add the `X-XSS-Protection` header with the value `1; mode=block`.  | false     | No |
> \| <a id="opt-customBrowserXSSValue"></a>`customBrowserXSSValue` | allows the `X-XSS-Protection` header value to be set with a custom value. This overrides the `BrowserXssFilter` option.   | "" | No |
> \| <a id="opt-contentSecurityPolicy"></a>`contentSecurityPolicy` | allows the `Content-Security-Policy` header value to be set with a custom value.           | "" | No |
> \| <a id="opt-contentSecurityPolicyReportOnly"></a>`contentSecurityPolicyReportOnly` | allows the `Content-Security-Policy-Report-Only` header value to be set with a custom value.    |   ""  | No |
> \| <a id="opt-publicKey"></a>`publicKey` | Implements HPKP for certificate pinning.         |  "" | No |
> \| <a id="opt-referrerPolicy"></a>`referrerPolicy` | Controls forwarding of `Referer` header.         | "" | No |
> \| <a id="opt-permissionsPolicy"></a>`permissionsPolicy` | allows sites to control browser features.                   | ""      | No |
> \| <a id="opt-isDevelopment"></a>`isDevelopment` | Set `true` when developing to mitigate the unwanted effects of the `AllowedHosts`, SSL, and STS options. Usually testing takes place using HTTP, not HTTPS, and on `localhost`, not your production domain.    | false     | No |

### `accessControlAllowOriginList`

The `accessControlAllowOriginList` indicates whether a resource can be shared by returning different values.

A wildcard origin `*` can also be configured, and matches all requests.
If this value is set by a backend service, it will be overwritten by Traefik.

This value can contain a list of allowed origins.

More information including how to use the settings can be found at:

- [Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [w3](https://fetch.spec.whatwg.org/#http-access-control-allow-origin)
- [IETF](https://tools.ietf.org/html/rfc6454#section-7.1)

Traefik no longer supports the `null` value, as it is [no longer recommended as a return value](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null).

### `accessControlAllowOriginListRegex`

The `accessControlAllowOriginListRegex` option is the counterpart of the `accessControlAllowOriginList` option with regular expressions instead of origin values.
It allows all origins that contain any match of a regular expression in the `accessControlAllowOriginList`.

> **Tip**
> Regular expressions and replacements can be tested using online tools such as [Go Playground](https://play.golang.org/p/mWU9p-wk2ru) or the [Regex101](https://regex101.com/r/58sIgx/2).
>
> When defining a regular expression within YAML, any escaped character needs to be escaped twice: `example\.com` needs to be written as `example\\.com`.
