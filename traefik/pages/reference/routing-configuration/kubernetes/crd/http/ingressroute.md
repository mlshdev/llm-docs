> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/kubernetes/crd/http/ingressroute.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/kubernetes/crd/http/ingressroute.md)

`IngressRoute` is the CRD implementation of a [Traefik HTTP router](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority).

Before creating `IngressRoute` objects, you need to apply the Traefik Kubernetes CRDs such as [Definitions](https://raw.githubusercontent.com/traefik/traefik/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/dynamic-configuration/kubernetes-crd-definition-v1.yml) and [RBAC](https://raw.githubusercontent.com/traefik/traefik/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/dynamic-configuration/kubernetes-crd-rbac.yml) to your Kubernetes cluster.

This registers the `IngressRoute` kind and other Traefik-specific resources.

## Configuration Example

You can declare an `IngressRoute` as detailed below:

**IngressRoute**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: test-name
  namespace: apps

spec:
  ingressClassName: traefik-lb
  entryPoints:
    - web
  parentRefs:
    - name: parent-gateway
      namespace: default  # Optional - defaults to same namespace
  routes:
  - kind: Rule
    # Rule on the Host
    match: Host(`test.example.com`)
    # Attach a middleware
    middlewares:
    - name: middleware1
      namespace: apps
    # Enable Router observability
    observability:
      accessLogs: true
      metrics: true
      tracing: true
    # Set a priority
    priority: 10
    services:
    # Target a Kubernetes Support
    - kind: Service
      name: foo
      namespace: apps
      # Customize the connection between Traefik and the backend
      passHostHeader: true
      port: 80
      responseForwarding:
        flushInterval: 1ms
      scheme: https
      sticky:
        cookie:
          httpOnly: true
          name: cookie
          secure: true
      strategy: wrr
      weight: 10
  tls:
    # Generate a TLS certificate using a certificate resolver
    certResolver: foo
    domains:
    - main: example.net
      sans:
      - a.example.net
      - b.example.net
    # Customize the TLS options
    options:
      name: opt
      namespace: apps
    # Add a TLS certificate from a Kubernetes Secret
    secretName: supersecret
```

## Configuration Options

| Field                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default | Required |
| :------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-ingressClassName"></a>`ingressClassName`                                                           | Defines the [IngressClass](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class) cluster resource to use. It replaces the deprecated `kubernetes.io/ingress.class` annotation.<br />The spec field takes precedence over the annotation.                                                                                                                                                                                                           |         | No       |
| <a id="opt-entryPoints"></a>`entryPoints`                                                                     | List of [entry points](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints) names.<br />If not specified, HTTP routers will accept requests from all EntryPoints in the list of default EntryPoints.                                                                                                                                                                                                                                             |         | No       |
| <a id="opt-parentRefs"></a>`parentRefs`                                                                       | List of references to parent IngressRoute resources for multi-layer routing. When specified, this IngressRoute's routers become children of the referenced parent IngressRoute's routers. See [Multi-Layer Routing](#multi-layer-routing-with-ingressroutes) section for details.                                                                                                                                                                                            |         | No       |
| <a id="opt-parentRefsn-name"></a>`parentRefs[n].name`                                                         | Name of the referenced parent IngressRoute resource.                                                                                                                                                                                                                                                                                                                                                                                                                         |         | Yes      |
| <a id="opt-parentRefsn-namespace"></a>`parentRefs[n].namespace`                                               | Namespace of the referenced parent IngressRoute resource.<br />If not specified, defaults to the same namespace as the child IngressRoute.<br />Cross-namespace references require `allowCrossNamespace` provider option to be enabled.                                                                                                                                                                                                                                      |         | No       |
| <a id="opt-routes"></a>`routes`                                                                               | List of routes.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         | Yes      |
| <a id="opt-routesn-kind"></a>`routes[n].kind`                                                                 | Kind of router matching, only `Rule` is allowed yet.                                                                                                                                                                                                                                                                                                                                                                                                                         | "Rule"  | No       |
| <a id="opt-routesn-match"></a>`routes[n].match`                                                               | Defines the [rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rules) corresponding to an underlying router.                                                                                                                                                                                                                                                                                                         |         | Yes      |
| <a id="opt-routesn-priority"></a>`routes[n].priority`                                                         | Defines the [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#priority-calculation) to disambiguate rules of the same length, for route matching.<br />If not set, the priority is directly equal to the length of the rule, and so the longest length has the highest priority.<br />A value of `0` for the priority is ignored, the default rules length sorting is used.<br />Negative values are supported. | 0       | No       |
| <a id="opt-routesn-middlewares"></a>`routes[n].middlewares`                                                   | List of middlewares to attach to the IngressRoute. <br />More information [here](#middleware).                                                                                                                                                                                                                                                                                                                                                                               | ""      | No       |
| <a id="opt-routesn-middlewaresm-name"></a>`routes[n].`<br />`middlewares[m].`<br />`name`                     | Middleware name.<br />The character `@` is not authorized. <br />More information [here](#middleware).                                                                                                                                                                                                                                                                                                                                                                       |         | Yes      |
| <a id="opt-routesn-middlewaresm-namespace"></a>`routes[n].`<br />`middlewares[m].`<br />`namespace`           | Middleware namespace.<br />Can be empty if the middleware belongs to the same namespace as the IngressRoute. <br />More information [here](#middleware).                                                                                                                                                                                                                                                                                                                     |         | No       |
| <a id="opt-routesn-observability-accessLogs"></a>`routes[n].`<br />`observability.`<br />`accessLogs`         | Defines whether the route will produce [access-logs](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/observability/logs-and-accesslogs). See [here](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/observability) for more information.                                                                                                                                                                                | false   | No       |
| <a id="opt-routesn-observability-metrics"></a>`routes[n].`<br />`observability.`<br />`metrics`               | Defines whether the route will produce [metrics](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/observability/metrics). See [here](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/observability) for more information.                                                                                                                                                                                                | false   | No       |
| <a id="opt-routesn-observability-tracing"></a>`routes[n].`<br />`observability.`<br />`tracing`               | Defines whether the route will produce [traces](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/observability/tracing). See [here](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/observability) for more information.                                                                                                                                                                                                 | false   | No       |
| <a id="opt-routesn-observability-traceVerbosity"></a>`routes[n].`<br />`observability.`<br />`traceVerbosity` | Defines the verbosity level of the tracing for this route. Valid values are `minimal` and `detailed`. See [here](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/observability) for more information.                                                                                                                                                                                                                                       | minimal | No       |
| <a id="opt-tls"></a>`tls`                                                                                     | TLS configuration.<br />Can be an empty value(`{}`):<br />A self signed is generated in such a case<br />(or the [default certificate](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsstore) is used if it is defined.)                                                                                                                                                                                                           |         | No       |
| <a id="opt-routesn-services"></a>`routes[n].`<br />`services`                                                 | List of any combination of [TraefikService](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/traefikservice) and [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/). <br /> Exhaustive list of option in the [`Service`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/service#configuration-options) documentation.                                    |         | No       |
| <a id="opt-tls-secretName"></a>`tls.secretName`                                                               | [Secret](https://kubernetes.io/docs/concepts/configuration/secret/) name used to store the certificate (in the same namespace as the `IngressRoute`)                                                                                                                                                                                                                                                                                                                         | ""      | No       |
| <a id="opt-tls-options-name"></a>`tls.`<br />`options.name`                                                   | Name of the [`TLSOption`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption) to use.<br />More information [here](#tls-options).                                                                                                                                                                                                                                                                                              | ""      | No       |
| <a id="opt-tls-options-namespace"></a>`tls.`<br />`options.namespace`                                         | Namespace of the [`TLSOption`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption) to use.                                                                                                                                                                                                                                                                                                                                     | ""      | No       |
| <a id="opt-tls-certResolver"></a>`tls.certResolver`                                                           | Name of the [Certificate Resolver](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/overview) to use to generate automatic TLS certificates.                                                                                                                                                                                                                                                                                    | ""      | No       |
| <a id="opt-tls-domains"></a>`tls.domains`                                                                     | List of domains to serve using the certificates generates (one `tls.domain`= one certificate).<br />More information in the [dedicated section](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/tls/certificate-resolvers/acme#domain-definition).                                                                                                                                                                                                       |         | No       |
| <a id="opt-tls-domainsn-main"></a>`tls.`<br />`domains[n].main`                                               | Main domain name                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ""      | Yes      |
| <a id="opt-tls-domainsn-sans"></a>`tls.`<br />`domains[n].sans`                                               | List of alternative domains (SANs)                                                                                                                                                                                                                                                                                                                                                                                                                                           |         | No       |

### Middleware

- You can attach a list of [middlewares](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview)
  to each HTTP router.
- The middlewares will take effect only if the rule matches, and before forwarding
  the request to the service.
- Middlewares are applied in the same order as their declaration in **router**.
- In Kubernetes, the option `middleware` allow you to attach a middleware using its
  name and namespace (the namespace can be omitted when the Middleware is in the
  same namespace as the IngressRoute)

> **IngressRoute attached to a few middlewares**
>
> ```yaml
> apiVersion: traefik.io/v1alpha1
> kind: IngressRoute
> metadata:
>   name: my-app
>   namespace: apps
>
> spec:
>   entryPoints:
>     - websecure
>   routes:
>   - match: Host(`example.com`)
>     kind: Rule
>     middlewares:
>     # same namespace as the IngressRoute
>     - name: middleware01
>     # default namespace
>     - name: middleware02
>       namespace: apps
>     # Other namespace
>     - name: middleware03
>       namespace: other-ns
>     services:
>     - name: whoami
>       port: 80
> ```
>
> **routes.services.kind**
> As the field `name` can reference different types of objects, use the field `kind` to avoid any ambiguity.
> The field `kind` allows the following values:
>
> - `Service` (default value): to reference a [Kubernetes Service](https://kubernetes.io/docs/concepts/services-networking/service/)
> - `TraefikService`: to reference an object [`TraefikService`](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/http/traefikservice)

### TLS Options

The `options` field enables fine-grained control of the TLS parameters.
It refers to a [TLSOption](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/tls/tlsoption) and will be applied only if a `Host`
rule is defined.

#### Server Name Association

A TLS options reference is always mapped to the host name found in the `Host`
part of the rule, but neither to a router nor a router rule.
There could also be several `Host` parts in a rule.
In such a case the TLS options reference would be mapped to as many host names.

A TLS option is picked from the mapping mentioned above and based on the server
name provided during the TLS handshake,
and it all happens before routing actually occurs.

In the case of domain fronting,
if the TLS options associated with the Host Header and the SNI are different then
Traefik will respond with a status code `421`.

#### Conflicting TLS Options

Since a TLS options reference is mapped to a host name, if a configuration introduces
a situation where the same host name (from a `Host` rule) gets matched with two
TLS options references, a conflict occurs, such as in the example below.

The conflict detection is not scoped to a namespace: an `IngressRoute` defined in any
namespace, and even a router coming from another provider, conflicts with this one as
soon as it serves the same host name on the same entry point.

> **Example**
> **IngressRoute01**
>
> ```yaml
>   apiVersion: traefik.io/v1alpha1
>   kind: IngressRoute
>   metadata:
>     name: IngressRoute01
>     namespace: apps
>
>   spec:
>     entryPoints:
>       - foo
>     routes:
>     - match: Host(`example.net`)
>       kind: Rule
>     tls:
>       options: foo
>       ...
>
> ```
>
> **IngressRoute02**
>
> ```yaml
>   apiVersion: traefik.io/v1alpha1
>   kind: IngressRoute
>   metadata:
>     name: IngressRoute02
>     namespace: apps
>
>   spec:
>     entryPoints:
>       - foo
>     routes:
>     - match: Host(`example.net`)
>       kind: Rule
>     tls:
>       options: bar
>     ...
> ```

If that happens, both mappings are discarded, and the host name
(`example.net` in the example) for these routers gets associated with
the default TLS options instead.

> **Default TLS Options**
> The `default` TLS options are the fallback of the conflict resolution, and should
> therefore not be less secure than the options they can replace.
>
> See [Conflicting TLS Options](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/tls/tls-options#conflicting-tls-options)
> for more information.

### Multi-Layer Routing with IngressRoutes

Multi-layer routing allows creating hierarchical relationships between IngressRoutes,
where parent IngressRoutes can apply middleware before child IngressRoutes make routing decisions.

This is particularly useful for authentication-based routing,
where a parent IngressRoute authenticates requests and adds context (e.g., user roles as headers),
and child IngressRoutes route based on that context.

When a child IngressRoute references a parent IngressRoute with multiple routes,
**all** parent routers then become parents of **all** child routers.

> **Comprehensive Multi-Layer Routing Documentation**
> For detailed information about multi-layer routing concepts, validation rules, and use cases, see the dedicated [Multi-Layer Routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/multi-layer-routing) page.

#### Configuration Requirements

### Root IngressRoutes

- Have no `parentRefs` (top of the hierarchy)
- **Can** have `entryPoints`, `tls`, and `observability` configuration
- Can be either parent IngressRoutes (with children) or standalone IngressRoutes (with service)

### Intermediate IngressRoutes

- Reference their parent IngressRoute(s) via `parentRefs`
- Have one or more child IngressRoutes
- **Must not** have a `service` defined
- **Must not** have `entryPoints`, `tls`, or `observability` configuration

### Leaf IngressRoutes

- Reference their parent IngressRoute(s) via `parentRefs`
- **Must** have a `service` defined
- **Must not** have `entryPoints`, `tls`, or `observability` configuration

> **Cross-Namespace References**
> Cross-namespace parent references require the `allowCrossNamespace` provider option to be enabled.
> If disabled, child IngressRoute creation will be skipped with an error logged.

#### Example: Authentication-Based Routing

> **Parent IngressRoute with ForwardAuth and Child IngressRoutes**
> **Parent IngressRoute**
>
> ```yaml
> apiVersion: traefik.io/v1alpha1
> kind: IngressRoute
> metadata:
>   name: api-parent
>   namespace: default
> spec:
>   entryPoints:
>     - websecure
>   tls:
>     certResolver: letsencrypt
>   routes:
>     # Parent route with authentication - no services
>     - match: Host(`api.example.com`) && PathPrefix(`/api`)
>       kind: Rule
>       middlewares:
>         - name: auth-middleware
>           namespace: default
> ---
> apiVersion: traefik.io/v1alpha1
> kind: Middleware
> metadata:
>   name: auth-middleware
>   namespace: default
> spec:
>   forwardAuth:
>     address: "http://auth-service.default.svc.cluster.local:8080/auth"
>     authResponseHeaders:
>       - X-User-Role
>       - X-User-Name
> ```
>
> **Child IngressRoutes**
>
> ```yaml
> # Child IngressRoute for admin users
> apiVersion: traefik.io/v1alpha1
> kind: IngressRoute
> metadata:
>   name: api-admin
>   namespace: default
> spec:
>   parentRefs:
>     - name: api-parent
>       namespace: default  # Optional - defaults to same namespace
>   routes:
>     - match: HeadersRegexp(`X-User-Role`, `admin`)
>       kind: Rule
>       services:
>         - name: admin-service
>           port: 80
> ---
> # Child IngressRoute for regular users
> apiVersion: traefik.io/v1alpha1
> kind: IngressRoute
> metadata:
>   name: api-user
>   namespace: default
> spec:
>   parentRefs:
>     - name: api-parent
>   routes:
>     - match: HeadersRegexp(`X-User-Role`, `user`)
>       kind: Rule
>       services:
>         - name: user-service
>           port: 80
> ```
>
> **Services**
>
> ```yaml
> apiVersion: v1
> kind: Service
> metadata:
>   name: auth-service
>   namespace: default
> spec:
>   ports:
>     - port: 8080
>   selector:
>     app: auth-service
> ---
> apiVersion: v1
> kind: Service
> metadata:
>   name: admin-service
>   namespace: default
> spec:
>   ports:
>     - port: 80
>   selector:
>     app: admin-backend
> ---
> apiVersion: v1
> kind: Service
> metadata:
>   name: user-service
>   namespace: default
> spec:
>   ports:
>     - port: 80
>   selector:
>     app: user-backend
> ```
>
> **How it works:**
>
> 1. Request to `https://api.example.com/api/endpoint` matches the parent router
> 2. `auth-middleware` (ForwardAuth) validates the request with `auth-service`
> 3. `auth-service` returns 200 OK with `X-User-Role` header (e.g., `admin` or `user`)
> 4. Child routers evaluate rules against the modified request (with `X-User-Role` header)
> 5. Request is routed to `admin-service` or `user-service` based on the role
