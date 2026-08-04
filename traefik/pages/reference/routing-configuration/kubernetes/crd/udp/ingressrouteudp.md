> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/reference/routing-configuration/kubernetes/crd/udp/ingressrouteudp.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/reference/routing-configuration/kubernetes/crd/udp/ingressrouteudp.md)

`IngressRouteUDP` is the CRD implementation of a [Traefik UDP router](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/routing/rules-priority).

Before creating `IngressRouteUDP` objects, you need to apply the [Traefik Kubernetes CRDs](https://doc.traefik.io/traefik/reference/dynamic-configuration/kubernetes-crd/#definitions) to your Kubernetes cluster.

This registers the `IngressRouteUDP` kind and other Traefik-specific resources.

## Configuration Example

**IngressRouteUDP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteUDP
metadata:
  name: ingressrouteudpfoo
  namespace: apps
spec:
  ingressClassName: traefik-lb
  entryPoints:
    - fooudp  # The entry point where Traefik listens for incoming traffic.
  routes:
  - services:
    - name: foo # The name of the Kubernetes Service to route to.
      port: 8080
      weight: 10
      nativeLB: true # Enables native load balancing between pods.
```

## Configuration Options

| Field                                                                           | Description                                                                                                                                                                                                                                                                                                                                      | Default | Required |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | -------- |
| <a id="opt-ingressClassName"></a>`ingressClassName`                             | Defines the [IngressClass](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class) cluster resource to use. It replaces the deprecated `kubernetes.io/ingress.class` annotation.<br />The spec field takes precedence over the annotation.                                                                               |         | No       |
| <a id="opt-entryPoints"></a>`entryPoints`                                       | List of entrypoints names.                                                                                                                                                                                                                                                                                                                       |         | No       |
| <a id="opt-routes"></a>`routes`                                                 | List of routes.                                                                                                                                                                                                                                                                                                                                  |         | Yes      |
| <a id="opt-routesn-services"></a>`routes[n].services`                           | List of [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/) definitions. See [here](#externalname-service) for `ExternalName Service` setup.                                                                                                                                                                  |         | No       |
| <a id="opt-routesn-servicesn-name"></a>`routes[n].services[n].name`             | Defines the name of a [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/).                                                                                                                                                                                                                                    |         | Yes      |
| <a id="opt-routesn-servicesn-port"></a>`routes[n].services[n].port`             | Defines the port of a [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/). This can be a reference to a named port.                                                                                                                                                                                           |         | Yes      |
| <a id="opt-routesn-servicesn-weight"></a>`routes[n].services[n].weight`         | Defines the weight to apply to the server load balancing.                                                                                                                                                                                                                                                                                        | 1       | No       |
| <a id="opt-routesn-servicesn-nativeLB"></a>`routes[n].services[n].nativeLB`     | Controls, when creating the load-balancer, whether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.                                                                                                                                                                                         | false   | No       |
| <a id="opt-routesn-servicesn-nodePortLB"></a>`routes[n].services[n].nodePortLB` | Controls, when creating the load-balancer, whether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort. It allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes. See [here](#nativelb) for more information. | false   | No       |

### ExternalName Service

Traefik backends creation needs a port to be set, however Kubernetes [ExternalName Service](https://kubernetes.io/docs/concepts/services-networking/service/#externalname) could be defined without any port. Accordingly, Traefik supports defining a port in two ways:

- only on `IngressRouteUDP` service
- on both sides, you'll be warned if the ports don't match, and the `IngressRouteUDP` service port is used

Thus, in case of two sides port definition, Traefik expects a match between ports.

\=== "Ports defined on Resource"

````
**IngressRouteUDP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteUDP
metadata:
  name: test.route
  namespace: apps

spec:
  entryPoints:
    - foo
  routes:
  - services:
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
**IngressRouteUDP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteUDP
metadata:
  name: test.route
  namespace: apps

spec:
  entryPoints:
    - foo
  routes:
  - services:
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
**IngressRouteUDP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteUDP
metadata:
  name: test.route
  namespace: apps

spec:
  entryPoints:
    - foo
  routes:
  - services:
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

**IngressRouteUDP**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRouteUDP
metadata:
  name: test.route
  namespace: default
spec:
  entryPoints:
    - foo
routes:
- services:
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
