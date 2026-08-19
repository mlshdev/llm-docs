> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/kubernetes/ingress-nginx.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/kubernetes/ingress-nginx.md)

# Traefik & Ingresses with NGINX Annotations

Enable seamless migration from NGINX Ingress Controller to Traefik with NGINX annotation compatibility.

> **NGINX Ingress Controller Retirement**
> The Kubernetes NGINX Ingress Controller project has announced its retirement in **March 2026** and will no longer receive updates or security patches.
> Traefik provides a migration path by supporting NGINX annotations, allowing you to transition your workloads without rewriting all your Ingress configurations.
>
> **→ See the [NGINX to Traefik Migration Guide](https://doc.traefik.io/traefik/v3.7/migrate/nginx-to-traefik) for step-by-step instructions.**
>
> For more information about the NGINX Ingress Controller retirement, see the [official Kubernetes blog announcement](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement).

## Ingress Discovery

This provider discovers all Ingresses in the cluster by default,
which may lead to duplicated routers if you are also using the standard Kubernetes Ingress provider.

**Best Practices:**

- Use IngressClass to specify which Ingresses should be handled by this provider
- Configure `watchNamespace` to limit discovery to a single namespace
- Use `watchNamespaceSelector` to target Ingresses based on namespace labels

## Routing Configuration

This provider watches for incoming Ingress events and automatically translates NGINX annotations into Traefik's dynamic configuration,
creating the corresponding routers, services, middlewares, and other components needed to handle your traffic.

> **ConfigMap Configuration and Default Behaviors**
> Routing annotations take precedence over provider-level defaults,
> but they don't control all behaviors that NGINX Ingress Controller's ConfigMap configuration would handle globally.
>
> Important differences in default behaviors:
>
> - **Request buffering**: NGINX enables `proxy-request-buffering` by default, while Traefik requires explicit opt-in via the provider's `proxyRequestBuffering` option.
>
> To ensure consistent behavior during migration,
> review and configure Traefik's provider-level options to match your current NGINX ConfigMap settings.
> See the [provider configuration options](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-ingress-nginx) for available settings.

## Configuration Example

> **Configuring Kubernetes Ingress NGINX Controller**
> **RBAC**
>
> ```yaml
> ---
> apiVersion: rbac.authorization.k8s.io/v1
> kind: ClusterRole
> metadata:
>   name: traefik-ingress-controller
> rules:
>   - apiGroups:
>       - ""
>     resources:
>       - namespaces
>     verbs:
>       - get
>   - apiGroups:
>       - ""
>     resources:
>       - configmaps
>       - pods
>       - secrets
>       - endpoints
>     verbs:
>       - get
>       - list
>       - watch
>   - apiGroups:
>       - ""
>     resources:
>       - services
>     verbs:
>       - get
>       - list
>       - watch
>   - apiGroups:
>       - networking.k8s.io
>     resources:
>       - ingresses
>     verbs:
>       - get
>       - list
>       - watch
>   - apiGroups:
>       - networking.k8s.io
>     resources:
>       - ingresses/status
>     verbs:
>       - update
>   - apiGroups:
>       - networking.k8s.io
>     resources:
>       - ingressclasses
>     verbs:
>       - get
>       - list
>       - watch
>   - apiGroups:
>       - ""
>     resources:
>       - events
>     verbs:
>       - create
>       - patch
>   - apiGroups:
>       - discovery.k8s.io
>     resources:
>       - endpointslices
>     verbs:
>       - list
>       - watch
>       - get
>
>     ---
>     apiVersion: rbac.authorization.k8s.io/v1
>     kind: ClusterRoleBinding
>     metadata:
>       name: traefik-ingress-controller
>     roleRef:
>       apiGroup: rbac.authorization.k8s.io
>       kind: ClusterRole
>       name: traefik-ingress-controller
>     subjects:
>       - kind: ServiceAccount
>         name: traefik-ingress-controller
>         namespace: default
> ```
>
> **Traefik**
>
> ```yaml
> ---
> apiVersion: v1
> kind: ServiceAccount
> metadata:
>   name: traefik-ingress-controller
>
> ---
> apiVersion: apps/v1
> kind: Deployment
> metadata:
>   name: traefik
>   labels:
>     app: traefik
>
> spec:
>   replicas: 1
>   selector:
>     matchLabels:
>       app: traefik
>   template:
>     metadata:
>       labels:
>         app: traefik
>     spec:
>       serviceAccountName: traefik-ingress-controller
>       containers:
>         - name: traefik
>           image: traefik:v3.7
>           args:
>             - --entryPoints.web.address=:80
>             - --providers.kubernetesingressnginx
>           ports:
>             - name: web
>               containerPort: 80
>
> ---
> apiVersion: v1
> kind: Service
> metadata:
>   name: traefik
> spec:
>   type: LoadBalancer
>   selector:
>     app: traefik
>   ports:
>     - name: web
>       port: 80
>       targetPort: 80
> ```
>
> **Whoami**
>
> ```yaml
> ---
> apiVersion: apps/v1
> kind: Deployment
> metadata:
>   name: whoami
>   labels:
>     app: whoami
>
> spec:
>   replicas: 2
>   selector:
>     matchLabels:
>       app: whoami
>   template:
>     metadata:
>       labels:
>         app: whoami
>     spec:
>       containers:
>         - name: whoami
>           image: traefik/whoami
>           ports:
>             - containerPort: 80
>
> ---
> apiVersion: v1
> kind: Service
> metadata:
>   name: whoami
>
> spec:
>   selector:
>     app: whoami
>   ports:
>     - name: http
>       port: 80
> ```
>
> **Ingress**
>
> ```yaml
> ---
> apiVersion: networking.k8s.io/v1
> kind: IngressClass
> metadata:
>   name: nginx
> spec:
>   controller: k8s.io/ingress-nginx
>
> ---
> apiVersion: networking.k8s.io/v1
> kind: Ingress
> metadata:
>   name: myingress
>
> spec:
>   ingressClassName: nginx
>   rules:
>     - host: whoami.localhost
>       http:
>         paths:
>           - path: /bar
>             pathType: Exact
>             backend:
>               service:
>                 name:  whoami
>                 port:
>                   number: 80
>           - path: /foo
>             pathType: Exact
>             backend:
>               service:
>                 name:  whoami
>                 port:
>                   number: 80
> ```

## Annotations Support

This section lists all known NGINX Ingress annotations.
The following annotations are organized by category for easier navigation.

### Authentication

| Annotation                                                                                                           | Limitations / Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-ioauth-type"></a>`nginx.ingress.kubernetes.io/auth-type`                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="opt-nginx-ingress-kubernetes-ioauth-secret"></a>`nginx.ingress.kubernetes.io/auth-secret`                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="opt-nginx-ingress-kubernetes-ioauth-secret-type"></a>`nginx.ingress.kubernetes.io/auth-secret-type`           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="opt-nginx-ingress-kubernetes-ioauth-realm"></a>`nginx.ingress.kubernetes.io/auth-realm`                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="opt-nginx-ingress-kubernetes-ioauth-url"></a>`nginx.ingress.kubernetes.io/auth-url`                           | Only URL and response headers copy supported. Forward auth behaves differently than NGINX. When combined on the same Ingress with `rewrite-target` (or a `rewrite` directive in `configuration-snippet`/`auth-snippet`), the `X-Forwarded-Uri` header sent to the auth service reflects the rewritten path, not the original client request path. It supports minimal variable interpolation by using the following NGINX variables: `$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`.                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioauth-signin"></a>`nginx.ingress.kubernetes.io/auth-signin`                     | Redirects to signin URL on 401 response. It supports minimal variable interpolation by using the following NGINX variables: `$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`. <br/><br/>Like ingress-nginx, Traefik automatically appends `rd=$scheme://$best_http_host$escaped_request_uri` so the auth service can redirect back after sign-in; pass an empty `rd` to disable it. On routes without a `Host` matcher, the request's `Host` header feeds the interpolation and can be abused for open redirects. Scoping routers with a `Host` rule is strongly recommended when relying on this behavior. |
| <a id="opt-nginx-ingress-kubernetes-ioauth-snippet"></a>`nginx.ingress.kubernetes.io/auth-snippet`                   | Supported directives: `proxy_method`, `more_set_headers`, `proxy_set_header`, `more_set_input_headers`, `set`, `if`, `return code [text]`. It supports minimal variable interpolation by using the following NGINX variables: `$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`.                                                                                                                                                                                                                                                                                                                             |
| <a id="opt-nginx-ingress-kubernetes-ioauth-method"></a>`nginx.ingress.kubernetes.io/auth-method`                     | This annotation uses the `proxy_method` directive in Nginx. Thus, it can't be defined on an ingress that already have an `auth-snippet` annotation with the `proxy_method` directive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <a id="opt-nginx-ingress-kubernetes-ioauth-response-headers"></a>`nginx.ingress.kubernetes.io/auth-response-headers` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="opt-nginx-ingress-kubernetes-ioenable-global-auth"></a>`nginx.ingress.kubernetes.io/enable-global-auth`       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### SSL/TLS

| Annotation                                                                                                                                           | Limitations / Notes                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-iossl-redirect"></a>`nginx.ingress.kubernetes.io/ssl-redirect`                                                   | Cannot opt-out per route if enabled globally.                                                                        |
| <a id="opt-nginx-ingress-kubernetes-ioforce-ssl-redirect"></a>`nginx.ingress.kubernetes.io/force-ssl-redirect`                                       | Cannot opt-out per route if enabled globally.                                                                        |
| <a id="opt-nginx-ingress-kubernetes-iossl-passthrough"></a>`nginx.ingress.kubernetes.io/ssl-passthrough`                                             | Some differences in SNI/default backend handling.                                                                    |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-server-name"></a>`nginx.ingress.kubernetes.io/proxy-ssl-server-name`                                 |                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-name"></a>`nginx.ingress.kubernetes.io/proxy-ssl-name`                                               |                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-verify"></a>`nginx.ingress.kubernetes.io/proxy-ssl-verify`                                           |                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-secret"></a>`nginx.ingress.kubernetes.io/proxy-ssl-secret`                                           |                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioauth-tls-secret"></a>`nginx.ingress.kubernetes.io/auth-tls-secret`                                             | When validation fails, the rejection happens during the TLS handshake rather than returning a 400 Bad Request.       |
| <a id="opt-nginx-ingress-kubernetes-ioauth-tls-verify-client"></a>`nginx.ingress.kubernetes.io/auth-tls-verify-client`                               | When validation fails, the rejection happens during the TLS handshake rather than returning a 400 Bad Request.       |
| <a id="opt-nginx-ingress-kubernetes-ioauth-tls-pass-certificate-to-upstream"></a>`nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream` |                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioauth-tls-verify-depth"></a>`nginx.ingress.kubernetes.io/auth-tls-verify-depth`                                 | Go has no configurable depth limit. It will accept any valid chain regardless of how many intermediates it contains. |

### Session Affinity

| Annotation                                                                                                                 | Limitations / Notes                                                      |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| <a id="opt-nginx-ingress-kubernetes-ioaffinity"></a>`nginx.ingress.kubernetes.io/affinity`                                 |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-ioaffinity-mode"></a>`nginx.ingress.kubernetes.io/affinity-mode`                       | Only persistent mode supported; balanced not supported.                  |
| <a id="opt-nginx-ingress-kubernetes-ioaffinity-canary-behavior"></a>`nginx.ingress.kubernetes.io/affinity-canary-behavior` | Only the sticky behavior is supported; legacy behavior is not supported. |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-name"></a>`nginx.ingress.kubernetes.io/session-cookie-name`           |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-secure"></a>`nginx.ingress.kubernetes.io/session-cookie-secure`       |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-path"></a>`nginx.ingress.kubernetes.io/session-cookie-path`           |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-domain"></a>`nginx.ingress.kubernetes.io/session-cookie-domain`       |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-samesite"></a>`nginx.ingress.kubernetes.io/session-cookie-samesite`   |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-max-age"></a>`nginx.ingress.kubernetes.io/session-cookie-max-age`     |                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-expires"></a>`nginx.ingress.kubernetes.io/session-cookie-expires`     |                                                                          |

### Load Balancing & Backend

| Annotation                                                                                                                 | Limitations / Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-ioload-balance"></a>`nginx.ingress.kubernetes.io/load-balance`                         | Not implemented; silently ignored.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="opt-nginx-ingress-kubernetes-iobackend-protocol"></a>`nginx.ingress.kubernetes.io/backend-protocol`                 | FCGI and AUTO\_HTTP not supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="opt-nginx-ingress-kubernetes-ioservice-upstream"></a>`nginx.ingress.kubernetes.io/service-upstream`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-ioupstream-hash-by"></a>`nginx.ingress.kubernetes.io/upstream-hash-by`                 | It supports minimal variable interpolation by using the following NGINX variables: `$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`.                                                                                                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-ioupstream-vhost"></a>`nginx.ingress.kubernetes.io/upstream-vhost`                     | Supports NGINX variable interpolation. Request-time variables (`$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`) and the provider-resolved per-location variables (`$namespace`, `$ingress_name`, `$service_name`, `$service_port`, `$location_path`) are supported. The NGINX-internal variable `$proxy_upstream_name` is not available. |
| <a id="opt-nginx-ingress-kubernetes-iocustom-headers"></a>`nginx.ingress.kubernetes.io/custom-headers`                     | Header whitelisting, similar to `global-allowed-response-headers` NGINX config is not supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iodefault-backend"></a>`nginx.ingress.kubernetes.io/default-backend`                   | Specifies a fallback service within the same namespace as the Ingress resource used to handle requests when the primary backend service has no active endpoints. If the specified service exposes multiple ports, the first port will receive the traffic.                                                                                                                                                                                                                                                                                                                                                                |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-http-version"></a>`nginx.ingress.kubernetes.io/proxy-http-version`             | Controls HTTP protocol version for backend communication. Supported value: `"1.1"` (disables HTTP/2 to backend). Value `"1.0"` is not supported and will log a warning.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="opt-nginx-ingress-kubernetes-iocanary"></a>`nginx.ingress.kubernetes.io/canary`                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocanary-by-header"></a>`nginx.ingress.kubernetes.io/canary-by-header`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocanary-by-header-value"></a>`nginx.ingress.kubernetes.io/canary-by-header-value`     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocanary-by-header-pattern"></a>`nginx.ingress.kubernetes.io/canary-by-header-pattern` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocanary-by-cookie"></a>`nginx.ingress.kubernetes.io/canary-by-cookie`                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocanary-weight"></a>`nginx.ingress.kubernetes.io/canary-weight`                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocanary-weight-total"></a>`nginx.ingress.kubernetes.io/canary-weight-total`           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iox-forwarded-prefix"></a>`nginx.ingress.kubernetes.io/x-forwarded-prefix`             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### CORS

| Annotation                                                                                                             | Limitations / Notes |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------- |
| <a id="opt-nginx-ingress-kubernetes-ioenable-cors"></a>`nginx.ingress.kubernetes.io/enable-cors`                       | Partial support.    |
| <a id="opt-nginx-ingress-kubernetes-iocors-allow-credentials"></a>`nginx.ingress.kubernetes.io/cors-allow-credentials` |                     |
| <a id="opt-nginx-ingress-kubernetes-iocors-allow-headers"></a>`nginx.ingress.kubernetes.io/cors-allow-headers`         |                     |
| <a id="opt-nginx-ingress-kubernetes-iocors-allow-methods"></a>`nginx.ingress.kubernetes.io/cors-allow-methods`         |                     |
| <a id="opt-nginx-ingress-kubernetes-iocors-allow-origin"></a>`nginx.ingress.kubernetes.io/cors-allow-origin`           |                     |
| <a id="opt-nginx-ingress-kubernetes-iocors-expose-headers"></a>`nginx.ingress.kubernetes.io/cors-expose-headers`       |                     |
| <a id="opt-nginx-ingress-kubernetes-iocors-max-age"></a>`nginx.ingress.kubernetes.io/cors-max-age`                     |                     |

### Routing

| Annotation                                                                                                               | Limitations / Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-ioapp-root"></a>`nginx.ingress.kubernetes.io/app-root`                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iofrom-to-www-redirect"></a>`nginx.ingress.kubernetes.io/from-to-www-redirect`       | Doesn't support wildcard hosts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iouse-regex"></a>`nginx.ingress.kubernetes.io/use-regex`                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iorewrite-target"></a>`nginx.ingress.kubernetes.io/rewrite-target`                   | When combined with `auth-url`/`auth-snippet` on the same Ingress, downstream middlewares (including the ForwardAuth request) see the rewritten path, not the original request path.                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a id="opt-nginx-ingress-kubernetes-iopermanent-redirect"></a>`nginx.ingress.kubernetes.io/permanent-redirect`           | Defaults to a 301 Moved Permanently status code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a id="opt-nginx-ingress-kubernetes-iopermanent-redirect-code"></a>`nginx.ingress.kubernetes.io/permanent-redirect-code` | Only valid 3XX HTTP Status Codes are accepted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iotemporal-redirect"></a>`nginx.ingress.kubernetes.io/temporal-redirect`             | Takes precedence over the `permanent-redirect` annotation. Defaults to a 302 Found status code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iotemporal-redirect-code"></a>`nginx.ingress.kubernetes.io/temporal-redirect-code`   | Only valid 3XX HTTP Status Codes are accepted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="opt-nginx-ingress-kubernetes-iocustom-http-errors"></a>`nginx.ingress.kubernetes.io/custom-http-errors`           | Specifies a comma-separated list of HTTP status codes that should be intercepted and served by an error page backend. When any of these status codes occur, the request is forwarded to the global default backend, or to the backend defined by the default-backend annotation if specified.                                                                                                                                                                                                                                                                                            |
| <a id="opt-nginx-ingress-kubernetes-ioserver-alias"></a>`nginx.ingress.kubernetes.io/server-alias`                       | Ignored if the alias conflicts with an existing Ingress Host rule. Ingress Host rules always take precedence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <a id="opt-nginx-ingress-kubernetes-ioserver-snippet"></a>`nginx.ingress.kubernetes.io/server-snippet`                   | Supported directives: `add_header`, `location`,`proxy_method`, `more_set_headers`, `proxy_set_header`, `more_set_input_headers`, `set`, `if`, `return code [text]`. It supports minimal variable interpolation by using the following NGINX variables: `$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`. |
| <a id="opt-nginx-ingress-kubernetes-ioconfiguration-snippet"></a>`nginx.ingress.kubernetes.io/configuration-snippet`     | Supported directives: `add_header`, `proxy_method`, `more_set_headers`,`proxy_set_header`, `more_set_input_headers`, `set`, `if`, `return code [text]`. It supports minimal variable interpolation by using the following NGINX variables: `$scheme`, `$host`, `$http_*`, `$hostname`, `$request_uri`, `$request_method`, `$query_string`, `$args`, `$arg_*`, `$remote_addr`, `$uri`, `$document_uri`, `$server_name`, `$server_port`, `$content_type`, `$content_length`, `$cookie_*`, `$is_args`, `$best_http_host`, `$escaped_request_uri`, `$proxy_add_x_forwarded_for`.             |

### IP Whitelist

> **Client IP Strategy**
> By default, the client IP is determined from the remote address of the incoming request.
> When Traefik is behind a reverse proxy, the actual client IP is often found in the `X-Forwarded-For` header instead.
> This can be configured globally using the provider option [`ipAllowListStrategy`](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-ipAllowListStrategy).
> \| Annotation                                                                                                                                                                                                                                          | Limitations / Notes                                                                        |
> \|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
> \| <a id="opt-nginx-ingress-kubernetes-iowhitelist-source-range"></a>`nginx.ingress.kubernetes.io/whitelist-source-range` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioallowlist-source-range"></a>`nginx.ingress.kubernetes.io/allowlist-source-range` |                                                      |

### Rate Limiting

| Annotation                                                                                                             | Limitations / Notes                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-iolimit-rps"></a>`nginx.ingress.kubernetes.io/limit-rps`                           | Exceeding the limit returns `429 Too Many Requests` instead of NGINX's default `503 Service Unavailable`.                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iolimit-rpm"></a>`nginx.ingress.kubernetes.io/limit-rpm`                           | Exceeding the limit returns `429 Too Many Requests` instead of NGINX's default `503 Service Unavailable`.                                                                                                                          |
| <a id="opt-nginx-ingress-kubernetes-iolimit-burst-multiplier"></a>`nginx.ingress.kubernetes.io/limit-burst-multiplier` | Default to a multiplier of 5 if the configured value is less than 1. Exceeding the limit returns `429 Too Many Requests` instead of NGINX's default `503 Service Unavailable`.                                                     |
| <a id="opt-nginx-ingress-kubernetes-iolimit-connections"></a>`nginx.ingress.kubernetes.io/limit-connections`           | Exceeding the limit returns `429 Too Many Requests` instead of NGINX's default `503 Service Unavailable`. The concurrent connection limit is evaluated per client IP address. Values less than or equal to `0` are safely ignored. |

### Buffering

| Annotation                                                                                                                 | Limitations / Notes                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-request-buffering"></a>`nginx.ingress.kubernetes.io/proxy-request-buffering`   |                                                                                                                |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-body-size"></a>`nginx.ingress.kubernetes.io/proxy-body-size`                   |                                                                                                                |
| <a id="opt-nginx-ingress-kubernetes-ioclient-body-buffer-size"></a>`nginx.ingress.kubernetes.io/client-body-buffer-size`   |                                                                                                                |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-buffering"></a>`nginx.ingress.kubernetes.io/proxy-buffering`                   |                                                                                                                |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-buffer-size"></a>`nginx.ingress.kubernetes.io/proxy-buffer-size`               |                                                                                                                |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-buffers-number"></a>`nginx.ingress.kubernetes.io/proxy-buffers-number`         | With Traefik, `proxy-buffers-number` is actually used to compute the size of a single buffer (size \* number). |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-max-temp-file-size"></a>`nginx.ingress.kubernetes.io/proxy-max-temp-file-size` |                                                                                                                |

### Observability

| Annotation                                                                                                   | Limitations / Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="opt-nginx-ingress-kubernetes-ioenable-access-log"></a>`nginx.ingress.kubernetes.io/enable-access-log` | Access logs must first be enabled in the [install configuration](https://doc.traefik.io/traefik/v3.7/install-configuration/observability/logs-and-accesslogs/#access-logs) (globally or per entrypoint) for this annotation to take effect. When access logs are enabled, this annotation allows opting out specific Ingresses by setting it to `"false"`. Conversely, when access logs are disabled on an entrypoint, setting this annotation to `"true"` allows opting in specific Ingresses. |

### Timeout

| Annotation                                                                                                           | Limitations / Notes                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-connect-timeout"></a>`nginx.ingress.kubernetes.io/proxy-connect-timeout` | Timeout can be defined globally at the provider level using the [`proxyConnectTimeout` option](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-proxyConnectTimeout). |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-send-timeout"></a>`nginx.ingress.kubernetes.io/proxy-send-timeout`       | Timeout can be defined globally at the provider level using the [`proxySendTimeout` option](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-proxySendTimeout).       |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-read-timeout"></a>`nginx.ingress.kubernetes.io/proxy-read-timeout`       | Timeout can be defined globally at the provider level using the [`proxyReadTimeout` option](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-proxyReadTimeout).       |

### Retry

| Annotation                                                                                                                       | Limitations / Notes                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-next-upstream"></a>`nginx.ingress.kubernetes.io/proxy-next-upstream`                 | Unlike NGINX, Traefik does not guarantee that retries are sent to a different server. There is no difference between `error` and `timeout`, both are treated as TCP level failure. This configuration can be defined globally at the provider level using the [`proxyNextUpstream` option](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-proxyNextUpstream). |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-next-upstream-tries"></a>`nginx.ingress.kubernetes.io/proxy-next-upstream-tries`     | Unlimited retry (0) will be capped to the number of available servers to avoid infinite retries. The value can be defined globally at the provider level using the [`proxyNextUpstreamTries` option](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-proxyNextUpstreamTries).                                                                                  |
| <a id="opt-nginx-ingress-kubernetes-ioproxy-next-upstream-timeout"></a>`nginx.ingress.kubernetes.io/proxy-next-upstream-timeout` | The timeout can be defined globally at the provider level using the [`proxyNextUpstreamTimeout` option](https://doc.traefik.io/traefik/v3.7/install-configuration/providers/kubernetes/kubernetes-ingress-nginx/#opt-providers-kubernetesIngressNGINX-proxyNextUpstreamTimeout).                                                                                                                                                                             |

## Limitations

### Caveats and Key Behavioral Differences

- **Authentication**: Forward auth behaves differently and session caching is not supported. NGINX supports sub-request based auth, while Traefik forwards the original request.
- **Session Affinity**: Only persistent mode is supported.
- **Leader Election**: Not supported; no cluster mode with leader election.
- **Load Balancing**: Only round\_robin is supported; EWMA and IP hash are not supported.
- **CORS**: NGINX responds with all configured headers unconditionally; Traefik handles headers differently between pre-flight and regular requests.
- **TLS/Backend Protocols**: AUTO\_HTTP, FCGI and some TLS options are not supported in Traefik.
- **Path Handling**: Traefik preserves trailing slashes by default; NGINX removes them unless configured otherwise.
- **Retry**: NGINX guarantee that the next retry will be passed to the next server, while on Traefik there is a possibility that the retry would be passed to the same server.
- **Rate Limiting**: NGINX uses the **Leaky Bucket** algorithm, where requests are queued and drained at a fixed rate. Once the queue (burst) is full, excess requests are rejected immediately with `503`.
  Traefik uses the **Token Bucket** algorithm, where the bucket starts full at `burst` tokens, each request consumes one token, and tokens refill at the `limit-rps` rate. When the bucket is empty, the request is either delayed until more tokens are available or rejected with `429` if the delay would be too long.
  In practice, Traefik is slightly more lenient under bursty load, as it smooths out burst traffic rather than dropping it, but the steady-state throughput cap is similar.

### Unsupported Annotations

> **Want to Add Support for More Annotations?**
> You can help extend support in two ways:
>
> - [**Open a PR**](https://doc.traefik.io/traefik/v3.7/contributing/submitting-pull-requests) with the new annotation support.
> - **Reach out** to the [Traefik Labs support team](https://info.traefik.io/request-commercial-support?cta=doc).
>
> All contributions and suggestions are welcome — let's build this together!
> \| Annotation                                                                  | Notes                                                |
> \|-----------------------------------------------------------------------------|------------------------------------------------------|
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-tls-error-page"></a>`nginx.ingress.kubernetes.io/auth-tls-error-page` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-tls-match-cn"></a>`nginx.ingress.kubernetes.io/auth-tls-match-cn` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-cache-key"></a>`nginx.ingress.kubernetes.io/auth-cache-key` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-cache-duration"></a>`nginx.ingress.kubernetes.io/auth-cache-duration` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-keepalive"></a>`nginx.ingress.kubernetes.io/auth-keepalive` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-keepalive-share-vars"></a>`nginx.ingress.kubernetes.io/auth-keepalive-share-vars` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-keepalive-requests"></a>`nginx.ingress.kubernetes.io/auth-keepalive-requests` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-keepalive-timeout"></a>`nginx.ingress.kubernetes.io/auth-keepalive-timeout` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioauth-proxy-set-headers"></a>`nginx.ingress.kubernetes.io/auth-proxy-set-headers` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iodisable-proxy-intercept-errors"></a>`nginx.ingress.kubernetes.io/disable-proxy-intercept-errors` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iolimit-rate-after"></a>`nginx.ingress.kubernetes.io/limit-rate-after` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iolimit-rate"></a>`nginx.ingress.kubernetes.io/limit-rate` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iolimit-whitelist"></a>`nginx.ingress.kubernetes.io/limit-whitelist` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioglobal-rate-limit"></a>`nginx.ingress.kubernetes.io/global-rate-limit` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioglobal-rate-limit-window"></a>`nginx.ingress.kubernetes.io/global-rate-limit-window` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioglobal-rate-limit-key"></a>`nginx.ingress.kubernetes.io/global-rate-limit-key` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioglobal-rate-limit-ignored-cidrs"></a>`nginx.ingress.kubernetes.io/global-rate-limit-ignored-cidrs` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iopreserve-trailing-slash"></a>`nginx.ingress.kubernetes.io/preserve-trailing-slash` | Traefik preserves trailing slash by default.         |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-cookie-domain"></a>`nginx.ingress.kubernetes.io/proxy-cookie-domain` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-cookie-path"></a>`nginx.ingress.kubernetes.io/proxy-cookie-path` |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-redirect-from"></a>`nginx.ingress.kubernetes.io/proxy-redirect-from` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-redirect-to"></a>`nginx.ingress.kubernetes.io/proxy-redirect-to` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-ciphers"></a>`nginx.ingress.kubernetes.io/proxy-ssl-ciphers` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-verify-depth"></a>`nginx.ingress.kubernetes.io/proxy-ssl-verify-depth` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioproxy-ssl-protocols"></a>`nginx.ingress.kubernetes.io/proxy-ssl-protocols` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioenable-rewrite-log"></a>`nginx.ingress.kubernetes.io/enable-rewrite-log` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iosatisfy"></a>`nginx.ingress.kubernetes.io/satisfy` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-conditional-samesite-none"></a>`nginx.ingress.kubernetes.io/session-cookie-conditional-samesite-none` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iosession-cookie-change-on-failure"></a>`nginx.ingress.kubernetes.io/session-cookie-change-on-failure` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iossl-ciphers"></a>`nginx.ingress.kubernetes.io/ssl-ciphers` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iossl-prefer-server-ciphers"></a>`nginx.ingress.kubernetes.io/ssl-prefer-server-ciphers` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioconnection-proxy-header"></a>`nginx.ingress.kubernetes.io/connection-proxy-header` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioenable-opentracing"></a>`nginx.ingress.kubernetes.io/enable-opentracing` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioopentracing-trust-incoming-span"></a>`nginx.ingress.kubernetes.io/opentracing-trust-incoming-span` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioenable-opentelemetry"></a>`nginx.ingress.kubernetes.io/enable-opentelemetry` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioopentelemetry-trust-incoming-span"></a>`nginx.ingress.kubernetes.io/opentelemetry-trust-incoming-span` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioenable-modsecurity"></a>`nginx.ingress.kubernetes.io/enable-modsecurity` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-ioenable-owasp-core-rules"></a>`nginx.ingress.kubernetes.io/enable-owasp-core-rules` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iomodsecurity-transaction-id"></a>`nginx.ingress.kubernetes.io/modsecurity-transaction-id` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iomodsecurity-snippet"></a>`nginx.ingress.kubernetes.io/modsecurity-snippet` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iomirror-request-body"></a>`nginx.ingress.kubernetes.io/mirror-request-body` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iomirror-target"></a>`nginx.ingress.kubernetes.io/mirror-target` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iomirror-host"></a>`nginx.ingress.kubernetes.io/mirror-host` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iodenylist-source-range"></a>`nginx.ingress.kubernetes.io/denylist-source-range` |                                                      |
> \| <a id="opt-nginx-ingress-kubernetes-iostream-snippet"></a>`nginx.ingress.kubernetes.io/stream-snippet` |                                                      |

### Global Configuration

Traefik does not expose all global configuration options to control default behaviors for Ingresses in the same way NGINX does.

Some behaviors that are globally configurable in NGINX (such as default SSL redirect, rate limiting, or affinity) are currently not supported and cannot be overridden per-Ingress as in NGINX. These limitations are noted in the annotation tables below where applicable.
