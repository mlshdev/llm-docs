> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/udp/service.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/udp/service.md)

### General

Each of the fields of the service section represents a kind of service.
Which means, that for each specified service, one of the fields, and only one,
has to be enabled to define what kind of service is created.
Currently, the two available kinds are `LoadBalancer`, and `Weighted`.

## Servers Load Balancer

The servers load balancer is in charge of balancing the requests between the servers of the same service.

### Servers

The Servers field defines all the servers that are part of this load-balancing group,
i.e. each address (IP:Port) on which an instance of the service's program is deployed.

#### Configuration Example

A Service with One Server -- Using the [File Provider](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file)

**Structured (YAML)**

```yaml
## Dynamic configuration
udp:
  services:
    my-service:
      loadBalancer:
        servers:
          - address: "xx.xx.xx.xx:xx"
```

**Structured (TOML)**

```toml
## Dynamic configuration
[udp.services]
  [udp.services.my-service.loadBalancer]
    [[udp.services.my-service.loadBalancer.servers]]
      address = "xx.xx.xx.xx:xx"
```

## Weighted Round Robin

The Weighted Round Robin (alias `WRR`) load-balancer of services is in charge of balancing the connections between multiple services based on provided weights.

This strategy is only available to load balance between [services](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/udp/service) and not between servers.

> **Supported Providers**
> This strategy can currently be defined with the [File provider](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file)
> and the [Kubernetes CRD provider (IngressRouteUDP)](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/kubernetes/crd/udp/ingressrouteudp).
> **Weights**
> A weight must be a non-negative integer, and a `0` weight takes the child service out of the rotation.
> A weighted service declaring a negative weight is disabled, and the routers referencing it are not created.
> **Structured (YAML)**

```yaml
udp:
  services:
    app:
      weighted:
        services:
          - name: appv1
            weight: 3
          - name: appv2
            weight: 1

    appv1:
      loadBalancer:
        servers:
          - address: "xxx.xxx.xxx.xxx:8080"

    appv2:
      loadBalancer:
        servers:
          - address: "xxx.xxx.xxx.xxx:8080"
```

**Structured (TOML)**

```toml
[udp.services]
  [udp.services.app]
    [[udp.services.app.weighted.services]]
      name = "appv1"
      weight = 3
    [[udp.services.app.weighted.services]]
      name = "appv2"
      weight = 1

  [udp.services.appv1]
    [udp.services.appv1.loadBalancer]
      [[udp.services.appv1.loadBalancer.servers]]
        address = "xxx.xxx.xxx.xxx:8080"

  [udp.services.appv2]
    [udp.services.appv2.loadBalancer]
      [[udp.services.appv2.loadBalancer.servers]]
        address = "xxx.xxx.xxx.xxx:8080"
```

### Configuration Options

| Field                                             | Description                                                   | Default | Required |
| ------------------------------------------------- | ------------------------------------------------------------- | ------- | -------- |
| <a id="opt-services"></a>`services`               | Defines the list of services to load balance between.         |         | Yes      |
| <a id="opt-services-name"></a>`services.name`     | The name of the service to load balance to.                   | ""      | Yes      |
| <a id="opt-services-weight"></a>`services.weight` | The weight applied to the service when balancing connections. | 1       | No       |
