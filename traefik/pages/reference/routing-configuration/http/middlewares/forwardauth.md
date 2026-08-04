> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/middlewares/forwardauth.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/middlewares/forwardauth.md)

The `forwardAuth` middleware delegates authentication to an external service.
If the service answers with a 2XX code, access is granted, and the original request is performed.
Otherwise, the response from the authentication server is returned.

## Configuration Example

**Structured (YAML)**

```yaml
# Forward authentication to example.com
http:
  middlewares:
    test-auth:
      forwardAuth:
        address: "https://example.com/auth"
```

**Structured (TOML)**

```toml
# Forward authentication to example.com
[http.middlewares]
  [http.middlewares.test-auth.forwardAuth]
    address = "https://example.com/auth"
```

**Labels**

```yaml
# Forward authentication to example.com
labels:
  - "traefik.http.middlewares.test-auth.forwardauth.address=https://example.com/auth"
```

**Tags**

```json
// Forward authentication to example.com
{
  "Tags" : [
    "traefik.http.middlewares.test-auth.forwardauth.address=https://example.com/auth"
  ]
}
```

**Kubernetes**

```yaml
# Forward authentication to example.com
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-auth
spec:
  forwardAuth:
    address: https://example.com/auth
```

## Configuration Options

| Field                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                   | Default | Required |
| :------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-address"></a>`address`                                   | Authentication server address.                                                                                                                                                                                                                                                                                                                                                                                                | ""      | Yes      |
| <a id="opt-trustForwardHeader"></a>`trustForwardHeader`             | Trust all `X-Forwarded-*` headers.                                                                                                                                                                                                                                          <br/>The trustForwardHeader option is deprecated and will be removed in the next major version. <br/>More information [here](#trustforwardheader) | -       | No       |
| <a id="opt-authResponseHeaders"></a>`authResponseHeaders`           | List of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.                                                                                                                                                                                                                                                                                     | \[]     | No       |
| <a id="opt-authResponseHeadersRegex"></a>`authResponseHeadersRegex` | Regex to match by the headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex.<br /> More information [here](#authresponseheadersregex).                                                                                                                                                                                                       | ""      | No       |
| <a id="opt-authRequestHeaders"></a>`authRequestHeaders`             | List of the headers to copy from the request to the authentication server. <br /> It allows filtering headers that should not be passed to the authentication server. <br /> If not set or empty, then all request headers are passed.                                                                                                                                                                                        | \[]     | No       |
| <a id="opt-addAuthCookiesToResponse"></a>`addAuthCookiesToResponse` | List of cookies to copy from the authentication server to the response, replacing any existing conflicting cookie from the forwarded response.<br /> Please note that all backend cookies matching the configured list will not be added to the response.                                                                                                                                                                     | \[]     | No       |
| <a id="opt-forwardBody"></a>`forwardBody`                           | Sets the `forwardBody` option to `true` to send the Body. As body is read inside Traefik before forwarding, this breaks streaming.                                                                                                                                                                                                                                                                                            | false   | No       |
| <a id="opt-maxBodySize"></a>`maxBodySize`                           | Set the `maxBodySize` to limit the body size in bytes. If body is bigger than this, it returns a 401 (unauthorized). If left unset, the request body size is unrestricted which can have performance or security implications. <br/>More information [here](#maxbodysize).                                                                                                                                                    | -1      | No       |
| <a id="opt-maxResponseBodySize"></a>`maxResponseBodySize`           | Set the `maxResponseBodySize` to limit the response body size from the authentication server in bytes. If the response body exceeds this limit, it returns a 401 (unauthorized). If left unset, the response body size is unrestricted which can have performance or security implications. <br/>More information [here](#maxresponsebodysize).                                                                               | -       | No       |
| <a id="opt-headerField"></a>`headerField`                           | Defines a header field to store the authenticated user.                                                                                                                                                                                                                                                                                                                                                                       | ""      | No       |
| <a id="opt-preserveLocationHeader"></a>`preserveLocationHeader`     | Defines whether to forward the Location header to the client as is or prefix it with the domain name of the authentication server.                                                                                                                                                                                                                                                                                            | false   | No       |
| <a id="opt-preserveRequestMethod"></a>`preserveRequestMethod`       | Defines whether to preserve the original request method while forwarding the request to the authentication server.                                                                                                                                                                                                                                                                                                            | false   | No       |
| <a id="opt-authSigninURL"></a>`authSigninURL`                       | Specifies the URL to redirect to when the authentication server returns 401 Unauthorized.                                                                                                                                                                                                                                                                                                                                     | ""      | No       |
| <a id="opt-tls-ca"></a>`tls.ca`                                     | Sets the path to the certificate authority used for the secured connection to the authentication server, it defaults to the system bundle.                                                                                                                                                                                                                                                                                    | ""      | No       |
| <a id="opt-tls-cert"></a>`tls.cert`                                 | Sets the path to the public certificate used for the secure connection to the authentication server. When using this option, setting the key option is required.                                                                                                                                                                                                                                                              | ""      | No       |
| <a id="opt-tls-key"></a>`tls.key`                                   | Sets the path to the private key used for the secure connection to the authentication server. When using this option, setting the `cert` option is required.                                                                                                                                                                                                                                                                  | ""      | No       |
| <a id="opt-tls-caSecret"></a>`tls.caSecret`                         | Defines the secret that contains the certificate authority used for the secured connection to the authentication server, it defaults to the system bundle. **This option is only available for the Kubernetes CRD**.                                                                                                                                                                                                          |         | No       |
| <a id="opt-tls-certSecret"></a>`tls.certSecret`                     | Defines the secret that contains both the private and public certificates used for the secure connection to the authentication server. **This option is only available for the Kubernetes CRD**.                                                                                                                                                                                                                              |         | No       |
| <a id="opt-tls-insecureSkipVerify"></a>`tls.insecureSkipVerify`     | During TLS connections, if this option is set to `true`, the authentication server will accept any certificate presented by the server regardless of the host names it covers.                                                                                                                                                                                                                                                | false   | No       |

### authResponseHeadersRegex

It allows partial matching of the regular expression against the header key.

The start of string (`^`) and end of string (`$`) anchors should be used to ensure a full match against the header key.

Regular expressions and replacements can be tested using online tools such as [Go Playground](https://play.golang.org/p/mWU9p-wk2ru) or the [Regex101](https://regex101.com/r/58sIgx/2).

### maxBodySize

The `maxBodySize` option controls the maximum size of request bodies that will be forwarded to the authentication server.

**⚠️ Important Security Consideration**

By default, `maxBodySize` is not set (value: -1), which means request body size is unlimited. This can have significant security and performance implications:

- **Security Risk**: Attackers can send extremely large request bodies, potentially causing DoS attacks or memory exhaustion
- **Performance Impact**: Large request bodies consume memory and processing resources, affecting overall system performance
- **Resource Consumption**: Unlimited body size can lead to unexpected resource usage patterns

**Recommended Configuration**

It is strongly recommended to set an appropriate `maxBodySize` value for your use case:

```yaml
# For most web applications (1MB limit)
maxBodySize: 1048576  # 1MB in bytes

# For API endpoints expecting larger payloads (10MB limit)
maxBodySize: 10485760  # 10MB in bytes

# For file upload authentication (100MB limit)
maxBodySize: 104857600  # 100MB in bytes
```

**Guidelines for Setting maxBodySize**

- **Web Forms**: 1-5MB is typically sufficient for most form submissions
- **API Endpoints**: Consider your largest expected JSON/XML payload + buffer
- **File Uploads**: Set based on your maximum expected file size
- **High-Traffic Services**: Use smaller limits to prevent resource exhaustion

### maxResponseBodySize

The `maxResponseBodySize` option defines the maximum allowed response body size in bytes from the authentication server.
If the response body exceeds the configured limit, the request is rejected with a 401 (Unauthorized) status.
If left unset, the request body size is unrestricted which can have performance or security implications.

> **Warning**
> It is strongly recommended to set this option to a suitable value.
> Not setting it (or setting it to `-1`) allows unlimited response body sizes which can lead to DoS attacks and memory exhaustion.

### trustForwardHeader

> **Warning**
> `trustForwardHeader` option is deprecated and will be removed in the next major version.
>
> Configure the trusted IPs at the [EntryPoint level](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints#forwarded-headers) using `forwardedHeaders.trustedIPs`,
> and set `trustForwardHeader` to `true` on this middleware.
>
> With this setup, the EntryPoint is responsible for sanitizing incoming `X-Forwarded-*` headers:
> it strips any such headers sent by untrusted clients and only preserves those coming from trusted upstream proxies.
> By the time the ForwardAuth middleware processes the request, all `X-Forwarded-*` headers are guaranteed to be trustworthy,
> including those intentionally added by other middlewares in the chain — for example, the `X-Forwarded-Prefix` header set by the [StripPrefix](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/stripprefix) middleware.
>
> If `trustForwardHeader` is not explicitly set, Traefik will log a warning at startup and use a legacy behavior where some `X-Forwarded-*` headers (e.g. `X-Forwarded-For`, `X-Forwarded-Proto`) are removed but others (e.g. `X-Forwarded-Prefix`) are forwarded untouched.
> To silence this warning, explicitly set `trustForwardHeader` to `true` or `false`.
> Set the `trustForwardHeader` option to `true` to trust all `X-Forwarded-*` headers.

## Forward-Request Headers

The following request properties are provided to the forward-auth target endpoint as `X-Forwarded-` headers.

| Property                                            | Forward-Request Header |
| --------------------------------------------------- | ---------------------- |
| <a id="opt-HTTP-Method"></a>HTTP Method             | `X-Forwarded-Method`   |
| <a id="opt-Protocol"></a>Protocol                   | `X-Forwarded-Proto`    |
| <a id="opt-Host"></a>Host                           | `X-Forwarded-Host`     |
| <a id="opt-Request-URI"></a>Request URI             | `X-Forwarded-Uri`      |
| <a id="opt-Source-IP-Address"></a>Source IP-Address | `X-Forwarded-For`      |
