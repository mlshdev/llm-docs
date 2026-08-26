> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/providers/kubernetes/kubernetes-crd.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/providers/kubernetes/kubernetes-crd.md)

Traefik provides some Kubernetes Custom Resources, such as `IngressRoute`, `Middleware`, etc.

When using KubernetesCRD as a provider,
Traefik uses [Custom Resource Definition](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) to retrieve its routing configuration.
Traefik Custom Resource Definitions are [listed below](#routing-configuration).

When Traefik is installed using the Helm Chart, by default, the provider `kubernetesCRD` is enabled.

## Requirements

When you install Traefik without using the Helm Chart, or when you are upgrading the stack using Helm, ensure that you satisfy the following requirements:

- Add/update **all** the Traefik resources definitions
- Add/update the [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) for the Traefik custom resources

```bash
# Install Traefik Resource Definitions:
kubectl apply -f https://raw.githubusercontent.com/traefik/traefik/v3.7/docs/content/reference/dynamic-configuration/kubernetes-crd-definition-v1.yml

# Install RBAC for Traefik:
kubectl apply -f https://raw.githubusercontent.com/traefik/traefik/v3.7/docs/content/reference/dynamic-configuration/kubernetes-crd-rbac.yml
```

## Configuration Example

You can enable the `kubernetesCRD` provider as detailed below:

**File (YAML)**

```yaml
providers:
  kubernetesCRD: {}
```

**File (TOML)**

```toml
[providers.kubernetesCRD]
```

**CLI**

```bash
--providers.kubernetescrd=true
```

**Helm Chart Values**

```yaml
## Values file
providers:
  kubernetesCRD:
    enabled: true
```

## Configuration Options

| Field                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default | Required |
| :-------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------ | :------- |
| <a id="opt-providers-providersThrottleDuration"></a>`providers.providersThrottleDuration`                                   | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.**                                                                                      | 2s      | No       |
| <a id="opt-providers-kubernetesCRD-endpoint"></a>`providers.kubernetesCRD.endpoint`                                         | Server endpoint URL.<br />More information [here](#endpoint).                                                                                                                                                                                                                                                                                                                                                                                                             | ""      | No       |
| <a id="opt-providers-kubernetesCRD-token"></a>`providers.kubernetesCRD.token`                                               | Bearer token used for the Kubernetes client configuration (not needed for in-cluster client).<br />It accepts either a token value or a file path to the token.                                                                                                                                                                                                                                                                                                           | ""      | No       |
| <a id="opt-providers-kubernetesCRD-certAuthFilePath"></a>`providers.kubernetesCRD.certAuthFilePath`                         | Path to the certificate authority file.<br />Used for the Kubernetes client configuration.                                                                                                                                                                                                                                                                                                                                                                                | ""      | No       |
| <a id="opt-providers-kubernetesCRD-namespaces"></a>`providers.kubernetesCRD.namespaces`                                     | Array of namespaces to watch.<br />If left empty, watch all namespaces.                                                                                                                                                                                                                                                                                                                                                                                                   | \[]     | No       |
| <a id="opt-providers-kubernetesCRD-labelSelector"></a>`providers.kubernetesCRD.labelSelector`                               | Allow filtering on specific resource objects only using label selectors.<br />Only to Traefik [Custom Resources](#routing-configuration) (they all must match the filter).<br />No effect on Kubernetes `Secrets`, `EndpointSlices` and `Services`.<br />See [label-selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors) for details.                                                                                    | ""      | No       |
| <a id="opt-providers-kubernetesCRD-ingressClass"></a>`providers.kubernetesCRD.ingressClass`                                 | Value of `spec.ingressClassName` field (or the deprecated `kubernetes.io/ingress.class` annotation) that identifies resource objects to be processed.<br />If empty, resources missing the field/annotation, having an empty value, or the value `traefik` are processed.<br />The `spec.ingressClassName` field takes precedence over the annotation.                                                                                                                    | ""      | No       |
| <a id="opt-providers-kubernetesCRD-throttleDuration"></a>`providers.kubernetesCRD.throttleDuration`                         | Minimum amount of time to wait between two Kubernetes events before producing a new configuration.<br />This prevents a Kubernetes cluster that updates many times per second from continuously changing your Traefik configuration.<br />If empty, every event is caught.                                                                                                                                                                                                | 0s      | No       |
| <a id="opt-providers-kubernetesCRD-allowEmptyServices"></a>`providers.kubernetesCRD.allowEmptyServices`                     | Allows creating a route to reach a service that has no endpoint available.<br />It allows Traefik to handle the requests and responses targeting this service (applying middleware or observability operations) before returning a `503` HTTP Status.                                                                                                                                                                                                                     | false   | No       |
| <a id="opt-providers-kubernetesCRD-allowCrossNamespace"></a>`providers.kubernetesCRD.allowCrossNamespace`                   | Allows the `IngressRoutes` to reference resources in namespaces other than theirs.                                                                                                                                                                                                                                                                                                                                                                                        | false   | No       |
| <a id="opt-providers-kubernetesCRD-allowExternalNameServices"></a>`providers.kubernetesCRD.allowExternalNameServices`       | Allows the `IngressRoutes` to reference ExternalName services.                                                                                                                                                                                                                                                                                                                                                                                                            | false   | No       |
| <a id="opt-providers-kubernetesCRD-crossProviderNamespaces"></a>`providers.kubernetesCRD.crossProviderNamespaces`           | List of namespaces from which `IngressRoute`, `IngressRouteTCP`, `IngressRouteUDP`, and `TraefikService` are allowed to declare cross-provider references (e.g. `myservice@file`).<br />When unset, all namespaces are allowed. When set to `[]`, every cross-provider reference is rejected.                                                                                                                                                                             | \[]     | No       |
| <a id="opt-providers-kubernetesCRD-nativeLBByDefault"></a>`providers.kubernetesCRD.nativeLBByDefault`                       | Allow using the Kubernetes Service load balancing between the pods instead of the one provided by Traefik for every `IngressRoute` by default.<br />It can be overridden in the [`Service`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/service#opt-nativeLB).                                                                                                                                                                | false   | No       |
| <a id="opt-providers-kubernetesCRD-disableClusterScopeResources"></a>`providers.kubernetesCRD.disableClusterScopeResources` | Prevent from discovering cluster scope resources (`IngressClass` and `Nodes`).<br />By doing so, it alleviates the requirement of giving Traefik the rights to look up for cluster resources.<br />Furthermore, Traefik will not handle IngressRoutes with IngressClass references, therefore such Ingresses will be ignored (please note that annotations are not affected by this option).<br />This will also prevent from using the `NodePortLB` options on services. | false   | No       |
| <a id="opt-providers-kubernetesCRD-defaultTLSResourcesNamespace"></a>`providers.kubernetesCRD.defaultTLSResourcesNamespace` | Restricts the namespace in which the `TLSOption` and the `TLSStore` named `default` can be defined.<br />More information [here](#defaulttlsresourcesnamespace).                                                                                                                                                                                                                                                                                                          | ""      | No       |
| <a id="opt-providers-kubernetesCRD-safeNaming"></a>`providers.kubernetesCRD.safeNaming`                                     | Enables collision-safe naming for the routers, middlewares and services generated by the provider.<br />When unset, the legacy naming scheme is used and a warning is logged on startup. More information [here](#safenaming).                                                                                                                                                                                                                                            | false   | No       |

### endpoint

The Kubernetes server endpoint URL.

When deployed into Kubernetes, Traefik reads the environment variables `KUBERNETES_SERVICE_HOST` and `KUBERNETES_SERVICE_PORT` or `KUBECONFIG` to construct the endpoint.

The access token is looked up in `/var/run/secrets/kubernetes.io/serviceaccount/token` and the SSL CA certificate in `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`.
Both are mounted automatically when deployed inside Kubernetes.

The endpoint may be specified to override the environment variable values inside a cluster.

When the environment variables are not found, Traefik tries to connect to the Kubernetes API server with an external-cluster client.
In this case, the endpoint is required.
Specifically, it may be set to the URL used by `kubectl proxy` to connect to a Kubernetes cluster using the granted authentication and authorization of the associated kubeconfig.

**File (YAML)**

```yaml
providers:
  kubernetesCRD:
    endpoint: "http://localhost:8080"
    # ...
```

**File (TOML)**

```toml
[providers.kubernetesCRD]
  endpoint = "http://localhost:8080"
  # ...
```

**CLI**

```bash
--providers.kubernetesCRD.endpoint=http://localhost:8080
```

### defaultTLSResourcesNamespace

The `TLSOption` and the `TLSStore` named `default` are cluster-wide, whatever the namespace they are defined in:
the former holds the TLS enforcement policy of every router that does not reference a TLSOption explicitly,
the latter holds the default certificate served by every entry point.
This option allows the cluster operator to reserve their definition to a namespace they control.

When the option is not set, a `TLSOption` or a `TLSStore` named `default` is taken into account whatever its namespace,
which is the default and backward compatible behavior.
When it is set to a namespace, only the resources named `default` in this namespace are taken into account.

> **Ignored resources**
> A `TLSOption` or a `TLSStore` named `default` defined outside of the configured namespace is ignored,
> and cannot be referenced under its namespaced name either.
> For a `TLSStore`, this also applies to the certificates it defines.
> **File (YAML)**

```yaml
providers:
  kubernetesCRD:
    defaultTLSResourcesNamespace: traefik
    # ...
```

**File (TOML)**

```toml
[providers.kubernetesCRD]
  defaultTLSResourcesNamespace = "traefik"
  # ...
```

**CLI**

```bash
--providers.kubernetesCRD.defaultTLSResourcesNamespace=traefik
```

### safeNaming

By default, the Kubernetes CRD provider generates the names of the routers, middlewares and services it builds by
joining the namespace and the name of the object they come from, which can produce the same name for two distinct
objects, one silently replacing the other.

`safeNaming` enables collision-safe naming instead: generated names are derived from the identity of the object
they come from, and Kubernetes Services referenced from several parents (a route with several services, or a
Weighted/Mirroring/HighestRandomWeight TraefikService) are scoped to their parent instead of being shared by identity.

| Value                           | Behavior                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| <a id="opt-not-set"></a>not set | Current naming is used (default, backward compatible), and a warning is logged on startup. |
| <a id="opt-true"></a>`true`     | Collision-safe naming is used.                                                             |
| <a id="opt-false"></a>`false`   | Current naming is used, and the startup warning is silenced.                               |

> **Startup warning**
> When `safeNaming` is left unset, a warning is logged on startup, since the current naming scheme is collision-prone.
> It is recommended to explicitly set this option, to `true` on new setups, or to `false` to keep the current
> behavior and silence the warning.
> When `safeNaming` is enabled, the generated names are no longer normalized: their components are joined with a
> `_` separator, which cannot appear in a Kubernetes namespace or name, and the ones generated for a route are
> derived from the route index instead of its rule. For example, for a Kubernetes Service named `whoami` and an
> IngressRoute named `test.route`, both in the `default` namespace:

```text
default-whoami-80                          ->    default_whoami_80
default-test-route-6b204d94623b3df4370c    ->    default_test.route_0
```

The services generated for the Kubernetes Services referenced by a `TraefikService` (weighted, mirroring or
highest random weight), or by a route with several services, are named after the parent declaring the reference,
followed by the index of the reference, and the namespace, the name and the port of the referenced Kubernetes Service:

```text
default-whoami-80    ->    default_wrr1_wrr_1_default_whoami_80
```

Each of these references carries its own options (`serversTransport`, `scheme`, `sticky`, `healthCheck`, ...),
which were not part of the generated name before: two references to the same Kubernetes Service with different
options were collapsed into a single service, and the last one built silently won. With `safeNaming` enabled,
they are distinct services, which also means that the servers of a Kubernetes Service referenced from several
parents are health checked once per reference, instead of once for all of them.

> **Observability**
> These names are user-visible: they appear in the dashboard and API, in the access logs `RouterName` and `ServiceName` fields,
> and in the `router` and `service` labels of the metrics.
> Dashboards, alerting rules, and log queries that match on Kubernetes CRD router, middleware or service names must be updated accordingly
> when `safeNaming` is enabled.
> **File (YAML)**

```yaml
providers:
  kubernetesCRD:
    safeNaming: true
    # ...
```

**File (TOML)**

```toml
[providers.kubernetesCRD]
  safeNaming = true
  # ...
```

**CLI**

```bash
--providers.kubernetesCRD.safeNaming=true
```

## Routing Configuration

Traefik CRDs are building blocks that you can assemble according to your needs.

The available custom resources are in the table below:

| Resource                                                                                                                                                              | Purpose                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| <a id="opt-IngressRoute"></a>[IngressRoute](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/ingressroute)                     | HTTP Routing                                                      |
| <a id="opt-Middleware"></a>[Middleware](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/middleware)                           | Tweaks the HTTP requests before they are sent to your service     |
| <a id="opt-TraefikService"></a>[TraefikService](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/traefikservice)               | Abstraction for HTTP loadbalancing/mirroring                      |
| <a id="opt-TLSOptions"></a>[TLSOptions](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption)                             | Allows configuring some parameters of the TLS connection          |
| <a id="opt-TLSStores"></a>[TLSStores](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsstore)                                | Allows configuring the default TLS store                          |
| <a id="opt-ServersTransport"></a>[ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/serverstransport)         | Allows configuring the transport between Traefik and the backends |
| <a id="opt-IngressRouteTCP"></a>[IngressRouteTCP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/ingressroutetcp)             | TCP Routing                                                       |
| <a id="opt-MiddlewareTCP"></a>[MiddlewareTCP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/middlewaretcp)                   | Tweaks the TCP requests before they are sent to your service      |
| <a id="opt-ServersTransportTCP"></a>[ServersTransportTCP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tcp/serverstransporttcp) | Allows configuring the transport between Traefik and the backends |
| <a id="opt-IngressRouteUDP"></a>[IngressRouteUDP](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/udp/ingressrouteudp)             | UDP Routing                                                       |

## Particularities

- The usage of `name` **and** `namespace` to refer to another Kubernetes resource.
- The usage of [secret](https://kubernetes.io/docs/concepts/configuration/secret/) for sensitive data (TLS certificates and credentials).

## Full Example

For additional information on exposing services with Kubernetes, refer to the [Kubernetes guide](https://doc.traefik.io/traefik/v3.7/expose/kubernetes/basic).
