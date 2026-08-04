> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/http/middlewares/oauth2-client-credentials.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/http/middlewares/oauth2-client-credentials.md)

> **Traefik Hub Feature**
> This middleware is available exclusively in [Traefik Hub](https://traefik.io/traefik-hub/). Learn more about [Traefik Hub's advanced features](https://doc.traefik.io/traefik-hub/api-gateway/intro).
> The OAuth 2.0 Client Credentials Authentication middleware allows Traefik Hub to secure routes using the OAuth 2.0 Client Credentials flow as described in the [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.html#section-4.4).
> Access tokens can be cached using an external KV store.

The OAuth Client Credentials Authentication middleware allows using Redis (or Sentinel) as persistent KV store to authorization access tokens
while they are valid. This reduces latency and the number of calls made to the authorization server.

***

## Configuration Example

**Middleware OAuth Client Credentials**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-client-creds
spec:
  plugin:
    oAuthClientCredentials:
      url: https://tenant.auth0.com/oauth/token
      clientID: urn:k8s:my-secret:my-secret:clientID
      clientSecret: urn:k8s:my-secret:my-secret:clientSecret
      audience: https://api.example.com
      forwardHeaders:
        Group: grp
        Expires-At: exp
      claims: Equals(`grp`, `admin`)
```

**Kubernetes Secret**

```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: my-secret
stringData:
  clientID: my-oauth-client-name
  clientSecret: mypasswd
```

## Configuration Options

| Field                                                                                     | Description                                                                                                                                                                                                                                                                                                                | Default | Required                     |
| :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :--------------------------- |
| <a id="opt-audience"></a>`audience`                                                       | Defines the audience configured in your authorization server. <br /> The audience value is the base address of the resource being accessed, for example: <https://api.example.com>.                                                                                                                                        | ""      | Yes                          |
| <a id="opt-claims"></a>`claims`                                                           | Defines the claims to validate in order to authorize the request. <br /> The `claims` option can only be used with JWT-formatted token.  (More information [here](#claims))                                                                                                                                                | ""      | No                           |
| <a id="opt-clientConfig-tls-ca"></a>`clientConfig.tls.ca`                                 | PEM-encoded certificate bundle or a URN referencing a secret containing the certificate bundle used to establish a TLS connection with the authorization server  (More information [here](#clientconfig))                                                                                                                  | ""      | No                           |
| <a id="opt-clientConfig-tls-cert"></a>`clientConfig.tls.cert`                             | PEM-encoded certificate or a URN referencing a secret containing the certificate used to establish a TLS connection with the Vault server (More information [here](#clientconfig))                                                                                                                                         | ""      | No                           |
| <a id="opt-clientConfig-tls-key"></a>`clientConfig.tls.key`                               | PEM-encoded key or a URN referencing a secret containing the key used to establish a TLS connection with the Vault server. (More information [here](#clientconfig))                                                                                                                                                        | ""      | No                           |
| <a id="opt-clientConfig-tls-insecureSkipVerify"></a>`clientConfig.tls.insecureSkipVerify` | Disables TLS certificate verification when communicating with the authorization server. <br /> Useful for testing purposes but strongly discouraged for production. (More information [here](#clientconfig))                                                                                                               | false   | No                           |
| <a id="opt-clientConfig-timeoutSeconds"></a>`clientConfig.timeoutSeconds`                 | Defines the time before giving up requests to the authorization server.                                                                                                                                                                                                                                                    | 5       | No                           |
| <a id="opt-clientConfig-maxRetries"></a>`clientConfig.maxRetries`                         | Defines the number of retries for requests to authorization server that fail.                                                                                                                                                                                                                                              | 3       | No                           |
| <a id="opt-clientID"></a>`clientID`                                                       | Defines the unique client identifier for an account on the OpenID Connect provider, must be set when the `clientSecret` option is set.<br />More information [here](#storing-secret-values-in-kubernetes-secrets).                                                                                                         | ""      | Yes                          |
| <a id="opt-clientSecret"></a>`clientSecret`                                               | Defines the unique client secret for an account on the OpenID Connect provider, must be set when the `clientID` option is set.<br />More information [here](#storing-secret-values-in-kubernetes-secrets).                                                                                                                 | ""      | Yes                          |
| <a id="opt-forwardHeaders"></a>`forwardHeaders`                                           | Defines the HTTP headers to add to requests and populates them with values extracted from the access token claims returned by the authorization server. <br /> Claims to be forwarded that are not found in the JWT result in empty headers. <br /> The `forwardHeaders` option can only be used with JWT-formatted token. | \[]     | No                           |
| <a id="opt-store-keyPrefix"></a>`store.keyPrefix`                                         | Defines the prefix of the key for the entries that store the sessions.                                                                                                                                                                                                                                                     | ""      | No                           |
| <a id="opt-store-secret"></a>`store.secret`                                               | Defines the encryption secret used to store access tokens in Redis. Must be 16, 24, or 32 characters long. Required when `store` is configured.                                                                                                                                                                            | ""      | Yes (if store is configured) |
| <a id="opt-store-redis-endpoints"></a>`store.redis.endpoints`                             | Endpoints of the Redis instances to connect to (example: `redis.traefik-hub.svc.cluster.local:6379`)                                                                                                                                                                                                                       | ""      | Yes                          |
| <a id="opt-store-redis-username"></a>`store.redis.username`                               | The username Traefik Hub will use to connect to Redis                                                                                                                                                                                                                                                                      | ""      | No                           |
| <a id="opt-store-redis-password"></a>`store.redis.password`                               | The password Traefik Hub will use to connect to Redis                                                                                                                                                                                                                                                                      | ""      | No                           |
| <a id="opt-store-redis-database"></a>`store.redis.database`                               | The database Traefik Hub will use to sore information (default: `0`)                                                                                                                                                                                                                                                       | 0       | No                           |
| <a id="opt-store-redis-cluster"></a>`store.redis.cluster`                                 | Enable Redis Cluster mode. Set to `{}` to enable; omit to disable.                                                                                                                                                                                                                                                         | -       | No                           |
| <a id="opt-store-redis-tls-ca"></a>`store.redis.tls.ca`                                   | Custom CA bundle                                                                                                                                                                                                                                                                                                           | ""      | No                           |
| <a id="opt-store-redis-tls-cert"></a>`store.redis.tls.cert`                               | TLS certificate                                                                                                                                                                                                                                                                                                            | ""      | No                           |
| <a id="opt-store-redis-tls-key"></a>`store.redis.tls.key`                                 | TLS                                                                                                                                                                                                                                                                                                                        | ""      | No                           |
| <a id="opt-store-redis-tls-insecureSkipVerify"></a>`store.redis.tls.insecureSkipVerify`   | Allow skipping the TLS verification                                                                                                                                                                                                                                                                                        | false   | No                           |
| <a id="opt-store-redis-sentinel-masterSet"></a>`store.redis.sentinel.masterSet`           | Name of the set of main nodes to use for main selection. Required when using Sentinel.                                                                                                                                                                                                                                     | ""      | Yes (when using Sentinel)    |
| <a id="opt-store-redis-sentinel-username"></a>`store.redis.sentinel.username`             | Username to use for sentinel authentication (can be different from `username`)                                                                                                                                                                                                                                             | ""      | No                           |
| <a id="opt-store-redis-sentinel-password"></a>`store.redis.sentinel.password`             | Password to use for sentinel authentication (can be different from `password`)                                                                                                                                                                                                                                             | ""      | No                           |
| <a id="opt-url"></a>`url`                                                                 | Defines the authorization server URL (for example: `https://tenant.auth0.com/oauth/token`).                                                                                                                                                                                                                                | ""      | Yes                          |
| <a id="opt-usernameClaim"></a>`usernameClaim`                                             | Defines the claim that will be evaluated to populate the `clientusername` in the access logs. <br /> The `usernameClaim` option can only be used with JWT-formatted token.                                                                                                                                                 | ""      | No                           |

### Storing secret values in Kubernetes secrets

It is possible to reference Kubernetes secrets defined in the same namespace as the Middleware.
The reference to a Kubernetes secret takes the form of a URN:

```text
urn:k8s:secret:[name]:[valueKey]
```

### claims

#### Syntax

The following functions are supported in `claims`:

| Function                                          | Description                                                                    | Example                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------- |
| <a id="opt-Equals"></a>Equals                     | Validates the equality of the value in `key` with `value`.                     | Equals(\`grp\`, \`admin\`)                      |
| <a id="opt-Prefix"></a>Prefix                     | Validates the value in `key` has the prefix of `value`.                        | Prefix(\`referrer\`, \`<http://example.com\\`>) |
| <a id="opt-Contains-string"></a>Contains (string) | Validates the value in `key` contains `value`.                                 | Contains(\`referrer\`, \`/foo/\`)               |
| <a id="opt-Contains-array"></a>Contains (array)   | Validates the `key` array contains the `value`.                                | Contains(\`areas\`, \`home\`)                   |
| <a id="opt-SplitContains"></a>SplitContains       | Validates the value in `key` contains the `value` once split by the separator. | SplitContains(\`scope\`, \` \`, \`writer\`)     |
| <a id="opt-OneOf"></a>OneOf                       | Validates the `key` array contains one of the `values`.                        | OneOf(\`areas\`, \`office\`, \`lab\`)           |

All functions can be joined by boolean operands. The supported operands are:

| Operand                    | Description                                                            | Example                                                      |
| -------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| <a id="opt-row"></a>&&     | Compares two functions and returns true only if both evaluate to true. | Equals(\`grp\`, \`admin\`) && Equals(\`active\`, \`true\`)   |
| <a id="opt-row-2"></a>\|\| | Compares two functions and returns true if either evaluate to true.    | Equals(\`grp\`, \`admin\`) \|\| Equals(\`active\`, \`true\`) |
| <a id="opt-row-3"></a>!    | Returns false if the function is true, otherwise returns true.         | !Equals(\`grp\`, \`testers\`)                                |

All examples will return true for the following data structure:

**JSON**

```json
{
  "active": true,
  "grp": "admin",
  "scope": "reader writer deploy",
  "referrer": "http://example.com/foo/bar",
  "areas": [
    "office",
    "home"
  ]
}
```

#### Nested Claims

Nested claims are supported by using a `.` between keys. For example:

**Key**

```bash
user.name
```

**Claims**

```json
{
  "active": true,
  "grp": "admin",
  "scope": "reader writer deploy",
  "referrer": "http://example.com/foo/bar",
  "areas": [
    "office",
    "home"
  ],
  "user": {
    "name": "John Snow",
    "status": "undead"
  }
}
```

**Result**

```bash
John Snow
```

> **Handling keys that contain a '.'**
> If the `key` contains a dot, the dot can be escaped using `\.`

> **Handling a key that contains a ''**
> If the `key` contains a `\`, it needs to be doubled `\\`.

### clientConfig

Defines the configuration used to connect the API Gateway to a Third Party Software such as an Identity Provider.

#### `clientConfig.tls`

##### Storing secret values in Kubernetes secrets

When configuring the `tls.ca`, `tls.cert`, `tls.key`, it is possible to reference Kubernetes secrets defined in the same namespace as the Middleware.
The reference to a Kubernetes secret takes the form of a URN:

```text
urn:k8s:secret:[name]:[valueKey]
```

**Middleware JWT**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-client-creds
spec:
  plugin:
    oAuthClientCredentials:
      clientConfig:
        tls:
          ca: "urn:k8s:secret:tls:ca"
          cert: "urn:k8s:secret:tls:cert"
          key: "urn:k8s:secret:tls:key"
          insecureSkipVerify: true
```

**Kubernetes TLS Secret**

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: tls
stringData:
  ca: |-
    -----BEGIN CERTIFICATE-----
    MIIB9TCCAWACAQAwgbgxGTAXBgNVBAoMEFF1b1ZhZGlzIExpbWl0ZWQxHDAaBgNV
    BAsME0RvY3VtZW50IERlcGFydG1lbnQxOTA3BgNVBAMMMFdoeSBhcmUgeW91IGRl
    Y29kaW5nIG1lPyAgVGhpcyBpcyBvbmx5IGEgdGVzdCEhITERMA8GA1UEBwwISGFt
    aWx0b24xETAPBgNVBAgMCFBlbWJyb2tlMQswCQYDVQQGEwJCTTEPMA0GCSqGSIb3
    DQEJARYAMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJ9WRanG/fUvcfKiGl
    EL4aRLjGt537mZ28UU9/3eiJeJznNSOuNLnF+hmabAu7H0LT4K7EdqfF+XUZW/2j
    RKRYcvOUDGF9A7OjW7UfKk1In3+6QDCi7X34RE161jqoaJjrm/T18TOKcgkkhRzE
    apQnIDm0Ea/HVzX/PiSOGuertwIDAQABMAsGCSqGSIb3DQEBBQOBgQBzMJdAV4QP
    Awel8LzGx5uMOshezF/KfP67wJ93UW+N7zXY6AwPgoLj4Kjw+WtU684JL8Dtr9FX
    ozakE+8p06BpxegR4BR3FMHf6p+0jQxUEAkAyb/mVgm66TyghDGC6/YkiKoZptXQ
    98TwDIK/39WEB/V607As+KoYazQG8drorw==
    -----END CERTIFICATE-----
  cert: |-
    -----BEGIN CERTIFICATE-----
    MIIB9TCCAWACAQAwgbgxGTAXBgNVBAoMEFF1b1ZhZGlzIExpbWl0ZWQxHDAaBgNV
    BAsME0RvY3VtZW50IERlcGFydG1lbnQxOTA3BgNVBAMMMFdoeSBhcmUgeW91IGRl
    Y29kaW5nIG1lPyAgVGhpcyBpcyBvbmx5IGEgdGVzdCEhITERMA8GA1UEBwwISGFt
    aWx0b24xETAPBgNVBAgMCFBlbWJyb2tlMQswCQYDVQQGEwJCTTEPMA0GCSqGSIb3
    DQEJARYAMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJ9WRanG/fUvcfKiGl
    EL4aRLjGt537mZ28UU9/3eiJeJznNSOuNLnF+hmabAu7H0LT4K7EdqfF+XUZW/2j
    RKRYcvOUDGF9A7OjW7UfKk1In3+6QDCi7X34RE161jqoaJjrm/T18TOKcgkkhRzE
    apQnIDm0Ea/HVzX/PiSOGuertwIDAQABMAsGCSqGSIb3DQEBBQOBgQBzMJdAV4QP
    Awel8LzGx5uMOshezF/KfP67wJ93UW+N7zXY6AwPgoLj4Kjw+WtU684JL8Dtr9FX
    ozakE+8p06BpxegR4BR3FMHf6p+0jQxUEAkAyb/mVgm66TyghDGC6/YkiKoZptXQ
    98TwDIK/39WEB/V607As+KoYazQG8drorw==
    -----END CERTIFICATE-----
  key: |-
    -----BEGIN EC PRIVATE KEY-----
    MHcCAQEEIC8CsJ/B115S+JtR1/l3ZQwKA3XdXt9zLqusF1VXc/KloAoGCCqGSM49
    AwEHoUQDQgAEpwUmRIZHFt8CdDHYm1ikScCScd2q6QVYXxJu+G3fQZ78ScGtN7fu
    KXMnQqVjXVRAr8qUY8yipVKuMCepnPXScQ==
    -----END EC PRIVATE KEY-----
```

### store.redis

Connection parameters to your [Redis](https://redis.io/ "Link to website of Redis") server are attached to your Middleware deployment.

The following Redis modes are supported:

- Single instance mode
- [Redis Cluster](https://redis.io/docs/management/scaling "Link to official Redis documentation about Redis Cluster mode")
- [Redis Sentinel](https://redis.io/docs/management/sentinel "Link to official Redis documentation about Redis Sentinel mode")

> **Info**
> If you use Redis in single instance mode or Redis Sentinel, you can configure the `database` field.
> This value won't be taken into account if you use Redis Cluster (only database `0` is available).
>
> In this case, a warning is displayed, and the value is ignored.
> For more information about Redis, we recommend the [official Redis documentation](https://redis.io/docs/ "Link to official Redis documentation").
