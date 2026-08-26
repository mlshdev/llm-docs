> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/install-configuration/api-dashboard.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/install-configuration/api-dashboard.md)

Traefik exposes a number of information through API endpoints, such as the configuration of your routers, services, middlewares, etc.

The dashboard, which is the central place that displays the current active routes handled by Traefik, fetches the data from this API.

![Dashboard - Providers](https://raw.githubusercontent.com/traefik/traefik/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/assets/img/webui-dashboard.png)
*The dashboard in action*

## Security

Enabling the API and the dashboard in production is not recommended, because it will expose all configuration elements,
including sensitive data, for which access should be reserved to administrators.

In production, it should be at least secured by authentication and authorizations.

> **Info**
> It's recommended to NOT publicly exposing the API's port, keeping it restricted to internal networks
> (as in the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege), applied to networks).

## Configuration Example

Enable the dashboard:

**File(YAML)**

```yaml
api: {}
```

**File(TOML)**

```toml
[api]
```

**CLI**

```cli
--api=true
```

Expose the dashboard:

**Kubernetes CRD**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: traefik-dashboard
spec:
  routes:
  - match: Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))
    kind: Rule
    services:
    - name: api@internal
      kind: TraefikService
    middlewares:
      - name: auth
---
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: auth
spec:
  basicAuth:
    secret: secretName # Kubernetes secret named "secretName"
```

**Helm Chart Values (values.yaml)**

```yaml
# Create an IngressRoute for the dashboard
ingressRoute:
  dashboard:
    enabled: true
    # Custom match rule with host domain
    matchRule: Host(`traefik.example.com`)
    entryPoints: ["websecure"]
    # Add custom middlewares : authentication and redirection
    middlewares:
      - name: traefik-dashboard-auth

# Create the custom middlewares used by the IngressRoute dashboard (can also be created in another way).
# /!\ Yes, you need to replace "changeme" password with a better one. /!\
extraObjects:
  - apiVersion: v1
    kind: Secret
    metadata:
      name: traefik-dashboard-auth-secret
    type: kubernetes.io/basic-auth
    stringData:
      username: admin
      password: changeme

  - apiVersion: traefik.io/v1alpha1
    kind: Middleware
    metadata:
      name: traefik-dashboard-auth
    spec:
      basicAuth:
        secret: traefik-dashboard-auth-secret
```

**Docker**

```yaml
# Dynamic Configuration
labels:
  - "traefik.http.routers.dashboard.rule=Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))"
  - "traefik.http.routers.dashboard.service=api@internal"
  - "traefik.http.routers.dashboard.middlewares=auth"
  - "traefik.http.middlewares.auth.basicauth.users=test:$$apr1$$H6uskkkW$$IgXLP6ewTrSuBkTrqE8wj/,test2:$$apr1$$d9hr9HBB$$4HxwgUir3HP4EsggP/QNo0"
```

**Swarm**

```yaml
# Dynamic Configuration
deploy:
  labels:
    - "traefik.http.routers.dashboard.rule=Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))"
    - "traefik.http.routers.dashboard.service=api@internal"
    - "traefik.http.routers.dashboard.middlewares=auth"
    - "traefik.http.middlewares.auth.basicauth.users=test:$$apr1$$H6uskkkW$$IgXLP6ewTrSuBkTrqE8wj/,test2:$$apr1$$d9hr9HBB$$4HxwgUir3HP4EsggP/QNo0"
    # Dummy service for Swarm port detection. The port can be any valid integer value.
    - "traefik.http.services.dummy-svc.loadbalancer.server.port=9999"
```

**Consul Catalog**

```yaml
# Dynamic Configuration
- "traefik.http.routers.dashboard.rule=Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))"
- "traefik.http.routers.dashboard.service=api@internal"
- "traefik.http.routers.dashboard.middlewares=auth"
- "traefik.http.middlewares.auth.basicauth.users=test:$$apr1$$H6uskkkW$$IgXLP6ewTrSuBkTrqE8wj/,test2:$$apr1$$d9hr9HBB$$4HxwgUir3HP4EsggP/QNo0"
```

**File (YAML)**

```yaml
# Dynamic Configuration
http:
  routers:
    dashboard:
      rule: Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))
      service: api@internal
      middlewares:
        - auth
  middlewares:
    auth:
      basicAuth:
        users:
          - "test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/"
          - "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0"
```

**File (TOML)**

```toml
# Dynamic Configuration
[http.routers.my-api]
  rule = "Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))"
  service = "api@internal"
  middlewares = ["auth"]

[http.middlewares.auth.basicAuth]
  users = [
    "test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/",
    "test2:$apr1$d9hr9HBB$4HxwgUir3HP4EsggP/QNo0",
  ]
```

## Configuration Options

The API and the dashboard can be configured:

- In the Helm Chart: You can find the options to customize the Traefik installation
  enabling the dashboard [here](https://github.com/traefik/traefik-helm-chart/blob/master/traefik/values.yaml#L155).
- In the Traefik Static Configuration as described below.

| Field                                                           | Description                                                                                                                                            | Default | Required |
| :-------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-api"></a>`api`                                       | Enable api/dashboard. When set to `true`, its sub option `api.dashboard` is also set to true.                                                          | false   | No       |
| <a id="opt-api-basePath"></a>api.basePath                       | Defines the base path where the API and Dashboard will be exposed.<br/>Please note that this option is incompatible with the insecure mode.            | /       | No       |
| <a id="opt-api-dashboard"></a>`api.dashboard`                   | Enable dashboard.                                                                                                                                      | true    | No       |
| <a id="opt-api-debug"></a>`api.debug`                           | Enable additional endpoints for debugging and profiling.                                                                                               | false   | No       |
| <a id="opt-api-disableDashboardAd"></a>`api.disableDashboardAd` | Disable the advertisement from the dashboard.                                                                                                          | false   | No       |
| <a id="opt-api-insecure"></a>`api.insecure`                     | Enable the API and the dashboard on the entryPoint named traefik.<br/>Please note that this mode is incompatible with the custom API base path option. | false   | No       |

## Endpoints

All the following endpoints must be accessed with a `GET` HTTP request.

| Path                                                                  | Description                                                                                         |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <a id="opt-apihttprouters"></a>`/api/http/routers`                    | Lists all the HTTP routers information.                                                             |
| <a id="opt-apihttproutersname"></a>`/api/http/routers/{name}`         | Returns the information of the HTTP router specified by `name`.                                     |
| <a id="opt-apihttpservices"></a>`/api/http/services`                  | Lists all the HTTP services information.                                                            |
| <a id="opt-apihttpservicesname"></a>`/api/http/services/{name}`       | Returns the information of the HTTP service specified by `name`.                                    |
| <a id="opt-apihttpmiddlewares"></a>`/api/http/middlewares`            | Lists all the HTTP middlewares information.                                                         |
| <a id="opt-apihttpmiddlewaresname"></a>`/api/http/middlewares/{name}` | Returns the information of the HTTP middleware specified by `name`.                                 |
| <a id="opt-apitcprouters"></a>`/api/tcp/routers`                      | Lists all the TCP routers information.                                                              |
| <a id="opt-apitcproutersname"></a>`/api/tcp/routers/{name}`           | Returns the information of the TCP router specified by `name`.                                      |
| <a id="opt-apitcpservices"></a>`/api/tcp/services`                    | Lists all the TCP services information.                                                             |
| <a id="opt-apitcpservicesname"></a>`/api/tcp/services/{name}`         | Returns the information of the TCP service specified by `name`.                                     |
| <a id="opt-apitcpmiddlewares"></a>`/api/tcp/middlewares`              | Lists all the TCP middlewares information.                                                          |
| <a id="opt-apitcpmiddlewaresname"></a>`/api/tcp/middlewares/{name}`   | Returns the information of the TCP middleware specified by `name`.                                  |
| <a id="opt-apiudprouters"></a>`/api/udp/routers`                      | Lists all the UDP routers information.                                                              |
| <a id="opt-apiudproutersname"></a>`/api/udp/routers/{name}`           | Returns the information of the UDP router specified by `name`.                                      |
| <a id="opt-apiudpservices"></a>`/api/udp/services`                    | Lists all the UDP services information.                                                             |
| <a id="opt-apiudpservicesname"></a>`/api/udp/services/{name}`         | Returns the information of the UDP service specified by `name`.                                     |
| <a id="opt-apientrypoints"></a>`/api/entrypoints`                     | Lists all the entry points information.                                                             |
| <a id="opt-apientrypointsname"></a>`/api/entrypoints/{name}`          | Returns the information of the entry point specified by `name`.                                     |
| <a id="opt-apioverview"></a>`/api/overview`                           | Returns statistic information about HTTP, TCP and about enabled features and providers.             |
| <a id="opt-apisupport-dump"></a>`/api/support-dump`                   | Returns an archive that contains the anonymized static configuration and the runtime configuration. |
| <a id="opt-apirawdata"></a>`/api/rawdata`                             | Returns information about dynamic configurations, errors, status and dependency relations.          |
| <a id="opt-apiversion"></a>`/api/version`                             | Returns information about Traefik version.                                                          |
| <a id="opt-debugvars"></a>`/debug/vars`                               | See the [expvar](https://golang.org/pkg/expvar/) Go documentation.                                  |
| <a id="opt-debugpprof"></a>`/debug/pprof/`                            | See the [pprof Index](https://golang.org/pkg/net/http/pprof/#Index) Go documentation.               |
| <a id="opt-debugpprofcmdline"></a>`/debug/pprof/cmdline`              | See the [pprof Cmdline](https://golang.org/pkg/net/http/pprof/#Cmdline) Go documentation.           |
| <a id="opt-debugpprofprofile"></a>`/debug/pprof/profile`              | See the [pprof Profile](https://golang.org/pkg/net/http/pprof/#Profile) Go documentation.           |
| <a id="opt-debugpprofsymbol"></a>`/debug/pprof/symbol`                | See the [pprof Symbol](https://golang.org/pkg/net/http/pprof/#Symbol) Go documentation.             |
| <a id="opt-debugpproftrace"></a>`/debug/pprof/trace`                  | See the [pprof Trace](https://golang.org/pkg/net/http/pprof/#Trace) Go documentation.               |

> **Base Path Configuration**
> By default, Traefik exposes its API and Dashboard under the `/` base path. It's possible to configure it with `api.basePath`. When configured, all endpoints (api, dashboard, debug) are using it.

## Dashboard

The dashboard is available by default on the path  `/dashboard/`.

> **Note**
>
> - The trailing slash `/` in `/dashboard/` is mandatory. This limitation can be mitigated using the [RedirectRegex Middleware](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/redirectregex).
>   \- There is also a redirect from the path `/` to `/dashboard/`, but you should not rely on this behavior, as it is subject to change and may complicate routing rules.

As mentioned above in the [Security](#security) section, it is important to secure access to both the dashboard and the API.
You need to define a routing configuration within Traefik.
This involves setting up a router attached to the service `api@internal`, which allows you to:

- Implement security features using [middlewares](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/overview), such as authentication ([basicAuth](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/basicauth), [digestAuth](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/digestauth),
  [forwardAuth](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/forwardauth)) or [allowlisting](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/middlewares/ipallowlist).

- Define a [router rule](#dashboard-router-rule) for accessing the dashboard through Traefik.

### Dashboard Router Rule

To ensure proper access to the dashboard, the [router rule](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#rules) you define must match requests intended for the `/api` and `/dashboard` paths.
We recommend using either a *Host-based rule* to match all requests on the desired domain or explicitly defining a rule that includes both path prefixes.
Here are some examples:

**Host Rule**

```bash
# The dashboard can be accessed on http://traefik.example.com/dashboard/
rule = "Host(`traefik.example.com`)"
```

**Path Prefix Rule**

```bash
# The dashboard can be accessed on http://example.com/dashboard/ or http://traefik.example.com/dashboard/
rule = "PathPrefix(`/api`) || PathPrefix(`/dashboard`)"
```

**Combination of Rules**

```bash
# The dashboard can be accessed on http://traefik.example.com/dashboard/
rule = "Host(`traefik.example.com`) && (PathPrefix(`/api`) || PathPrefix(`/dashboard`))"
```
