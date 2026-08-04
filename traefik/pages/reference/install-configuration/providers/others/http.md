> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/install-configuration/providers/others/http.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/install-configuration/providers/others/http.md)

# Traefik & HTTP

Provide your [install configuration](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview) via an HTTP(S) endpoint and let Traefik do the rest!

## Configuration Example

You can enable the HTTP provider as detailed below:

**File (YAML)**

```yaml
providers:
  http:
    endpoint: "http://127.0.0.1:9000/api"
```

**File (TOML)**

```toml
[providers.http]
  endpoint = "http://127.0.0.1:9000/api"
```

**CLI**

```bash
--providers.http.endpoint=http://127.0.0.1:9000/api
```

## Configuration Options

| Field                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                          | Default | Required |
| :-------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-providers-providersThrottleDuration"></a>`providers.providersThrottleDuration`     | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.** | 2s      | No       |
| <a id="opt-providers-http-endpoint"></a>`providers.http.endpoint`                             | Defines the HTTP(S) endpoint to poll.                                                                                                                                                                                                                                                                                                                                                | ""      | Yes      |
| <a id="opt-providers-http-pollInterval"></a>`providers.http.pollInterval`                     | Defines the polling interval.                                                                                                                                                                                                                                                                                                                                                        | 5s      | No       |
| <a id="opt-providers-http-pollTimeout"></a>`providers.http.pollTimeout`                       | Defines the polling timeout when connecting to the endpoint.                                                                                                                                                                                                                                                                                                                         | 5s      | No       |
| <a id="opt-providers-http-headers"></a>`providers.http.headers`                               | Defines custom headers to be sent to the endpoint.                                                                                                                                                                                                                                                                                                                                   | {}      | No       |
| <a id="opt-providers-http-maxResponseBodySize"></a>`providers.http.maxResponseBodySize`       | Defines the maximum size of the response body in bytes. A value of `-1` means unlimited.                                                                                                                                                                                                                                                                                             | -1      | No       |
| <a id="opt-providers-http-tls-ca"></a>`providers.http.tls.ca`                                 | Defines the certificate authority used for the secure connection to the endpoint, it defaults to the system bundle. The value can be a file path or the PEM content directly.                                                                                                                                                                                                        | ""      | No       |
| <a id="opt-providers-http-tls-cert"></a>`providers.http.tls.cert`                             | Defines the public certificate used for the secure connection to the endpoint. The value can be a file path or the PEM content directly. When using this option, setting the `key` option is required.                                                                                                                                                                               | ""      | Yes      |
| <a id="opt-providers-http-tls-key"></a>`providers.http.tls.key`                               | Defines the private key used for the secure connection to the endpoint. The value can be a file path or the PEM content directly. When using this option, setting the `cert` option is required.                                                                                                                                                                                     | ""      | Yes      |
| <a id="opt-providers-http-tls-insecureSkipVerify"></a>`providers.http.tls.insecureSkipVerify` | Instructs the provider to accept any certificate presented by endpoint when establishing a TLS connection, regardless of the hostnames the certificate covers.                                                                                                                                                                                                                       | false   | No       |

### headers

Defines custom headers to be sent to the endpoint.

**File (YAML)**

```yaml
providers:
  http:
    headers:
      name: value
```

**File (TOML)**

```toml
[providers.http.headers]
  name = "value"
```

**CLI**

```bash
[providers.http.headers]
--providers.http.headers.name=value
```

## Routing Configuration

The HTTP provider uses the same configuration as the [File Provider](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file) in YAML or JSON format.
