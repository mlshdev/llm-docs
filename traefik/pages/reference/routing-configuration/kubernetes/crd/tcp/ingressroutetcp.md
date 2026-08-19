> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/kubernetes/crd/tcp/ingressroutetcp.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/kubernetes/crd/tcp/ingressroutetcp.md)

`IngressRouteTCP` is the CRD implementation of a [Traefik TCP router](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority).

Before creating `IngressRouteTCP` objects, you need to apply the [Traefik Kubernetes CRDs](https://doc.traefik.io/traefik/reference/dynamic-configuration/kubernetes-crd/#definitions) to your Kubernetes cluster.

This registers the `IngressRouteTCP` kind and other Traefik-specific resources.

> **General**
> If both HTTP routers and TCP routers are connected to the same EntryPoint, the TCP routers will apply before the HTTP routers. If no matching route is found for the TCP routers, then the HTTP routers will take over.

## Configuration Example

You can declare an `IngressRouteTCP` as detailed below:

**IngressRouteTCP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: ingressroutetcpfoo
  namespace: apps

spec:
  ingressClassName: traefik-lb
  entryPoints:
    - footcp
  routes:
  - match: HostSNI(`*`)
    priority: 10
    middlewares:
    - name: middleware1
      namespace: default
    services:
    - name: foo
      port: 8080
      weight: 10
      serversTransport: transport
      nativeLB: true
      nodePortLB: true

  tls:
    secretName: supersecret
    options:
      name: opt
      namespace: default
    certResolver: foo
    domains:
    - main: example.net
      sans:
      - a.example.net
      - b.example.net
    passthrough: false
```

## Configuration Options

| Field                                                                                                 | Description                                                                                                                                                                                                                                                                                                 | Default | Required |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| <a id="opt-ingressClassName"></a>`ingressClassName`                                                   | Defines the [IngressClass](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class) cluster resource to use. It replaces the deprecated `kubernetes.io/ingress.class` annotation.<br />The spec field takes precedence over the annotation.                                          |         | No       |
| <a id="opt-entryPoints"></a>`entryPoints`                                                             | List of entrypoints names.                                                                                                                                                                                                                                                                                  |         | No       |
| <a id="opt-routes"></a>`routes`                                                                       | List of routes.                                                                                                                                                                                                                                                                                             |         | Yes      |
| <a id="opt-routesn-match"></a>`routes[n].match`                                                       | Defines the [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#rules) of the underlying router.                                                                                                                                                      |         | Yes      |
| <a id="opt-routesn-priority"></a>`routes[n].priority`                                                 | Defines the [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#priority-calculation) to disambiguate rules of the same length, for route matching.                                                                                               |         | No       |
| <a id="opt-routesn-middlewaresn-name"></a>`routes[n].middlewares[n].name`                             | Defines the [MiddlewareTCP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/middlewaretcp) name.                                                                                                                                                                     |         | Yes      |
| <a id="opt-routesn-middlewaresn-namespace"></a>`routes[n].middlewares[n].namespace`                   | Defines the [MiddlewareTCP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/middlewaretcp) namespace.                                                                                                                                                                | ""      | No       |
| <a id="opt-routesn-services"></a>`routes[n].services`                                                 | List of [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/) definitions.                                                                                                                                                                                                 |         | No       |
| <a id="opt-routesn-servicesn-name"></a>`routes[n].services[n].name`                                   | Defines the name of a [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/).                                                                                                                                                                                               |         | Yes      |
| <a id="opt-routesn-servicesn-namespace"></a>`routes[n].services[n].namespace`                         | Defines the namespace of the referenced [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/).                                                                                                                                                                             | ""      | No       |
| <a id="opt-routesn-servicesn-port"></a>`routes[n].services[n].port`                                   | Defines the port of a [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/). This can be a reference to a named port.                                                                                                                                                      |         | Yes      |
| <a id="opt-routesn-servicesn-weight"></a>`routes[n].services[n].weight`                               | Defines the weight to apply to the server load balancing.                                                                                                                                                                                                                                                   | 1       | No       |
| <a id="opt-routesn-servicesn-proxyProtocol"></a>`routes[n].services[n].proxyProtocol`                 | Defines the [PROXY protocol](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints#proxyprotocol-and-load-balancers) configuration.                                                                                                                                               |         | No       |
| <a id="opt-routesn-servicesn-proxyProtocol-version"></a>`routes[n].services[n].proxyProtocol.version` | Defines the [PROXY protocol](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints#proxyprotocol-and-load-balancers) version.                                                                                                                                                     |         | No       |
| <a id="opt-routesn-servicesn-serversTransport"></a>`routes[n].services[n].serversTransport`           | Defines the [ServersTransportTCP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/serverstransporttcp).<br />The `ServersTransport` namespace is assumed to be the [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/) namespace. |         | No       |
| <a id="opt-routesn-servicesn-tls"></a>`routes[n].services[n].tls`                                     | Determines whether to use TLS when dialing with the backend.                                                                                                                                                                                                                                                | false   | No       |
| <a id="opt-routesn-servicesn-nativeLB"></a>`routes[n].services[n].nativeLB`                           | Controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP. See [here](#nativelb) for more information.                                                                                                        | false   | No       |
| <a id="opt-routesn-servicesn-nodePortLB"></a>`routes[n].services[n].nodePortLB`                       | Controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is `NodePort`. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.      | false   | No       |
| <a id="opt-tls"></a>`tls`                                                                             | Defines [TLS](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview) certificate configuration.                                                                                                                                                            |         | No       |
| <a id="opt-tls-secretName"></a>`tls.secretName`                                                       | Defines the [secret](https://kubernetes.io/docs/concepts/configuration/secret/) name used to store the certificate (in the `IngressRoute` namespace).                                                                                                                                                       | ""      | No       |
| <a id="opt-tls-options"></a>`tls.options`                                                             | Defines the reference to a [TLSOption](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption).                                                                                                                                                                   | ""      | No       |
| <a id="opt-tls-options-name"></a>`tls.options.name`                                                   | Defines the [TLSOption](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption) name.                                                                                                                                                                             | ""      | No       |
| <a id="opt-tls-options-namespace"></a>`tls.options.namespace`                                         | Defines the [TLSOption](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption) namespace.                                                                                                                                                                        | ""      | No       |
| <a id="opt-tls-store"></a>`tls.store`                                                                 | Defines the reference to a [TLSStore](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsstore). Note that only the `default` TLSStore can be used.                                                                                                                  |         | No       |
| <a id="opt-tls-certResolver"></a>`tls.certResolver`                                                   | Defines the reference to a [CertResolver](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview).                                                                                                                                                          | ""      | No       |
| <a id="opt-tls-domains"></a>`tls.domains`                                                             | List of domains.                                                                                                                                                                                                                                                                                            | ""      | No       |
| <a id="opt-tls-domainsn-main"></a>`tls.domains[n].main`                                               | Defines the main domain name.                                                                                                                                                                                                                                                                               | ""      | No       |
| <a id="opt-tls-domainsn-sans"></a>`tls.domains[n].sans`                                               | List of SANs (alternative domains).                                                                                                                                                                                                                                                                         | ""      | No       |
| <a id="opt-tls-passthrough"></a>`tls.passthrough`                                                     | If `true`, delegates the TLS termination to the backend.                                                                                                                                                                                                                                                    | false   | No       |

### ExternalName Service

Traefik connect to a backend with a domain and a port. However, Kubernetes [ExternalName Service](https://kubernetes.io/docs/concepts/services-networking/service/#externalname) can be defined without any port. Accordingly, Traefik supports defining a port in two ways:

- only on `IngressRouteTCP` service
- on both sides, you'll be warned if the ports don't match, and the `IngressRouteTCP` service port is used

Thus, in case of two sides port definition, Traefik expects a match between ports.

\=== "Ports defined on Resource"

````
**IngressRouteTCP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: test.route
  namespace: apps

spec:
  entryPoints:
    - foo
  routes:
  - match: Host(`example.net`)
    services:
    - name: external-svc
      port: 80
```

**Service ExternalName**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-svc
  namespace: apps

spec:
  externalName: external.domain
  type: ExternalName
```
````

\=== "Port defined on the Service"

````
**IngressRouteTCP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: test.route
  namespace: apps

spec:
  entryPoints:
    - foo
  routes:
  - match: Host(`example.net`)
    services:
    - name: external-svc
```

**Service ExternalName**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-svc
  namespace: apps

spec:
  externalName: external.domain
  type: ExternalName
  ports:
    - port: 80
```
````

\=== "Port defined on both sides"

````
**IngressRouteTCP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: test.route
  namespace: apps

spec:
  entryPoints:
    - foo
  routes:
  - match: Host(`example.net`)
    services:
    - name: external-svc
      port: 80
```

**Service ExternalName**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-svc
  namespace: apps

spec:
  externalName: external.domain
  type: ExternalName
  ports:
    - port: 80
```
````

### NativeLB

To avoid creating the server load-balancer with the pods IPs and use Kubernetes Service `clusterIP` directly, one should set the `NativeLB` option to true. By default, `NativeLB` is false.

**IngressRouteTCP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteTCP
metadata:
  name: test.route
  namespace: default
spec:
  entryPoints:
    - foo
  routes:
  - match: HostSNI(`*`)
    services:
    - name: svc
      port: 80
      # Here, nativeLB instructs to build the servers load balancer with the Kubernetes Service clusterIP only.
      nativeLB: true
```

**Service**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: svc
  namespace: default
spec:
  type: ClusterIP
  ...
```
