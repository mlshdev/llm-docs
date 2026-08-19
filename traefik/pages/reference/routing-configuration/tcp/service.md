> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/tcp/service.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/tcp/service.md)

## General

Each of the fields of the service section represents a kind of service. Which means, that for each specified service, one of the fields, and only one, has to be enabled to define what kind of service is created. Currently, the two available kinds are `LoadBalancer`, and `Weighted`.

## Servers Load Balancer

The servers load balancer is in charge of balancing the requests between the servers of the same service.

### Configuration Examples

Declaring a Service with Two Servers -- Using the [File Provider](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file)

**Structured (YAML)**

```yaml
tcp:
  services:
    my-service:
      loadBalancer:
        servers:
        - address: "xx.xx.xx.xx:xx"
        - address: "xx.xx.xx.xx:xx"
        healthCheck:
          send: "PING"
          expect: "PONG"
          interval: "10s"
          timeout: "3s"
        serversTransport: "customTransport@file"
```

**Structured (TOML)**

```toml
[tcp.services]
  [tcp.services.my-service.loadBalancer]
    [[tcp.services.my-service.loadBalancer.servers]]
      address = "xx.xx.xx.xx:xx"
    [[tcp.services.my-service.loadBalancer.servers]]
        address = "xx.xx.xx.xx:xx"

    [tcp.services.my-service.loadBalancer.healthCheck]
      send = "PING"
      expect = "PONG"
      interval = "10s"
      timeout = "3s"

    serversTransport = "customTransport@file"
```

**Labels**

```yaml
labels:
  - "traefik.tcp.services.my-service.loadBalancer.healthCheck.send=PING"
  - "traefik.tcp.services.my-service.loadBalancer.healthCheck.expect=PONG"
  - "traefik.tcp.services.my-service.loadBalancer.healthCheck.interval=10s"
  - "traefik.tcp.services.my-service.loadBalancer.healthCheck.timeout=3s"
  - "traefik.tcp.services.my-service.loadBalancer.serversTransport=customTransport@file"
```

**Tags**

```json
{
  "Tags": [
    "traefik.tcp.services.my-service.loadBalancer.healthCheck.send=PING",
    "traefik.tcp.services.my-service.loadBalancer.healthCheck.expect=PONG",
    "traefik.tcp.services.my-service.loadBalancer.healthCheck.interval=10s",
    "traefik.tcp.services.my-service.loadBalancer.healthCheck.timeout=3s",
    "traefik.tcp.services.my-service.loadBalancer.serversTransport=customTransport@file"
  ]
}
```

### Configuration Options

| Field                                               | Description                                                                                                                                                                                                                                                                                             | Default |    |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -- |
| <a id="opt-servers"></a>`servers`                   | Servers declare a single instance of your program.                                                                                                                                                                                                                                                      | ""      |    |
| <a id="opt-servers-address"></a>`servers.address`   | The address option (IP:Port) point to a specific instance.                                                                                                                                                                                                                                              | ""      |    |
| <a id="opt-servers-tls"></a>`servers.tls`           | The `tls` option determines whether to use TLS when dialing with the backend.                                                                                                                                                                                                                           | false   |    |
| <a id="opt-serversTransport"></a>`serversTransport` | `serversTransport` allows referencing a TCP [ServersTransport](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/serverstransport) configuration for the communication between Traefik and your servers. If no serversTransport is specified, the default\@internal will be used. | ""      |    |
| <a id="opt-healthCheck"></a>`healthCheck`           | Configures health check to remove unhealthy servers from the load balancing rotation. See [HealthCheck](#health-check) for details.                                                                                                                                                                     |         | No |

### Health Check

The `healthCheck` option configures health check to remove unhealthy servers from the load balancing rotation.
Traefik will consider TCP servers healthy as long as the connection to the target server succeeds.
For advanced health checks, you can configure TCP payload exchange by specifying `send` and `expect` parameters.

To propagate status changes (e.g. all servers of this service are down) upwards, HealthCheck must also be enabled on the parent(s) of this service.

Below are the available options for the health check mechanism:

| Field                                                 | Description                                                                                                                   | Default | Required |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| <a id="opt-port"></a>`port`                           | Replaces the server address port for the health check endpoint.                                                               |         | No       |
| <a id="opt-send"></a>`send`                           | Defines the payload to send to the server during the health check.                                                            | ""      | No       |
| <a id="opt-expect"></a>`expect`                       | Defines the expected response payload from the server.                                                                        | ""      | No       |
| <a id="opt-interval"></a>`interval`                   | Defines the frequency of the health check calls for healthy targets.                                                          | 30s     | No       |
| <a id="opt-unhealthyInterval"></a>`unhealthyInterval` | Defines the frequency of the health check calls for unhealthy targets. When not defined, it defaults to the `interval` value. | -       | No       |
| <a id="opt-timeout"></a>`timeout`                     | Defines the maximum duration Traefik will wait for a health check connection before considering the server unhealthy.         | 5s      | No       |

## Weighted Round Robin

The Weighted Round Robin (alias `WRR`) load-balancer of services is in charge of balancing the connections between multiple services based on provided weights.

This strategy is only available to load balance between [services](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/service) and not between servers.

> **Supported Providers**
> This strategy can be defined currently with the [File provider](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file).
> **Structured (YAML)**

```yaml
tcp:
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
[tcp.services]
  [tcp.services.app]
    [[tcp.services.app.weighted.services]]
      name = "appv1"
      weight = 3
    [[tcp.services.app.weighted.services]]
      name = "appv2"
      weight = 1

  [tcp.services.appv1]
    [tcp.services.appv1.loadBalancer]
      [[tcp.services.appv1.loadBalancer.servers]]
        address = "private-ip-server-1:8080/"

  [tcp.services.appv2]
    [tcp.services.appv2.loadBalancer]
      [[tcp.services.appv2.loadBalancer.servers]]
        address = "private-ip-server-2:8080/"
```

### Health Check

HealthCheck enables automatic self-healthcheck for this service, i.e. whenever one of its children is reported as down,
this service becomes aware of it, and takes it into account (i.e. it ignores the down child) when running the load-balancing algorithm.
In addition, if the parent of this service also has HealthCheck enabled, this service reports to its parent any status change.

> **Behavior**
> If HealthCheck is enabled for a given service and any of its descendants does not have it enabled, the creation of the service will fail.
>
> HealthCheck on Weighted services can be defined currently only with the [File provider](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file).
> **Structured (YAML)**

```yaml
## Dynamic configuration
tcp:
  services:
    app:
      weighted:
        healthCheck: {}
        services:
        - name: appv1
          weight: 3
        - name: appv2
          weight: 1

    appv1:
      loadBalancer:
        healthCheck:
          send: "PING"
          expect: "PONG"
          interval: 10s
          timeout: 3s
        servers:
        - address: "192.168.1.10:6379"

    appv2:
      loadBalancer:
        healthCheck:
          send: "PING"
          expect: "PONG"
          interval: 10s
          timeout: 3s
        servers:
        - address: "192.168.1.11:6379"
```

**Structured (TOML)**

```toml
## Dynamic configuration
[tcp.services]
  [tcp.services.app]
    [tcp.services.app.weighted.healthCheck]
    [[tcp.services.app.weighted.services]]
      name = "appv1"
      weight = 3
    [[tcp.services.app.weighted.services]]
      name = "appv2"
      weight = 1

  [tcp.services.appv1]
    [tcp.services.appv1.loadBalancer]
      [tcp.services.appv1.loadBalancer.healthCheck]
        send = "PING"
        expect = "PONG"
        interval = "10s"
        timeout = "3s"
      [[tcp.services.appv1.loadBalancer.servers]]
        address = "192.168.1.10:6379"

  [tcp.services.appv2]
    [tcp.services.appv2.loadBalancer]
      [tcp.services.appv2.loadBalancer.healthCheck]
        send = "PING"
        expect = "PONG"
        interval = "10s"
        timeout = "3s"
      [[tcp.services.appv2.loadBalancer.servers]]
        address = "192.168.1.11:6379"
```
