> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/tls/overview.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/tls/overview.md)

## General

When an HTTP router is configured to handle HTTPS traffic, include a `tls` field in its definition.
This field tells Traefik that the router should process only TLS requests and ignore non-TLS traffic.

By default, an HTTP router with a TLS field will terminate the TLS connections,
meaning that it will send decrypted data to the services.
The TLS configuration provides several options for fine-tuning the TLS behavior,
including automatic certificate generation, custom TLS options, and explicit domain specification.

## Configuration Example

**Structured (YAML)**

```yaml
http:
  routers:
    my-https-router:
      rule: "Host(`example.com`) && Path(`/api`)"
      service: "my-http-service"
      tls:
        certResolver: "letsencrypt"
        options: "modern-tls"
        domains:
          - main: "example.com"
            sans:
              - "www.example.com"
              - "api.example.com"
```

**Structured (TOML)**

```toml
[http.routers.my-https-router]
  rule = "Host(`example.com`) && Path(`/api`)"
  service = "my-http-service"

  [http.routers.my-https-router.tls]
    certResolver = "letsencrypt"
    options = "modern-tls"

    [[http.routers.my-https-router.tls.domains]]
      main = "example.com"
      sans = ["www.example.com", "api.example.com"]
```

**Labels**

```yaml
labels:
  - "traefik.http.routers.my-https-router.rule=Host(`example.com`) && Path(`/api`)"
  - "traefik.http.routers.my-https-router.service=my-http-service"
  - "traefik.http.routers.my-https-router.tls=true"
  - "traefik.http.routers.my-https-router.tls.certresolver=letsencrypt"
  - "traefik.http.routers.my-https-router.tls.options=modern-tls"
  - "traefik.http.routers.my-https-router.tls.domains[0].main=example.com"
  - "traefik.http.routers.my-https-router.tls.domains[0].sans=www.example.com,api.example.com"
```

**Tags**

```json
{
  "Tags": [
    "traefik.http.routers.my-https-router.rule=Host(`example.com`) && Path(`/api`)",
    "traefik.http.routers.my-https-router.service=my-http-service",
    "traefik.http.routers.my-https-router.tls=true",
    "traefik.http.routers.my-https-router.tls.certresolver=letsencrypt",
    "traefik.http.routers.my-https-router.tls.options=modern-tls",
    "traefik.http.routers.my-https-router.tls.domains[0].main=example.com",
    "traefik.http.routers.my-https-router.tls.domains[0].sans=www.example.com,api.example.com"
  ]
}
```

## Configuration Options

| Field                                       | Description                                                                                                                                                                                                                                                                               | Default                                 | Required |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- | :------- |
| <a id="opt-options"></a>`options`           | The name of the TLS options to use for configuring TLS parameters (cipher suites, min/max TLS version, client authentication, etc.). See [TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options) for detailed configuration.              | `""` (resolves to `default` at runtime) | No       |
| <a id="opt-certResolver"></a>`certResolver` | The name of the certificate resolver to use for automatic certificate generation via ACME providers (such as Let's Encrypt). See the [Certificate Resolver](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/#certificate-resolver) section for more details. | ""                                      | No       |
| <a id="opt-domains"></a>`domains`           | List of domains and Subject Alternative Names (SANs) for explicit certificate domain specification. See the [Custom Domains](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/#custom-domains) section for more details.                                      | \[]                                     | No       |

## Certificate Resolver

The `tls.certResolver` option allows you to specify a certificate resolver for automatic certificate generation via ACME providers (such as Let's Encrypt).

When a certificate resolver is configured for a router,
Traefik will automatically obtain and manage TLS certificates for the domains specified in the router's rule (in the `Host` matcher) or in the `tls.domains` configuration (with `tls.domains` taking precedence).

> **Prerequisites**
>
> - Certificate resolvers must be defined in the [static configuration](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme)
> - The router must have `tls` enabled
> - An ACME challenge type must be configured for the certificate resolver

## Custom Domains

When using ACME certificate resolvers, domains are automatically extracted from router rules,
but the `tls.domains` option allows you to explicitly specify the domains and Subject Alternative Names (SANs) for which certificates should be generated.

This provides fine-grained control over certificate generation and takes precedence over domains automatically extracted from router rules.

Every domain must have A/AAAA records pointing to Traefik.
