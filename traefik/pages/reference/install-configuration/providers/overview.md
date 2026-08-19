> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/install-configuration/providers/overview.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/install-configuration/providers/overview.md)

# Overview

*Providers* are infrastructure components, whether orchestrators, container engines, cloud providers, or key-value stores.
The idea is that Traefik queries the provider APIs in order to find relevant information about routing,
and when Traefik detects a change, it dynamically updates the routes.

## Provider Categories

While each provider is different, you can think of each as belonging to one of four categories:

- Label-based: each deployed container has a set of labels attached to it
- Key-Value-based: each deployed container updates a key-value store with relevant information
- Annotation-based: a separate object, with annotations, defines the characteristics of the container
- File-based: uses files to define configuration

## Provider Namespace

When you declare certain objects in the Traefik dynamic configuration,
such as middleware, services, TLS options or server transports, they reside in their provider's namespace.
For example, if you declare a middleware using a Docker label, it resides in the Docker provider namespace.

If you use multiple providers and wish to reference such an object declared in another provider
(e.g. referencing a cross-provider object like middleware), then the object name should be suffixed by the `@`
separator, and the provider name.

For the list of the providers names, see the [supported providers](#supported-providers) table below.

```text
<resource-name>@<provider-name>
```

> **Kubernetes Namespace vs Traefik Namespace**
> As Kubernetes also has its own notion of namespace,
> one should not confuse the *provider namespace* with the *Kubernetes Namespace* of a resource when in the context of cross-provider usage.
>
> In this case, since the definition of a Traefik dynamic configuration object is not in Kubernetes,
> specifying a Kubernetes Namespace when referring to the resource does not make any sense.
>
> On the other hand, if you were to declare a middleware as a Custom Resource in Kubernetes and use the non-CRD Ingress objects,
> you would have to add the Kubernetes Namespace of the middleware to the annotation like this `<middleware-namespace>-<middleware-name>@kubernetescrd`.

## Supported Providers

Below is the list of the currently supported providers in Traefik.

| Provider                                                                                                                                                                               | Type         | Configuration Type   | Provider Name            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------- | ------------------------ |
| <a id="opt-Docker"></a>[Docker](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/docker)                                                                  | Orchestrator | Label                | `docker`                 |
| <a id="opt-Docker-Swarm"></a>[Docker Swarm](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/swarm)                                                       | Orchestrator | Label                | `swarm`                  |
| <a id="opt-Kubernetes-IngressRoute"></a>[Kubernetes IngressRoute](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-crd)             | Orchestrator | Custom Resource      | `kubernetescrd`          |
| <a id="opt-Kubernetes-Ingress"></a>[Kubernetes Ingress](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-ingress)                   | Orchestrator | Ingress              | `kubernetes`             |
| <a id="opt-Kubernetes-Ingress-NGINX"></a>[Kubernetes Ingress NGINX](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-ingress-nginx) | Orchestrator | Ingress-NGINX        | `kubernetesIngressNGINX` |
| <a id="opt-Kubernetes-Gateway-API"></a>[Kubernetes Gateway API](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-gateway)           | Orchestrator | Gateway API Resource | `kubernetesgateway`      |
| <a id="opt-Consul-Catalog"></a>[Consul Catalog](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/consul-catalog)                                | Orchestrator | Label                | `consulcatalog`          |
| <a id="opt-Nomad"></a>[Nomad](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/nomad)                                                           | Orchestrator | Label                | `nomad`                  |
| <a id="opt-ECS"></a>[ECS](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/ecs)                                                                    | Orchestrator | Label                | `ecs`                    |
| <a id="opt-File"></a>[File](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file)                                                                 | Manual       | YAML/TOML format     | `file`                   |
| <a id="opt-Consul"></a>[Consul](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/consul)                                                        | KV           | KV                   | `consul`                 |
| <a id="opt-Etcd"></a>[Etcd](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kv/etcd)                                                                     | KV           | KV                   | `etcd`                   |
| <a id="opt-ZooKeeper"></a>[ZooKeeper](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kv/zk)                                                             | KV           | KV                   | `zookeeper`              |
| <a id="opt-Redis"></a>[Redis](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kv/redis)                                                                  | KV           | KV                   | `redis`                  |
| <a id="opt-HTTP"></a>[HTTP](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/http)                                                                 | Manual       | JSON/YAML format     | `http`                   |

> **More Providers**
> The current version of Traefik does not yet support every provider that Traefik v2.11 did.
> See the [previous version (v2.11)](https://doc.traefik.io/traefik/v2.11/) for more information.

## Referencing a Traefik Dynamic Configuration Object from Another Provider

Declaring the add-foo-prefix in the file provider.

**File (YAML)**

```yaml
http:
  middlewares:
    add-foo-prefix:
      addPrefix:
        prefix: "/foo"
```

**File (TOML)**

```toml
[http.middlewares]
  [http.middlewares.add-foo-prefix.addPrefix]
    prefix = "/foo"
```

Using the add-foo-prefix middleware from other providers:

**Docker & Swarm**

```yaml
your-container:
  image: your-docker-image

  labels:
    # Attach add-foo-prefix@file middleware (declared in file)
    - "traefik.http.routers.my-container.middlewares=add-foo-prefix@file"
```

**IngressRoute**

```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: ingressroutestripprefix

spec:
  entryPoints:
    - web
  routes:
    - match: Host(`example.com`)
      kind: Rule
      services:
        - name: whoami
          port: 80
      middlewares:
        - name: add-foo-prefix@file
        # namespace: bar
        # A namespace specification such as above is ignored
        # when the cross-provider syntax is used.
```

**Ingress**

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress
  namespace: appspace
  annotations:
    "traefik.ingress.kubernetes.io/router.middlewares": add-foo-prefix@file
spec:
```

## Restrict the Scope of Service Discovery

By default, Traefik creates routes for all detected containers.

If you want to limit the scope of the Traefik service discovery,
i.e. disallow route creation for some containers,
you can do so in two different ways:

1. With [Consul Catalog](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/consul-catalog#opt-providers-consulCatalog-exposedByDefault),
   [Docker](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/docker#opt-providers-docker-exposedByDefault),
   [ECS](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/ecs#opt-providers-ecs-exposedByDefault),
   [Nomad](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/nomad#opt-providers-nomad-exposedByDefault) and
   [Swarm](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/swarm#opt-providers-swarm-exposedByDefault)
   providers, you can set `exposedByDefault` to `false` and add a label `traefik.enable=true`
   on containers you want to expose

2. Use a finer-grained mechanism based on label selector or constraints.

> **The following providers support constraints**
>
> - [Consul Catalog](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/consul-catalog#constraints)
> - [Docker](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/docker#constraints)
> - [ECS](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/ecs#constraints)
> - [Nomad](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/hashicorp/nomad#constraints)
> - [Swarm](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/swarm#constraints)
>   **The following providers support label selectors**
> - [Kubernetes CRD](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-crd#opt-providers-kubernetesCRD-labelselector)
> - [Kubernetes Gateway API](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-gateway#opt-providers-kubernetesGateway-labelselector)
> - [Kubernetes Ingress](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/kubernetes/kubernetes-ingress#opt-providers-kubernetesIngress-labelselector)

## Providers Precedence

### `providers.precedence`

*Optional*

When two routers from **different providers** define the same rule with equal numeric [priority](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/http/routing/rules-and-priority#priority-calculation),
the `precedence` option determines which provider's route takes precedence.

The list is ordered from highest to lowest precedence: a provider listed first wins over providers listed later.

**File (YAML)**

```yaml
providers:
  precedence:
    - kubernetescrd
    - kubernetes
    - file
```

**File (TOML)**

```toml
[providers]
  precedence = ["kubernetescrd", "kubernetes", "file"]
```

**CLI**

```bash
--providers.precedence=kubernetescrd,kubernetes,file
```

#### Default precedence

When `precedence` is not set, Traefik uses the following default order (highest precedence first):

| Position              | Provider name            |
| --------------------- | ------------------------ |
| <a id="opt-1"></a>1   | `kubernetesgateway`      |
| <a id="opt-2"></a>2   | `kubernetescrd`          |
| <a id="opt-3"></a>3   | `kubernetes`             |
| <a id="opt-4"></a>4   | `kubernetesingressnginx` |
| <a id="opt-5"></a>5   | `swarm`                  |
| <a id="opt-6"></a>6   | `docker`                 |
| <a id="opt-7"></a>7   | `file`                   |
| <a id="opt-8"></a>8   | `redis`                  |
| <a id="opt-9"></a>9   | `knative`                |
| <a id="opt-10"></a>10 | `consul`                 |
| <a id="opt-11"></a>11 | `consulcatalog`          |
| <a id="opt-12"></a>12 | `nomad`                  |
| <a id="opt-13"></a>13 | `etcd`                   |
| <a id="opt-14"></a>14 | `ecs`                    |
| <a id="opt-15"></a>15 | `http`                   |
| <a id="opt-16"></a>16 | `zookeeper`              |
| <a id="opt-17"></a>17 | `rest`                   |

> **Note**
>
> - `precedence` only acts as a **tiebreaker**: it is applied only when two routes from different providers share the same numeric `priority` value. An explicit router priority always takes precedence.
> - A provider absent from `precedence` loses to any listed provider.
> - Provider names are case-insensitive.
