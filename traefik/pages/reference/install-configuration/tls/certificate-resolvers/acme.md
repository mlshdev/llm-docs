> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/install-configuration/tls/certificate-resolvers/acme.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/install-configuration/tls/certificate-resolvers/acme.md)

## Configuration Example

Below is an example of a basic configuration for ACME in Traefik.

**File (YAML)**

```yaml
entryPoints:
  web:
    address: ":80"

  websecure:
    address: ":443"

certificatesResolvers:
  myresolver:
    acme:
      email: your-email@example.com
      storage: acme.json
      httpChallenge:
        # used during the challenge
        entryPoint: web
```

**File (TOML)**

```toml
[entryPoints]
  [entryPoints.web]
    address = ":80"

  [entryPoints.websecure]
    address = ":443"

[certificatesResolvers.myresolver.acme]
  email = "your-email@example.com"
  storage = "acme.json"
  [certificatesResolvers.myresolver.acme.httpChallenge]
    # used during the challenge
    entryPoint = "web"
```

**CLI**

```bash
--entryPoints.web.address=:80
--entryPoints.websecure.address=:443
# ...
--certificatesresolvers.myresolver.acme.email=your-email@example.com
--certificatesresolvers.myresolver.acme.storage=acme.json
# used during the challenge
--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web
```

**Helm Chart Values**

```yaml
# Traefik entryPoints configuration for HTTP and HTTPS.
entryPoints:
  web:
    address: ":80"
  websecure:
    address: ":443"

certificatesResolvers:
  myresolver:
    acme:
      email: "your-email@example.com"
      storage: "/data/acme.json"       # Path to store the certificate information.
      httpChallenge:
        # Entry point to use during the ACME HTTP-01 challenge.
        entryPoint: "web"
```

## Configuration Options

ACME certificate resolvers have the following configuration options:

| Field                                                                                                             | Description                                                                                                                                                                                                                                                             | Default                                          | Required |
| :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- | :------- |
| <a id="opt-acme-email"></a>`acme.email`                                                                           | Email address used for registration.                                                                                                                                                                                                                                    | ""                                               | Yes      |
| <a id="opt-acme-caServer"></a>`acme.caServer`                                                                     | CA server to use.                                                                                                                                                                                                                                                       | <https://acme-v02.api.letsencrypt.org/directory> | No       |
| <a id="opt-acme-preferredChain"></a>`acme.preferredChain`                                                         | Preferred chain to use. If the CA offers multiple certificate chains, prefer the chain with an issuer matching this Subject Common Name. If no match, the default offered chain will be used.                                                                           | ""                                               | No       |
| <a id="opt-acme-keyType"></a>`acme.keyType`                                                                       | KeyType to use.                                                                                                                                                                                                                                                         | "RSA4096"                                        | No       |
| <a id="opt-acme-disableCommonName"></a>`acme.disableCommonName`                                                   | Disable the common name in the CSR.                                                                                                                                                                                                                                     | false                                            | No       |
| <a id="opt-acme-profile"></a>`acme.profile`                                                                       | Certificate profile to use.                                                                                                                                                                                                                                             | ""                                               | No       |
| <a id="opt-acme-caCertificates"></a>`acme.caCertificates`                                                         | Specify the paths to PEM encoded CA Certificates that can be used to authenticate an ACME server with an HTTPS certificate not issued by a CA in the system-wide trusted root list.                                                                                     | \[]                                              | No       |
| <a id="opt-acme-caSystemCertPool"></a>`acme.caSystemCertPool`                                                     | Defines if the certificates pool must use a copy of the system cert pool.                                                                                                                                                                                               | false                                            | No       |
| <a id="opt-acme-caServerName"></a>`acme.caServerName`                                                             | Specify the CA server name that can be used to authenticate an ACME server with an HTTPS certificate not issued by a CA in the system-wide trusted root list.                                                                                                           | ""                                               | No       |
| <a id="opt-acme-emailAddresses"></a>`acme.emailAddresses`                                                         | CSR email addresses to use.                                                                                                                                                                                                                                             | \[]                                              | No       |
| <a id="opt-acme-eab"></a>`acme.eab`                                                                               | Enable external account binding.                                                                                                                                                                                                                                        |                                                  | No       |
| <a id="opt-acme-eab-kid"></a>`acme.eab.kid`                                                                       | Key identifier from External CA.                                                                                                                                                                                                                                        | ""                                               | No       |
| <a id="opt-acme-eab-hmacEncoded"></a>`acme.eab.hmacEncoded`                                                       | HMAC key from External CA, should be in Base64 URL Encoding without padding format.                                                                                                                                                                                     | ""                                               | No       |
| <a id="opt-acme-certificatesDuration"></a>`acme.certificatesDuration`                                             | The certificates' duration in hours, exclusively used to determine renewal dates.                                                                                                                                                                                       | 2160                                             | No       |
| <a id="opt-acme-clientTimeout"></a>`acme.clientTimeout`                                                           | Timeout for HTTP Client used to communicate with the ACME server.                                                                                                                                                                                                       | 2m                                               | No       |
| <a id="opt-acme-clientResponseHeaderTimeout"></a>`acme.clientResponseHeaderTimeout`                               | Timeout for response headers for HTTP Client used to communicate with the ACME server.                                                                                                                                                                                  | 30s                                              | No       |
| <a id="opt-acme-certificateTimeout"></a>`acme.certificateTimeout`                                                 | Timeout for obtaining the certificate during the finalization request. Set this if the ACME server is slow to issue a certificate.                                                                                                                                      | 30s                                              | No       |
| <a id="opt-acme-dnsChallenge"></a>`acme.dnsChallenge`                                                             | Enable DNS-01 challenge. More information [here](#dnschallenge).                                                                                                                                                                                                        | -                                                | No       |
| <a id="opt-acme-dnsChallenge-provider"></a>`acme.dnsChallenge.provider`                                           | DNS provider to use.                                                                                                                                                                                                                                                    | ""                                               | No       |
| <a id="opt-acme-dnsChallenge-resolvers"></a>`acme.dnsChallenge.resolvers`                                         | DNS servers to resolve the FQDN authority.                                                                                                                                                                                                                              | \[]                                              | No       |
| <a id="opt-acme-dnsChallenge-propagation-delayBeforeChecks"></a>`acme.dnsChallenge.propagation.delayBeforeChecks` | By default, the provider will verify the TXT DNS challenge record before letting ACME verify. If `delayBeforeCheck` is greater than zero, this check is delayed for the configured duration in seconds. This is Useful if internal networks block external DNS queries. | 0s                                               | No       |
| <a id="opt-acme-dnsChallenge-propagation-disableChecks"></a>`acme.dnsChallenge.propagation.disableChecks`         | Disables the challenge TXT record propagation checks, before notifying ACME that the DNS challenge is ready. Please note that disabling checks can prevent the challenge from succeeding.                                                                               | false                                            | No       |
| <a id="opt-acme-dnsChallenge-propagation-requireAllRNS"></a>`acme.dnsChallenge.propagation.requireAllRNS`         | Enables the challenge TXT record to be propagated to all recursive nameservers. If you have disabled authoritative nameservers checks (with `propagation.disableANSChecks`), it is recommended to check all recursive nameservers instead.                              | false                                            | No       |
| <a id="opt-acme-dnsChallenge-propagation-disableANSChecks"></a>`acme.dnsChallenge.propagation.disableANSChecks`   | Disables the challenge TXT record propagation checks against authoritative nameservers. This option will skip the propagation check against the nameservers of the authority (SOA). It should be used only if the nameservers of the authority are not reachable.       | false                                            | No       |
| <a id="opt-acme-httpChallenge"></a>`acme.httpChallenge`                                                           | Enable HTTP-01 challenge. More information [here](#httpchallenge).                                                                                                                                                                                                      |                                                  | No       |
| <a id="opt-acme-httpChallenge-entryPoint"></a>`acme.httpChallenge.entryPoint`                                     | EntryPoint to use for the HTTP-01 challenges. Must be reachable by Let's Encrypt through port 80                                                                                                                                                                        | ""                                               | Yes      |
| <a id="opt-acme-httpChallenge-delay"></a>`acme.httpChallenge.delay`                                               | The delay between the creation of the challenge and the validation. A value lower than or equal to zero means no delay.                                                                                                                                                 | 0                                                | No       |
| <a id="opt-acme-tlsChallenge"></a>`acme.tlsChallenge`                                                             | Enable TLS-ALPN-01 challenge. Traefik must be reachable by Let's Encrypt through port 443. More information [here](#tlschallenge).                                                                                                                                      | -                                                | No       |
| <a id="opt-acme-tlschallenge-delay"></a>`acme.tlschallenge.delay`                                                 | The delay between the creation of the challenge and the validation. A value lower than or equal to zero means no delay.                                                                                                                                                 | 0                                                | No       |
| <a id="opt-acme-storage"></a>`acme.storage`                                                                       | File path used for certificates storage.                                                                                                                                                                                                                                | "acme.json"                                      | Yes      |

## Automatic Certificate Renewal

Traefik automatically tracks the expiry date of certificates it generates. Certificates that are no longer used may still be renewed, as Traefik does not currently check if the certificate is being used before renewing.

By default, Traefik manages 90-day certificates and starts renewing them 30 days before their expiry.
When using a certificate resolver that issues certificates with custom durations, the `certificatesDuration` option can be used to configure the certificates' duration.

> **Note**
> Certificates that are no longer used may still be renewed, as Traefik does not currently check if the certificate is being used before renewing.

## The Different ACME Challenges

### dnsChallenge

The DNS-01 challenge to generate and renew ACME certificates by provisioning a DNS record.

Traefik relies internally on [Lego](https://go-acme.github.io/lego/ "Link to Lego website") for ACME.
You can find the list of all the supported DNS providers in their [documentation](https://go-acme.github.io/lego/dns/ "Link to Lego DNS challenge documentation page")
with instructions about which environment variables need to be setup.

> **Note**
> CNAME are supported and even [encouraged](https://letsencrypt.org/2019/10/09/onboarding-your-customers-with-lets-encrypt-and-acme.html#the-advantages-of-a-cname "Link to The Advantages of a CNAME article").
>
> If needed, CNAME support can be turned off with the following environment variable:
>
> ```env
> LEGO_DISABLE_CNAME_SUPPORT=true
> ```
>
> **Multiple DNS challenge**
> Multiple DNS challenge provider are not supported with Traefik, but you can use CNAME to handle that.
> For example, if you have `example.org` (account foo) and `example.com` (account bar) you can create a CNAME on `example.org` called `_acme-challenge.example.org` pointing to `challenge.example.com`.
> This way, you can obtain certificates for `example.org` with the bar account.
> **`delayBeforeChecks`**
> By default, the `provider` verifies the TXT record *before* letting ACME verify.
> You can delay this operation by specifying a delay (in seconds) with `delayBeforeChecks` (value must be greater than zero).
> This option is useful when internal networks block external DNS queries.

### `tlsChallenge`

Use the `TLS-ALPN-01` challenge to generate and renew ACME certificates by provisioning a TLS certificate.

As described on the Let's Encrypt [community forum](https://community.letsencrypt.org/t/support-for-ports-other-than-80-and-443/3419/72),
when using the `TLS-ALPN-01` challenge, Traefik must be reachable by Let's Encrypt through port 443.

> **Configuring the `tlsChallenge`**
> **File (YAML)**
>
> ```yaml
> certificatesResolvers:
>   myresolver:
>     acme:
>       # ...
>       tlsChallenge: {}
> ```
>
> **File (TOML)**
>
> ```toml
> [certificatesResolvers.myresolver.acme]
>   # ...
>   [certificatesResolvers.myresolver.acme.tlsChallenge]
> ```
>
> **CLI**
>
> ```bash
> # ...
> --certificatesresolvers.myresolver.acme.tlschallenge=true
> ```

### `httpChallenge`

Use the `HTTP-01` challenge to generate and renew ACME certificates by provisioning an HTTP resource under a well-known URI.

As described on the Let's Encrypt [community forum](https://community.letsencrypt.org/t/support-for-ports-other-than-80-and-443/3419/72),
when using the `HTTP-01` challenge, `certificatesresolvers.myresolver.acme.httpchallenge.entrypoint` must be reachable by Let's Encrypt through port 80.

> **Using an EntryPoint Called web for the `httpChallenge`**
> **File (YAML)**
>
> ```yaml
> entryPoints:
>   web:
>     address: ":80"
>
>   websecure:
>     address: ":443"
>
> certificatesResolvers:
>   myresolver:
>     acme:
>       # ...
>       httpChallenge:
>         entryPoint: web
> ```
>
> **File (TOML)**
>
> ```toml
> [entryPoints]
>   [entryPoints.web]
>     address = ":80"
>
>   [entryPoints.websecure]
>     address = ":443"
>
> [certificatesResolvers.myresolver.acme]
>   # ...
>   [certificatesResolvers.myresolver.acme.httpChallenge]
>     entryPoint = "web"
> ```
>
> **CLI**
>
> ```bash
> --entryPoints.web.address=:80
> --entryPoints.websecure.address=:443
> # ...
> --certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web
> ```
>
> **Info**
> Redirection is fully compatible with the `HTTP-01` challenge.

## Domain Definition

A certificate resolver requests certificates for a set of domain names inferred from routers, according to the following:

- If the IngressRoute has a `tls.domains` option set,
  then the certificate resolver derives this router domain name from the `main` option of `tls.domains`.

- Otherwise, the certificate resolver derives the domain name from any `Host()` or `HostSNI()` matchers
  in the IngressRoute's rule.

You can set SANs (alternative domains) for each main domain.
Every domain must have A/AAAA records pointing to Traefik.
Each domain & SAN will lead to a certificate request.

[ACME v2](https://community.letsencrypt.org/t/acme-v2-and-wildcard-certificate-support-is-live/55579) supports wildcard certificates.
As described in [Let's Encrypt's post](https://community.letsencrypt.org/t/staging-endpoint-for-acme-v2/49605) wildcard certificates can only be generated through a `DNS-01` challenge.
It is not possible to request a double wildcard certificate for a domain (for example `*.*.local.com`).

Most likely the root domain should receive a certificate too, so it needs to be specified as SAN and 2 `DNS-01` challenges are invoked.
In such a case the generated DNS TXT record for both domains is the same.
Even though this behavior is [DNS RFC](https://community.letsencrypt.org/t/wildcard-issuance-two-txt-records-for-the-same-name/54528/2) compliant,
it can lead to problems as all DNS providers keep DNS records cached for a given time (TTL) and this TTL can be greater than the challenge timeout making the `DNS-01` challenge fail.

The Traefik ACME client library [lego](https://github.com/go-acme/lego) supports some but not all DNS providers to work around this issue.
The supported `provider` table indicates if they allow generating certificates for a wildcard domain and its root domain.

### Wildcard Domains

[ACME V2](https://community.letsencrypt.org/t/acme-v2-and-wildcard-certificate-support-is-live/55579) supports wildcard certificates.
As described in [Let's Encrypt's post](https://community.letsencrypt.org/t/staging-endpoint-for-acme-v2/49605) wildcard certificates can only be generated through a [`DNS-01` challenge](#dnschallenge).

### External Account Binding

- `kid`: Key identifier from External CA
- `hmacEncoded`: HMAC key from External CA, should be in Base64 URL Encoding without padding format

**File (YAML)**

```yaml
certificatesResolvers:
  myresolver:
    acme:
      # ...
      eab:
        kid: abc-keyID-xyz
        hmacEncoded: abc-hmac-xyz
```

**File (TOML)**

```toml
[certificatesResolvers.myresolver.acme]
  # ...
  [certificatesResolvers.myresolver.acme.eab]
    kid = "abc-keyID-xyz"
    hmacEncoded = "abc-hmac-xyz"
```

**CLI**

```bash
# ...
--certificatesresolvers.myresolver.acme.eab.kid=abc-keyID-xyz
--certificatesresolvers.myresolver.acme.eab.hmacencoded=abc-hmac-xyz
```

## Using LetsEncrypt with Kubernetes

When using LetsEncrypt with kubernetes, there are some known caveats with both the [Ingress](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-ingress) and [CRD](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-crd) providers.

> **Note**
> If you intend to run multiple instances of Traefik with LetsEncrypt, please ensure you read the sections on those provider pages.

### LetsEncrypt Support with the Ingress Provider

By design, Traefik is a stateless application,
meaning that it only derives its configuration from the environment it runs in,
without additional configuration.
For this reason, users can run multiple instances of Traefik at the same time to
achieve HA, as is a common pattern in the kubernetes ecosystem.

When using a single instance of Traefik Proxy with Let's Encrypt,
you should encounter no issues. However, this could be a single point of failure.
Unfortunately, it is not possible to run multiple instances of Traefik 2.0
with Let's Encrypt enabled, because there is no way to ensure that the correct
instance of Traefik receives the challenge request, and subsequent responses.
Early versions (v1.x) of Traefik used a
[KV store](https://doc.traefik.io/traefik/v1.7/configuration/acme/#storage)
to attempt to achieve this, but due to sub-optimal performance that feature
was dropped in 2.0.

If you need Let's Encrypt with high availability in a Kubernetes environment,
we recommend using [Traefik Enterprise](https://traefik.io/traefik-enterprise/)
which includes distributed Let's Encrypt as a supported feature.

If you want to keep using Traefik Proxy,
LetsEncrypt HA can be achieved by using a Certificate Controller such as [Cert-Manager](https://cert-manager.io/docs/).
When using Cert-Manager to manage certificates,
it creates secrets in your namespaces that can be referenced as TLS secrets in
your [ingress objects](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls)
.

## Fallback

If Let's Encrypt is not reachable, the following certificates will apply:

1. Previously generated ACME certificates (before downtime)
2. Expired ACME certificates
3. Provided certificates

> **Important**
> For new (sub)domains which need Let's Encrypt authentication, the default Traefik certificate will be used until Traefik is restarted.
