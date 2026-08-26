> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/providers/kubernetes/kubernetes-ingress-nginx.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/providers/kubernetes/kubernetes-ingress-nginx.md)

# Traefik & Ingresses with NGINX Annotations

This provider is a Kubernetes Ingress controller that manages access to cluster services by supporting the [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) specification.
It also supports many of the [ingress-nginx](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/) annotations on Ingresses, enabling teams to migrate from NGINX Ingress Controller to Traefik with minimal configuration changes.

> **NGINX Ingress Controller Retirement**
> The Kubernetes NGINX Ingress Controller project has announced its retirement in **March 2026** and will no longer receive updates or security patches.
> Traefik provides a migration path by supporting NGINX annotations, allowing you to transition your workloads without rewriting all your Ingress configurations.
>
> **→ See the [NGINX to Traefik Migration Guide](https://doc.traefik.io/traefik/v3.7/migrate/nginx-to-traefik) for step-by-step instructions.**
>
> For more information about the NGINX Ingress Controller retirement, see the [official Kubernetes blog announcement](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement).

## Requirements

When you install Traefik without using the Helm Chart,
ensure that you add/update the [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) for the Traefik Kubernetes Ingress NGINX provider.

> **Additional RBAC for Namespace Selector**
> When using the `watchNamespaceSelector` option, Traefik requires permissions to list and watch namespaces.
> These permissions are included in the RBAC configuration below.

```bash
# Install RBAC for Traefik Ingress NGINX provider:
kubectl apply -f https://raw.githubusercontent.com/traefik/traefik/v3.7/docs/content/reference/dynamic-configuration/kubernetes-ingress-nginx-rbac.yml
```

## Ingress Discovery

This provider discovers all Ingresses in the cluster by default, which may lead to duplicated routers if you are also using the standard Kubernetes Ingress provider.

**Best Practices:**

- Use IngressClass to specify which Ingresses should be handled by this provider
- Configure `watchNamespace` to limit discovery to a single namespace
- Use `watchNamespaceSelector` to target Ingresses based on namespace labels

### IngressClass Selection Logic

By default, the provider selects all IngressClasses whose `spec.controller` matches `controllerClass` (default: `k8s.io/ingress-nginx`) and picks up every Ingress referencing any of them.
Setting `ingressClassByName: true` adds a second inclusion path: IngressClasses whose name matches `ingressClass` are also picked up, even if their `spec.controller` does not match `controllerClass`.
It does not narrow down the controller-based selection — both paths apply independently.

## Configuration Example

You can enable the Kubernetes Ingress NGINX provider as detailed below:

**File (YAML)**

```yaml
providers:
  kubernetesIngressNGINX:
    # Namespace discovery
    watchNamespace: "default"
    # OR use namespace selector (mutually exclusive with watchNamespace)
    # watchNamespaceSelector: "environment=production"

    # IngressClass configuration
    ingressClass: "nginx"
    controllerClass: "k8s.io/ingress-nginx"
    watchIngressWithoutClass: false
    ingressClassByName: false
    globalAuthURL: "http://foo.com/auth"
    proxyConnectTimeout: 60
    proxyReadTimeout: 60
    proxySendTimeout: 60
    proxyRequestBuffering: false
    clientBodyBufferSize: "16384" # 16k
    proxyBuffering: false
    proxyBodySize: "1048576"      # 1m
    proxyBufferSize: "8192"       # 8k
    proxyBuffersNumber: 4
    upstreamKeepaliveTimeout: 60
    customHTTPErrors:
      - "404"
      - "503"
    allowCrossNamespaceResources: true
    allowSnippetAnnotations: false
    globalAllowedResponseHeaders:
      - "X-Custom-Header1"
      - "X-Custom-Header2"
    ipAllowListStrategy:
      depth: 2
    strictValidatePathType: false
```

**File (TOML)**

```toml
[providers.kubernetesIngressNGINX]
  # Namespace discovery
  watchNamespace = "default"
  # OR use namespace selector (mutually exclusive with watchNamespace)
  # watchNamespaceSelector = "environment=production"

  # IngressClass configuration
  ingressClass = "nginx"
  controllerClass = "k8s.io/ingress-nginx"
  watchIngressWithoutClass = false
  ingressClassByName = false
  globalAuthURL = "http://foo.com/auth"
  proxyConnectTimeout = 60
  proxyReadTimeout = 60
  proxySendTimeout = 60
  proxyRequestBuffering = false
  clientBodyBufferSize = "16384" # 16k
  proxyBuffering = false
  proxyBodySize = "1048576"      # 1m
  proxyBufferSize = "8192"       # 8k
  proxyBuffersNumber = 4
  upstreamKeepaliveTimeout = 60
  customHTTPErrors = ["404", "503"]
  allowCrossNamespaceResources = true
  allowSnippetAnnotations = false
  globalAllowedResponseHeaders = ["X-Custom-Header1", "X-Custom-Header2"]
  strictValidatePathType = false

[providers.kubernetesIngressNGINX.ipAllowListStrategy]
  depth = 2
```

**CLI**

```bash
--providers.kubernetesingressnginx=true
--providers.kubernetesingressnginx.watchnamespace=default
--providers.kubernetesingressnginx.ingressclass=nginx
--providers.kubernetesingressnginx.controllerclass=k8s.io/ingress-nginx
--providers.kubernetesingressnginx.watchingresswithoutclass=false
--providers.kubernetesingressnginx.ingressclassbyname=false
--providers.kubernetesingressnginx.globalauthurl=http://foo.com/auth
--providers.kubernetesingressnginx.proxyconnecttimeout=60
--providers.kubernetesingressnginx.proxyreadtimeout=60
--providers.kubernetesingressnginx.proxysendtimeout=60
--providers.kubernetesingressnginx.proxyrequestbuffering=false
--providers.kubernetesingressnginx.clientbodybuffersize=16384 # 16k
--providers.kubernetesingressnginx.proxybuffering=false
--providers.kubernetesingressnginx.proxybodysize=1048576      # 1m
--providers.kubernetesingressnginx.proxybuffersize=8192       # 8k
--providers.kubernetesingressnginx.proxybuffersnumber=4
--providers.kubernetesingressnginx.upstreamkeepalimetimeout=60
--providers.kubernetesingressnginx.customhttperrors=404,503
--providers.kubernetesingressnginx.allowCrossNamespaceResources=true
--providers.kubernetesingressnginx.allowsnippetannotations=false
--providers.kubernetesingressnginx.globalAllowedResponseHeaders=X-Custom-Header1,X-Custom-Header2
--providers.kubernetesingressnginx.ipallowliststrategy.depth=2
--providers.kubernetesingressnginx.strictvalidatepathtype=false
```

**Helm Chart Values**

```yaml
providers:
  kubernetesIngressNginx:
    # -- Enable Kubernetes Ingress NGINX provider
    enabled: true

    # Namespace discovery
    # -- Namespace the controller watches for updates to Kubernetes objects
    # When using rbac.namespaced, it will watch helm release namespace and namespaces listed in this array
    namespaces:
      - default
    # OR use namespace selector (mutually exclusive with namespaces)
    # namespaceSelector: "environment=production"

    # IngressClass configuration
    # -- Name of the ingress class this controller satisfies
    ingressClass: "nginx"
    # -- Ingress Class Controller value this controller satisfies
    controllerClass: "k8s.io/ingress-nginx"
    # -- Define if Ingress Controller should also watch for Ingresses without an IngressClass or the annotation specified
    watchIngressWithoutClass: false
    # -- Define if Ingress Controller should watch for Ingress Class by Name together with Controller Class
    ingressClassByName: false
```

This provider watches for incoming Ingress events and automatically translates NGINX annotations into Traefik's dynamic configuration, creating the corresponding routers, services, middlewares, and other components needed to route traffic to your cluster services.

## Configuration Options

| Field                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default                | Required |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- | :------- |
| <a id="opt-providers-providers-ThrottleDuration"></a>`providers.providers`<br/>`ThrottleDuration`                                                                        | Minimum amount of time to wait for, after a configuration reload, before taking into account any new configuration refresh event.<br />If multiple events occur within this time, only the most recent one is taken into account, and all others are discarded.<br />**This option cannot be set per provider, but the throttling algorithm applies to each of them independently.**                                                                                                                                                                                    | 2s                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-endpoint"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`endpoint`                                                      | Server endpoint URL.<br />More information [here](#endpoint).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-token"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`token`                                                            | Bearer token used for the Kubernetes client configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-certAuthFilePath"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`certAuthFilePath`                                      | Path to the certificate authority file.<br />Used for the Kubernetes client configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-throttleDuration"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`throttleDuration`                                      | Minimum amount of time to wait between two Kubernetes events before producing a new configuration.<br />This prevents a Kubernetes cluster that updates many times per second from continuously changing your Traefik configuration.<br />If empty, every event is caught.                                                                                                                                                                                                                                                                                              | 0s                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-globalAuthURL"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`globalAuthURL`                                            | URL to the service that provides authentication for all the locations. Per-ingress `auth-url` annotation has precedence over this option.                                                                                                                                                                                                                                                                                                                                                                                                                               | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-watchNamespace"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`watchNamespace`                                          | Namespace the controller watches for updates to Kubernetes objects. All namespaces are watched if this parameter is left empty.                                                                                                                                                                                                                                                                                                                                                                                                                                         | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-watchNamespaceSelector"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`watchNamespaceSelector`                          | Selector selects namespaces the controller watches for updates to Kubernetes objects.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-ingressClass"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`ingressClass`                                              | Name of the IngressClass this controller handles. When `ingressClassByName` is `true`, IngressClasses with this name are included in discovery regardless of their `spec.controller` value.                                                                                                                                                                                                                                                                                                                                                                             | "nginx"                | No       |
| <a id="opt-providers-kubernetesIngressNGINX-controllerClass"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`controllerClass`                                        | Ingress Class Controller value this controller satisfies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | "k8s.io/ingress-nginx" | No       |
| <a id="opt-providers-kubernetesIngressNGINX-watchIngressWithoutClass"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`watchIngressWithoutClass`                      | Define if Ingress Controller should also watch for Ingresses without an IngressClass or the annotation specified.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | false                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-ingressClassByName"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`ingressClassByName`                                  | When `true`, any IngressClass whose **name** matches `ingressClass` is include in discovery, even if its `spec.controller` does not match `controllerClass`. This is evaluated alongside the controller-based selection, not instead of it.                                                                                                                                                                                                                                                                                                                             | false                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-publishService"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`publishService`                                          | Service fronting the Ingress controller. Takes the form `namespace/name`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-publishStatusAddress"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`publishStatusAddress`                              | Customized address (or addresses, separated by comma) to set as the load-balancer status of Ingress objects this controller satisfies.                                                                                                                                                                                                                                                                                                                                                                                                                                  | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-defaultBackendService"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`defaultBackendService`                            | Service used to serve HTTP requests not matching any known server name (catch-all). Takes the form 'namespace/name'.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-disableSvcExternalName"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`disableSvcExternalName`                          | Disable support for Services of type ExternalName.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | false                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyConnectTimeout"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyConnectTimeout`                                | Amount of time to wait until a connection to a server can be established. The value is unitless and in seconds. This is used as the global connection timeout when no ingress-specific timeout is configured. An ingress-specific timeout can be configured using [`nginx.ingress.kubernetes.io/proxy-connect-timeout`](https://doc.traefik.io/traefik/v3.7/routing-configuration/kubernetes/ingress-nginx/#opt-nginx-ingress-kubernetes-ioproxy-connect-timeout) annotation.                                                                                           | 60                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyReadTimeout"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyReadTimeout`                                      | Amount of time between two successive read operations. The value is unitless and in seconds. This is used as the global read timeout when no ingress-specific timeout is configured. An ingress-specific timeout can be configured using [`nginx.ingress.kubernetes.io/proxy-read-timeout`](https://doc.traefik.io/traefik/v3.7/routing-configuration/kubernetes/ingress-nginx/#opt-nginx-ingress-kubernetes-ioproxy-read-timeout) annotation.                                                                                                                          | 60                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxySendTimeout"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxySendTimeout`                                      | Amount of time between two successive write operations. The value is unitless and in seconds. This is used as the global send timeout when no ingress-specific timeout is configured. An ingress-specific timeout can be configured using [`nginx.ingress.kubernetes.io/proxy-send-timeout`](https://doc.traefik.io/traefik/v3.7/routing-configuration/kubernetes/ingress-nginx/#opt-nginx-ingress-kubernetes-ioproxy-send-timeout) annotation.                                                                                                                         | 60                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyrequestbuffering"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyrequestbuffering`                            | Defines whether request buffering is enabled by default for all ingresses.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | false                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-clientBodyBufferSize"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`clientBodyBufferSize`                              | Default buffer size for reading client request body in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 16384                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxybuffering"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxybuffering`                                          | Defines whether response buffering is enabled by default for all ingresses.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | false                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyBodySize"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyBodySize`                                            | Default maximum size of a client request body in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1048576                | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyBufferSize"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyBufferSize`                                        | Default buffer size for reading the response body in bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 8192                   | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyBuffersNumber"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyBuffersNumber`                                  | Default number of buffers for reading a response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 4                      | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyNextUpstreama"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyNextUpstream`                                   | Defines in which cases a request should be retried. Accepted values are a space-separated list of: `error`, `timeout`, `http_XXX` (e.g. http\_502), `non_idempotent`, and `off` (disables retry). This is used as the global proxy-next-upstream configuration when no ingress-specific value is configured. An ingress-specific configuration can be set using [`nginx.ingress.kubernetes.io/proxy-next-upstream`](https://doc.traefik.io/traefik/v3.7/routing-configuration/kubernetes/ingress-nginx/#opt-nginx-ingress-kubernetes-ioproxy-next-upstream) annotation. | "error timeout"        | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyNextUpstreamTriesa"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyNextUpstreamTries`                         | Limits the number of possible tries if the backend server does not reply. 0 means unlimited tries, which is capped to the number of available servers. This is used as the global retry count configuration when no ingress-specific value is configured. An ingress-specific retry limit can be set using [`nginx.ingress.kubernetes.io/proxy-next-upstream-tries`](https://doc.traefik.io/traefik/v3.7/routing-configuration/kubernetes/ingress-nginx/#opt-nginx-ingress-kubernetes-ioproxy-next-upstream-tries) annotation.                                          | 3                      | No       |
| <a id="opt-providers-kubernetesIngressNGINX-proxyNextUpstreamTimeouta"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`proxyNextUpstreamTimeout`                     | Limits the total elapsed time to retry the request if the backend server does not reply. Timeout value is unitless and in seconds. 0 means no timeout. This is used as the global retry timeout when no ingress-specific value is configured. An ingress-specific retry timeout can be set using [`nginx.ingress.kubernetes.io/proxy-next-upstream-timeout`](https://doc.traefik.io/traefik/v3.7/routing-configuration/kubernetes/ingress-nginx/#opt-nginx-ingress-kubernetes-ioproxy-next-upstream-timeout) annotation.                                                | 0                      | No       |
| <a id="opt-providers-kubernetesIngressNGINX-upstreamKeepaliveTimeout"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`upstreamKeepaliveTimeout`                      | Defines the idle timeout for keep-alive connections to upstream servers. The value is unitless and in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 60                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-customHTTPErrors"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`customHTTPErrors`<br/>                                 | Defines which status should result in calling the default backend to return an error page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | \[]                    | No       |
| <a id="opt-providers-kubernetesIngressNGINX-allowCrossNamespaceResources"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`allowCrossNamespaceResources`              | Allow Ingress to reference resources (e.g. ConfigMaps, Secrets) in different namespaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | false                  | No       |
| <a id="opt-providers-kubernetesIngressNGINX-globalAllowedResponseHeaders"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`globalAllowedResponseHeaders`              | List of allowed response headers inside the custom headers annotations. It is required to configure it for the custom headers annotations to take effect.                                                                                                                                                                                                                                                                                                                                                                                                               | \[]                    | No       |
| <a id="opt-providers-kubernetesIngressNGINX-ipAllowListStrategy"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`ipAllowListStrategy`                                | Defines the IP strategy to determine the client IP for `allowlist-source-range` and `whitelist-source-range` annotations. When set, the strategy is applied to every generated IPAllowList middleware.                                                                                                                                                                                                                                                                                                                                                                  | -                      | No       |
| <a id="opt-providers-kubernetesIngressNGINX-ipAllowListStrategy-depth"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`ipAllowListStrategy.`<br/>`depth`             | Number of trusted proxy hops to skip when extracting the client IP from the `X-Forwarded-For` header. 0 disables depth-based extraction.                                                                                                                                                                                                                                                                                                                                                                                                                                | 0                      | No       |
| <a id="opt-providers-kubernetesIngressNGINX-ipAllowListStrategy-excludedIPs"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`ipAllowListStrategy.`<br/>`excludedIPs` | List of IPs to exclude when scanning the `X-Forwarded-For` header to find the client IP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | \[]                    | No       |
| <a id="opt-providers-kubernetesIngressNGINX-ipAllowListStrategy-ipv6Subnet"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`ipAllowListStrategy.`<br/>`ipv6Subnet`   | IPv6 subnet size used to group IPv6 addresses when checking the allow list. 0 disables subnet grouping.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 0                      | No       |
| <a id="opt-providers-kubernetesIngressNGINX-httpentrypoint"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`httpentrypoint`                                          | Defines the EntryPoint to use for HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-httpsentrypoint"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`httpsentrypoint`                                        | Defines the EntryPoint to use for HTTPS requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ""                     | No       |
| <a id="opt-providers-kubernetesIngressNGINX-strictValidatePathType"></a>`providers.`<br/>`kubernetesIngressNGINX.`<br/>`strictValidatePathType`                          | Defines whether to reject the entire ingress when any path contains regex characters and pathType is Prefix or Exact.                                                                                                                                                                                                                                                                                                                                                                                                                                                   | true                   | No       |

### `endpoint`

The Kubernetes server endpoint URL.

When deployed into Kubernetes, Traefik reads the environment variables `KUBERNETES_SERVICE_HOST`
and `KUBERNETES_SERVICE_PORT` or `KUBECONFIG` to construct the endpoint.

The access token is looked up in `/var/run/secrets/kubernetes.io/serviceaccount/token`
and the SSL CA certificate in `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`.
Both are mounted automatically when deployed inside Kubernetes.

The endpoint may be specified to override the environment variable values inside
a cluster.

When the environment variables are not found, Traefik tries to connect to the
Kubernetes API server with an external-cluster client.

In this case, the endpoint is required.
Specifically, it may be set to the URL used by `kubectl proxy` to connect to a Kubernetes
cluster using the granted authentication and authorization of the associated kubeconfig.

**File (YAML)**

```yaml
providers:
  kubernetesIngressNGINX:
    endpoint: "http://localhost:8080"
    # ...
```

**File (TOML)**

```toml
[providers.kubernetesIngressNGINX]
  endpoint = "http://localhost:8080"
  # ...
```

**CLI**

```bash
--providers.kubernetesingressnginx.endpoint=http://localhost:8080
```

## Routing Configuration

See the dedicated section in [routing](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/ingress-nginx).
