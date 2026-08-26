> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/oidc.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/oidc.md)

> **Traefik Hub Feature**
> This middleware is available exclusively in [Traefik Hub](https://traefik.io/traefik-hub/). Learn more about [Traefik Hub's advanced features](https://doc.traefik.io/traefik-hub/api-gateway/intro).
> The OIDC Authentication middleware secures your applications by delegating the authentication to an external provider

***

## Configuration Example

**Middleware OIDC**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-oidc
  namespace: whoami
spec:
  plugin:
    oidc:
      issuer: "https://tenant.auth0.com/realms/myrealm"
      redirectUrl: "/callback"
      clientId: "urn:k8s:secret:my-secret:clientId"
      clientSecret: "urn:k8s:secret:my-secret:clientSecret"
      session:
        name: customsessioncookiename
        sliding: false
        refresh: false
        expiry: 10
        sameSite: none
        httpOnly: false
        secure: true
      stateCookie:
        name: customstatecookiename
        maxAge: 10
        sameSite: none
        httpOnly: true
        secure: true
      forwardHeaders:
        Group: grp
        Expires-At: exp
      claims: Equals(`grp`, `admin`)
      csrf: {}
```

**Kubernetes Secret**

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
stringData:
  clientID: my-oidc-client-name
  clientSecret: mysecret
```

## Configuration Options

| Field                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Default                     | Required |
| :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- | :------- |
| <a id="opt-issuer"></a>`issuer`                                                                         | Defines the URL to the OpenID Connect provider (for example, `https://accounts.google.com`). <br /> It should point to the server which provides the OpenID Connect configuration.                                                                                                                                                                                                                                                                                                                                         | ""                          | Yes      |
| <a id="opt-trustedIssuer"></a>`trustedIssuer`                                                           | Defines a trusted issuer URL to validate against in addition to the one discovered from the OpenID Connect provider.                                                                                                                                                                                                                                                                                                                                                                                                       | ""                          | No       |
| <a id="opt-disableIssuerCheck"></a>`disableIssuerCheck`                                                 | Disables the issuer validation check during token verification.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | false                       | No       |
| <a id="opt-redirectUrl"></a>`redirectUrl`                                                               | Defines the URL used by the OpenID Connect provider to redirect back to the middleware once the authorization is complete. (More information [here](#redirecturl))                                                                                                                                                                                                                                                                                                                                                         | ""                          | Yes      |
| <a id="opt-clientId"></a>`clientId`                                                                     | Defines the unique client identifier for an account on the OpenID Connect provider, must be set when the `clientSecret` option is set. (More information [here](#clientid-clientsecret))                                                                                                                                                                                                                                                                                                                                   | ""                          | Yes      |
| <a id="opt-clientSecret"></a>`clientSecret`                                                             | Defines the unique client secret for an account on the OpenID Connect provider, must be set when the `clientId` option is set. (More information [here](#clientid-clientsecret))                                                                                                                                                                                                                                                                                                                                           | ""                          | Yes      |
| <a id="opt-claims"></a>`claims`                                                                         | Defines the claims to validate in order to authorize the request. <br /> The `claims` option can only be used with JWT-formatted token.  (More information [here](#claims))                                                                                                                                                                                                                                                                                                                                                | ""                          | No       |
| <a id="opt-usernameClaim"></a>`usernameClaim`                                                           | Defines the claim that will be evaluated to populate the `clientusername` in the access logs. <br /> The `usernameClaim` option can only be used with JWT-formatted token.                                                                                                                                                                                                                                                                                                                                                 | ""                          | No       |
| <a id="opt-forwardHeaders"></a>`forwardHeaders`                                                         | Defines the HTTP headers to add to requests and populates them with values extracted from the access token claims returned by the authorization server. <br /> Claims to be forwarded that are not found in the JWT result in empty headers. <br /> The `forwardHeaders` option can only be used with JWT-formatted token.                                                                                                                                                                                                 | \[]                         | No       |
| <a id="opt-clientConfig-tls-ca"></a>`clientConfig.tls.ca`                                               | PEM-encoded certificate bundle or a URN referencing a secret containing the certificate bundle used to establish a TLS connection with the authorization server  (More information [here](#clientconfig))                                                                                                                                                                                                                                                                                                                  | ""                          | No       |
| <a id="opt-clientConfig-tls-cert"></a>`clientConfig.tls.cert`                                           | PEM-encoded certificate or a URN referencing a secret containing the certificate used to establish a TLS connection with the Vault server (More information [here](#clientconfig))                                                                                                                                                                                                                                                                                                                                         | ""                          | No       |
| <a id="opt-clientConfig-tls-key"></a>`clientConfig.tls.key`                                             | PEM-encoded key or a URN referencing a secret containing the key used to establish a TLS connection with the Vault server. (More information [here](#clientconfig))                                                                                                                                                                                                                                                                                                                                                        | ""                          | No       |
| <a id="opt-clientConfig-tls-insecureSkipVerify"></a>`clientConfig.tls.insecureSkipVerify`               | Disables TLS certificate verification when communicating with the authorization server. <br /> Useful for testing purposes but strongly discouraged for production. (More information [here](#clientconfig))                                                                                                                                                                                                                                                                                                               | ""                          | No       |
| <a id="opt-clientConfig-timeoutSeconds"></a>`clientConfig.timeoutSeconds`                               | Defines the time before giving up requests to the authorization server.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 5                           | No       |
| <a id="opt-clientConfig-maxRetries"></a>`clientConfig.maxRetries`                                       | Defines the number of retries for requests to authorization server that fail.                                                                                                                                                                                                                                                                                                                                                                                                                                              | 3                           | No       |
| <a id="opt-pkce"></a>`pkce`                                                                             | Defines the Proof Key for Code Exchange as described in [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636).                                                                                                                                                                                                                                                                                                                                                                                                         | false                       | No       |
| <a id="opt-discoveryParams"></a>`discoveryParams`                                                       | A map of arbitrary query parameters to be added to the openid-configuration well-known URI during the discovery mechanism.                                                                                                                                                                                                                                                                                                                                                                                                 | ""                          | No       |
| <a id="opt-scopes"></a>`scopes`                                                                         | The scopes to request. Must include `openid`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | openid                      | No       |
| <a id="opt-authParams"></a>`authParams`                                                                 | A map of the arbitrary query parameters to be passed to the Authentication Provider. <br />When a `prompt` key is set to an empty string in the AuthParams,the prompt parameter is not added to the OAuth2 authorization URL Which means the user won't be prompted for consent.                                                                                                                                                                                                                                           | ""                          | No       |
| <a id="opt-disableLogin"></a>`disableLogin`                                                             | Disables redirections to the authentication provider <br /> This can be useful for protecting APIs where redirecting to a login page is undesirable.                                                                                                                                                                                                                                                                                                                                                                       | false                       | No       |
| <a id="opt-loginUrl"></a>`loginUrl`                                                                     | Defines the URL used to start authorization when needed. <br /> All other requests that are not already authorized will return a 401 Unauthorized. When left empty, all requests can start authorization. <br /> It can be a path (`/login` for example), a host and a path (`example.com/login`) or a complete URL (`https://example.com/login`). <br /> Only `http` and `https` schemes are supported.                                                                                                                   | ""                          | No       |
| <a id="opt-logoutUrl"></a>`logoutUrl`                                                                   | Defines the URL on which the session should be deleted in order to log users out. <br /> It can be a path (`/logout` for example), a host and a path (`example.com/logout`) or a complete URL (`https://example.com/logout`). <br /> Only `http` and `https` schemes are supported.                                                                                                                                                                                                                                        | ""                          | No       |
| <a id="opt-postLoginRedirectUrl"></a>`postLoginRedirectUrl`                                             | If set and used in conjunction with `loginUrl`, the middleware will redirect to this URL after successful login. <br /> It can be a path (`/after/login` for example), a host and a path (`example.com/after/login`) or a complete URL (`https://example.com/after/login`). <br /> Only `http` and `https` schemes are supported.                                                                                                                                                                                          | ""                          | No       |
| <a id="opt-postLogoutRedirectUrl"></a>`postLogoutRedirectUrl`                                           | If set and used in conjunction with `logoutUrl`, the middleware will redirect to this URL after logout. <br /> It can be a path (`/after/logout` for example), a host and a path (`example.com/after/logout`) or a complete URL (`https://example.com/after/logout`). <br /> Only `http` and `https` schemes are supported.                                                                                                                                                                                                | ""                          | No       |
| <a id="opt-backchannelLogoutUrl"></a>`backchannelLogoutUrl`                                             | Defines the URL called by the OIDC provider when a user logs out (see <https://openid.net/specs/openid-connect-rpinitiated-1_0.html#OpenID.BackChannel>). <br /> It can be a path (`/backchannel-logout` for example), a host and a path (`example.com/backchannel-logout`) or a complete URL (`https://example.com/backchannel-logout`). <br /> Only `http` and `https` schemes are supported. <br /> This feature is currently in an experimental state and has been tested exclusively with the Keycloak OIDC provider. | ""                          | No       |
| <a id="opt-backchannelLogoutSessionsRequired"></a>`backchannelLogoutSessionsRequired`                   | This specifies whether the OIDC provider includes the sid (session ID) Claim in the Logout Token to identify the user session (see <https://openid.net/specs/openid-connect-backchannel-1_0.html#BCRegistration>). <br/> If omitted, the default value is false. <br /> This feature is currently in an experimental state and has been tested exclusively with the Keycloak OIDC provider.                                                                                                                                | false                       | No       |
| <a id="opt-stateCookie-name"></a>`stateCookie.name`                                                     | Defines the name of the state cookie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | "`MIDDLEWARE_NAME`-state"   | No       |
| <a id="opt-stateCookie-path"></a>`stateCookie.path`                                                     | Defines the URL path that must exist in the requested URL in order to send the Cookie header. <br /> The `%x2F` ('/') character is considered a directory separator, and subdirectories will match as well. <br /> For example, if `stateCookie.path` is set to `/docs`, these paths will match: `/docs`,`/docs/web/`,`/docs/web/http`.                                                                                                                                                                                    | "/"                         | No       |
| <a id="opt-stateCookie-domain"></a>`stateCookie.domain`                                                 | Defines the hosts that are allowed to receive the cookie. <br />If specified, then subdomains are always included. <br /> For example, if it is set to `example.com`, then cookies are included on subdomains like `api.example.com`.                                                                                                                                                                                                                                                                                      | ""                          | No       |
| <a id="opt-stateCookie-maxAge"></a>`stateCookie.maxAge`                                                 | Defines the number of seconds after which the state cookie should expire. <br />  A zero or negative number will expire the cookie immediately.                                                                                                                                                                                                                                                                                                                                                                            | 600                         | No       |
| <a id="opt-stateCookie-sameSite"></a>`stateCookie.sameSite`                                             | Informsbrowsers how they should handle the state cookie on cross-site requests. <br /> Setting it to `lax` or `strict` can provide some protection against cross-site request forgery attacks ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)). <br /> More information [here](#samesite---accepted-values).                                                                                                                                                                                               | lax                         | No       |
| <a id="opt-stateCookie-httpOnly"></a>`stateCookie.httpOnly`                                             | Forbids JavaScript from accessing the cookie. <br /> For example, through the `Document.cookie` property, the `XMLHttpRequest` API, or the `Request` API. <br /> This mitigates attacks against cross-site scripting ([XSS](https://developer.mozilla.org/en-US/docs/Glossary/XSS)).                                                                                                                                                                                                                                       | true                        | No       |
| <a id="opt-stateCookie-secure"></a>`stateCookie.secure`                                                 | Defines whether the state cookie is only sent to the server when a request is made with the `https` scheme.                                                                                                                                                                                                                                                                                                                                                                                                                | false                       | No       |
| <a id="opt-session-name"></a>`session.name`                                                             | The name of the session cookie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | "`MIDDLEWARE_NAME`-session" | No       |
| <a id="opt-session-path"></a>`session.path`                                                             | Defines the URL path that must exist in the requested URL in order to send the Cookie header. <br />The `%x2F` ('/'') character is considered a directory separator, and subdirectories will match as well. <br /> For example, if `stateCookie.path` is set to `/docs`, these paths will match: `/docs`,`/docs/web/`,`/docs/web/http`.                                                                                                                                                                                    | "/"                         | No       |
| <a id="opt-session-domain"></a>`session.domain`                                                         | Specifies the hosts that are allowed to receive the cookie. If specified, then subdomains are always included. If specified, then subdomains are always included. <br /> For example, if it is set to `example.com`, then cookies are included on subdomains like `api.example.com`.                                                                                                                                                                                                                                       | ""                          | No       |
| <a id="opt-session-expiry"></a>`session.expiry`                                                         | Number of seconds after which the session should expire. A zero or negative number is **prohibited**.                                                                                                                                                                                                                                                                                                                                                                                                                      | 86400 (24h)                 | No       |
| <a id="opt-session-sliding"></a>`session.sliding`                                                       | Forces the middleware to renew the session cookie each time an authenticated request is received.                                                                                                                                                                                                                                                                                                                                                                                                                          | true                        | No       |
| <a id="opt-session-refresh"></a>`session.refresh`                                                       | Enables the access token refresh when it expires.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | true                        | No       |
| <a id="opt-session-sameSite"></a>`session.sameSite`                                                     | Inform browsers how they should handle the session cookie on cross-site requests. <br /> Setting it to `lax` or `strict` can provide some protection against cross-site request forgery attacks ([CSRF](https://developer.mozilla.org/en-US/docs/Glossary/CSRF)). <br /> More information [here](#samesite---accepted-values).                                                                                                                                                                                             | lax                         | No       |
| <a id="opt-session-httpOnly"></a>`session.httpOnly`                                                     | Forbids JavaScript from accessing the cookie. <br /> For example, through the `Document.cookie` property, the `XMLHttpRequest` API, or the `Request` API. <br /> This mitigates attacks against cross-site scripting ([XSS](https://developer.mozilla.org/en-US/docs/Glossary/XSS)).                                                                                                                                                                                                                                       | true                        | No       |
| <a id="opt-session-secure"></a>`session.secure`                                                         | Defines whether the session cookie is only sent to the server when a request is made with the `https` scheme.                                                                                                                                                                                                                                                                                                                                                                                                              | false                       | No       |
| <a id="opt-session-store-redis-endpoints"></a>`session.store.redis.endpoints`                           | Endpoints of the Redis instances to connect to (example: `redis.traefik-hub.svc.cluster.local:6379`)                                                                                                                                                                                                                                                                                                                                                                                                                       | ""                          | Yes      |
| <a id="opt-session-store-redis-username"></a>`session.store.redis.username`                             | The username Traefik Hub will use to connect to Redis                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ""                          | No       |
| <a id="opt-session-store-redis-password"></a>`session.store.redis.password`                             | The password Traefik Hub will use to connect to Redis                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ""                          | No       |
| <a id="opt-session-store-redis-database"></a>`session.store.redis.database`                             | The database Traefik Hub will use to sore information (default: `0`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ""                          | No       |
| <a id="opt-session-store-redis-cluster"></a>`session.store.redis.cluster`                               | Enable Redis Cluster                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ""                          | No       |
| <a id="opt-session-store-redis-tls-caBundle"></a>`session.store.redis.tls.caBundle`                     | Custom CA bundle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ""                          | No       |
| <a id="opt-session-store-redis-tls-cert"></a>`session.store.redis.tls.cert`                             | TLS certificate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ""                          | No       |
| <a id="opt-session-store-redis-tls-key"></a>`session.store.redis.tls.key`                               | TLS key                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ""                          | No       |
| <a id="opt-session-store-redis-tls-insecureSkipVerify"></a>`session.store.redis.tls.insecureSkipVerify` | Allow skipping the TLS verification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ""                          | No       |
| <a id="opt-session-store-redis-sentinel-masterSet"></a>`session.store.redis.sentinel.masterSet`         | Name of the set of main nodes to use for main selection. Required when using Sentinel.                                                                                                                                                                                                                                                                                                                                                                                                                                     | ""                          | No       |
| <a id="opt-session-store-redis-sentinel-username"></a>`session.store.redis.sentinel.username`           | Username to use for sentinel authentication (can be different from `username`)                                                                                                                                                                                                                                                                                                                                                                                                                                             | ""                          | No       |
| <a id="opt-session-store-redis-sentinel-password"></a>`session.store.redis.sentinel.password`           | Password to use for sentinel authentication (can be different from `password`)                                                                                                                                                                                                                                                                                                                                                                                                                                             | ""                          | No       |
| <a id="opt-session-store-keyPrefix"></a>`session.store.keyPrefix`                                       | Defines the prefix of the key for the entries that store the sessions.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ""                          | No       |
| <a id="opt-csrf"></a>`csrf`                                                                             | When enabled, a CSRF cookie, named `hub-csrf-token`, is bound to the OIDC session to protect service from CSRF attacks. <br /> It is based on the [Signed Double Submit Cookie](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#signed-double-submit-cookie) implementation as defined by the OWASP Foundation.<br />Moreinformation [here](#csrf).                                                                                                                  | ""                          | No       |
| <a id="opt-csrf-secure"></a>`csrf.secure`                                                               | Defines whether the CSRF cookie is only sent to the server when a request is made with the `https` scheme.                                                                                                                                                                                                                                                                                                                                                                                                                 | false                       | No       |
| <a id="opt-csrf-headerName"></a>`csrf.headerName`                                                       | Defines the name of the header used to send the CSRF token value received previously in the CSRF cookie.                                                                                                                                                                                                                                                                                                                                                                                                                   | Hub-Csrf-Token              | No       |

### redirectUrl

#### Add specific rule on the IngressRoute

The URL informs the OpenID Connect provider how to return to the middleware.
If the router rule is accepting all paths on a domain, no extra work is needed.
If the router rule is specific about the paths allowed, the path set in this option should be included.

**Defining specific rule for redirectUrl**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: whoami
spec:
  entryPoints:
    - web
    - websecure
  routes:
      # Rules to match the loginUrl and redirectUrl can be added into
      # your current router.
    - match: Path(`/myapi`) || Path(`/login`) || Path(`/callback`)
      kind: Rule
      middlewares:
        - name: test-oidc
```

This URL will not be passed to the upstream application, but rather handled by the middleware itself.
The chosen URL should therefore not conflict with any URLs needed by the upstream application.

This URL sometimes needs to be set in the OpenID Connect Provider's configuration as well (like for Google Accounts for example).

It can be the absolute URL, relative to the protocol (inherits the request protocol), or relative to the domain (inherits the request domain and protocol).
See the following examples.

#### Inherit the Protocol and Domain from the Request and Uses the Redirecturl’s Path

| Request URL                                  | RedirectURL | Result                 |
| :------------------------------------------- | :---------- | :--------------------- |
| <a id="opt-httpexpl-co"></a>`http://expl.co` | `/cback`    | `http://expl.co/cback` |

#### Inherit the Protocol from the Request and Uses the Redirecturl’s Domain and Path

| Request URL                                    | RedirectURL     | Result                  |
| :--------------------------------------------- | :-------------- | :---------------------- |
| <a id="opt-httpsscur-co"></a>`https://scur.co` | `expl.co/cback` | `https://expl.co/cback` |

#### Replace the Request URL with the Redirect URL since It Is an Absolute URL

| Request URL                                      | RedirectURL            | Result                 |
| :----------------------------------------------- | :--------------------- | :--------------------- |
| <a id="opt-httpsscur-co-2"></a>`https://scur.co` | `http://expl.co/cback` | `http://expl.co/cback` |

> **Supported Schemes**
> Only `http` and `https` schemes are supported.
> **Defining the redirectUrl**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-oidc
spec:
  plugin:
    oidc:
      issuer: "https://tenant.auth0.com/realms/myrealm"
      redirectUrl: "/callback"
      clientId: my-oidc-client-name
      clientSecret: mysecret
```

### clientId, clientSecret

#### Storing secret values in Kubernetes secrets

When configuring the `clientId` and the `clientSecret`, it is possible to reference Kubernetes secrets defined in the same namespace as the Middleware.
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
  "user" {
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

> **Access Token and ID Token claims**
> The first argument of the function, which represents the key to look for in the token claims, can be prefixed to specify which of the two kinds of token is inspected.
> Possible prefix values are `id_token.` and `access_token.`. If no prefix is specified, it defaults to the ID token.
>
> | Example                                                                                                                   | Description                                                                                       |
> | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
> | <a id="opt-Equalsid-token-grp-admin"></a>Equals(\`id\_token.grp\`, \`admin\`)                                             | Checks if the value of claim `grp` in the ID token is `admin`.                                    |
> | <a id="opt-Prefixaccess-token-referrer-httpexample-com"></a>Prefix(\`access\_token.referrer\`, \`<http://example.com\\`>) | Checks if the value of claim `referrer` in the access token is prefixed by `http://example.com\`. |
> | <a id="opt-OneOfareas-office-lab"></a>OneOf(\`areas\`, \`office\`, \`lab\`)                                               | Checks if the value of claim `areas` in the ID token is `office` or `labs`.                       |

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
  name: test-oidc
spec:
  plugin:
    oidc:
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

### sameSite - Accepted values

- `none`: Thebrowser will send cookies with both cross-site requests and same-site requests.
- `strict`: Thebrowser will only send cookies for same-site requests (requests originating from the site that set the cookie).
  If the request originated from a different URL than the URL of the current location, none of the cookies tagged with the `strict` attribute will be included.
- `lax`: Same-site cookies are withheld on cross-site subrequests, such as calls to load images or frames, but will be sent when a user navigates to the URL from an external site; for example, by following a link.

### session.store

An OpenID Connect Authentication middleware can use a persistent KV storage to store the `HTTP` sessions data
instead of keeping all the state in cookies.
It avoids cookies growing inconveniently large, which can lead to latency issues.

Refer to the [redis options](#configuration-options) to configure the Redis connection.

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

**Defining Redis connection**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-oidc
spec:
  plugin:
    oidc:
      issuer: "https://tenant.auth0.com/realms/myrealm"
      redirectUrl: "/callback"
      clientId: my-oidc-client-name
      clientSecret: mysecret
      session:
        store:
          redis:
            endpoints:
              - redis-master.traefik-hub.svc.cluster.local:6379
            password: "urn:k8s:secret:oidc:redisPass"
```

**Creating the Kubernetes secret**

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: oidc
stringData:
  redisPass: mysecret12345678
```

### csrf

#### CSRF Internal Behavior

When the OIDC session is expired, the corresponding CSRF cookie is deleted.
This means that a new CSRF token will be generated and sent to the client whenever the session is refreshed or recreated.

When a request is sent and uses a non-safe method (see [RFC7231#section-4.2.1](https://datatracker.ietf.org/doc/html/rfc7231.html#section-4.2.1)),
the CSRF token value (extracted from the cookie) have to be sent to the server in the header configured with the [headerName option](#configuration-options).
