> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/kubernetes/crd/tls/tlsstore.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/kubernetes/crd/tls/tlsstore.md)

In Traefik, certificates are grouped together in certificates stores.

`TLSStore` is the CRD implementation of a [Traefik TLS Store](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-certificates#certificates-stores).

Before creating `TLSStore` objects, you need to apply the [Traefik Kubernetes CRDs](https://doc.traefik.io/traefik/reference/dynamic-configuration/kubernetes-crd/#definitions) to your Kubernetes cluster.

> **Default TLS Store**
> Traefik currently only uses the TLS Store named "default". This default `TLSStore` should be in a namespace discoverable by Traefik. Since it is used by default on `IngressRoute` and `IngressRouteTCP` objects, there never is a need to actually reference it. This means that you cannot have two stores that are named default in different Kubernetes namespaces. As a consequence, with respect to TLS stores, the only change that makes sense (and only if needed) is to configure the default `TLSStore`. The [`defaultTLSResourcesNamespace`](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-crd#defaulttlsresourcesnamespace) provider option restricts the namespace this cluster-wide store can be defined in.

## Configuration Example

**TLSStore**

```yaml
apiVersion: traefik.io/v1alpha1
kind: TLSStore
metadata:
  name: default

spec:
  defaultCertificate:
    secretName:  supersecret
```

## Configuration Options

| Field                                                                               | Description                                                                                                                                                                                                                                                                                       | Required |
| :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| <a id="opt-certificatesn-secretName"></a>`certificates[n].secretName`               | List of Kubernetes [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/), each of them holding a key/certificate pair to add to the store.                                                                                                                                         | No       |
| <a id="opt-defaultCertificate-secretName"></a>`defaultCertificate.secretName`       | Name of the Kubernetes [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) served for connections without a SNI, or without a matching domain. If no default certificate is provided, Traefik will use the generated one. Do not use if the option `defaultGeneratedCert` is set. | No       |
| <a id="opt-defaultGeneratedCert-resolver"></a>`defaultGeneratedCert.resolver`       | Name of the ACME resolver to use to generate the default certificate.<br /> Do not use if the option `defaultCertificate` is set.                                                                                                                                                                 | No       |
| <a id="opt-defaultGeneratedCert-domain-main"></a>`defaultGeneratedCert.domain.main` | Main domain used to generate the default certificate.<br /> Do not use if the option `defaultCertificate` is set.                                                                                                                                                                                 | No       |
| <a id="opt-defaultGeneratedCert-domain-sans"></a>`defaultGeneratedCert.domain.sans` | List of [Subject Alternative Name](https://en.wikipedia.org/wiki/Subject_Alternative_Name) used to generate the default certificate.<br /> Do not use if the option `defaultCertificate` is set.                                                                                                  | No       |

> **DefaultCertificate vs DefaultGeneratedCert**
> If both `defaultCertificate` and `defaultGeneratedCert` are set, the TLS certificate contained in `defaultCertificate.secretName` is served. The ACME default certificate is not generated.
