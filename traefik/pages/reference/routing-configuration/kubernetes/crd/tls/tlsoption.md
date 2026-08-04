> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/kubernetes/crd/tls/tlsoption.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/kubernetes/crd/tls/tlsoption.md)

The TLS options allow you to configure some parameters of the TLS connection in Traefik.

Before creating `TLSOption` objects or referencing TLS options in the [`IngressRoute`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/ingressroute) / [`IngressRouteTCP`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/ingressroutetcp) objects, you need to apply the [Traefik Kubernetes CRDs](https://doc.traefik.io/traefik/reference/dynamic-configuration/kubernetes-crd/#definitions) to your Kubernetes cluster.

> **References and namespaces**
> If the optional namespace attribute is not set, the configuration will be applied with the namespace of the `IngressRoute`/`IngressRouteTCP`.
>
> Additionally, when the definition of the TLS option is from another provider, the cross-provider [syntax](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview#provider-namespace) (`middlewarename@provider`) should be used to refer to the TLS option. Specifying a namespace attribute in this case would not make any sense, and will be ignored.
> **TLSOption in Kubernetes**
> When using the `TLSOption` resource in Kubernetes, one might setup a default set of options that,
> if not explicitly overwritten, should apply to all ingresses.
> To achieve that, you'll have to create a `TLSOption` resource with the name `default`.
> There may exist only one `TLSOption` with the name `default` (across all namespaces) - otherwise they will be dropped.
> To explicitly use a different `TLSOption` (and using the Kubernetes Ingress resources)
> you'll have to add an annotation to the Ingress in the following form:
> `traefik.ingress.kubernetes.io/router.tls.options: <resource-namespace>-<resource-name>@kubernetescrd`

## Configuration Example

**TLSOption**

```yaml
apiVersion: traefik.io/v1alpha1
kind: TLSOption
metadata:
  name: mytlsoption
  namespace: default

spec:
  minVersion: VersionTLS12
  sniStrict: true
  cipherSuites:
    - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
    - TLS_RSA_WITH_AES_256_GCM_SHA384
  clientAuth:
    secretNames:
      - secret-ca1
      - secret-ca2
    clientAuthType: VerifyClientCertIfGiven
```

## Configuration Options

| Field                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                              | Default                    | Required |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- | :------- |
| <a id="opt-minVersion"></a>`minVersion`                               | Minimum TLS version that is acceptable.                                                                                                                                                                                                                                                                                                                                                                  | "VersionTLS12"             | No       |
| <a id="opt-maxVersion"></a>`maxVersion`                               | Maximum TLS version that is acceptable.<br />We do not recommend setting this option to disable TLS 1.3.                                                                                                                                                                                                                                                                                                 |                            | No       |
| <a id="opt-cipherSuites"></a>`cipherSuites`                           | List of supported [cipher suites](https://godoc.org/crypto/tls#pkg-constants) for TLS versions up to TLS 1.2.<br />[Cipher suites defined for TLS 1.2 and below cannot be used in TLS 1.3, and vice versa.](https://tools.ietf.org/html/rfc8446)<br />With TLS 1.3, [the cipher suites are not configurable](https://golang.org/doc/go1.12#tls_1_3) (all supported cipher suites are safe in this case). |                            | No       |
| <a id="opt-curvePreferences"></a>`curvePreferences`                   | List of the elliptic curves references that will be used in an ECDHE handshake.<br />Use curves names from [`crypto`](https://godoc.org/crypto/tls#CurveID) or the [RFC](https://tools.ietf.org/html/rfc8446#section-4.2.7).<br />See [CurveID](https://godoc.org/crypto/tls#CurveID) for more information.                                                                                              |                            | No       |
| <a id="opt-clientAuth-secretNames"></a>`clientAuth.secretNames`       | Client Authentication (mTLS) option.<br />List of names of the referenced Kubernetes [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) (in TLSOption namespace).<br /> The secret must contain a certificate under either a `tls.ca` or a `ca.crt` key.                                                                                                                               |                            | No       |
| <a id="opt-clientAuth-clientAuthType"></a>`clientAuth.clientAuthType` | Client Authentication (mTLS) option.<br />Client authentication type to apply. Available values [here](#client-authentication-mtls).                                                                                                                                                                                                                                                                     |                            | No       |
| <a id="opt-sniStrict"></a>`sniStrict`                                 | Allow rejecting connections from clients connections that do not specify a server\_name extension.<br />The [default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#default-certificate) is never served is the option is enabled.                                                                                                           | false                      | No       |
| <a id="opt-alpnProtocols"></a>`alpnProtocols`                         | List of supported application level protocols for the TLS handshake, in order of preference.<br />If the client supports ALPN, the selected protocol will be one from this list, and the connection will fail if there is no mutually supported protocol.                                                                                                                                                | "h2, http/1.1, acme-tls/1" | No       |
| <a id="opt-disableSessionTickets"></a>`disableSessionTickets`         | Allow disabling the use of session tickets, forcing every client to perform a full TLS handshake instead of resuming sessions.                                                                                                                                                                                                                                                                           | false                      | No       |

### Client Authentication (mTLS)

The `clientAuth.clientAuthType` option governs the behavior as follows:

- `NoClientCert`: disregards any client certificate.
- `RequestClientCert`: asks for a certificate but proceeds anyway if none is provided.
- `RequireAnyClientCert`: requires a certificate but does not verify if it is signed by a CA listed in `clientAuth.caFiles` or in `clientAuth.secretNames`.
- `VerifyClientCertIfGiven`: if a certificate is provided, verifies if it is signed by a CA listed in `clientAuth.caFiles` or in `clientAuth.secretNames`. Otherwise proceeds without any certificate.
- `RequireAndVerifyClientCert`: requires a certificate, which must be signed by a CA listed in `clientAuth.caFiles` or in `clientAuth.secretNames`.

> **CA Secret**
> The CA secret must contain a base64 encoded certificate under either a `tls.ca` or a `ca.crt` key.

### Default TLS Option

When no TLS options are specified in an `IngressRoute`/`IngressRouteTCP`, the `default` option is used.
The default behavior is summed up in the table below:

| Configuration                                                     | Behavior                                                    |
| :---------------------------------------------------------------- | :---------------------------------------------------------- |
| <a id="opt-No-default-TLS-Option"></a>No `default` TLS Option     | Default internal set of TLS Options by default.             |
| <a id="opt-One-default-TLS-Option"></a>One `default` TLS Option   | Custom TLS Options applied by default.                      |
| <a id="opt-Many-default-TLS-Option"></a>Many `default` TLS Option | Error log + Default internal set of TLS Options by default. |
