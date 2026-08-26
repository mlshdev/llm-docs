> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/routing/observability.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/routing/observability.md)

Traefik's observability features include logs, access logs, metrics, and tracing. You can configure these options globally or at more specific levels, such as per router or per entry point.

By default, the router observability configuration is inherited from the attached EntryPoints and can be configured with the observability [options](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints#configuration-options).
However, a router defining its own observability configuration will opt-out from these defaults.

> **Info**
> To enable router-level observability, you must first enable
> [access-logs](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/observability/logs-and-accesslogs#accesslogs),
> [tracing](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/observability/tracing),
> and [metrics](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/observability/metrics).
>
> When metrics layers are not enabled with the `addEntryPointsLabels`, `addRoutersLabels` and/or `addServicesLabels` options,
> enabling metrics for a router will not enable them.
> **AddInternals option**
> By default, and for any type of signal (access-logs, metrics and tracing),
> Traefik disables observability for internal resources.
> The observability options described below cannot interfere with the `AddInternals` ones,
> and will be ignored.
>
> For instance, if a router exposes the `api@internal` service and `metrics.AddInternals` is false,
> it will never produces metrics, even if the router observability configuration enables metrics.

## Configuration Example

**Structured (YAML)**

```yaml
http:
  routers:
    my-router:
      rule: "Path(`/foo`)"
      service: service-foo
      observability:
        metrics: false
        accessLogs: false
        tracing: false
        traceVerbosity: detailed
```

**Structured (TOML)**

```yaml
[http.routers.my-router]
  rule = "Path(`/foo`)"
  service = "service-foo"

  [http.routers.my-router.observability]
    metrics = false
    accessLogs = false
    tracing = false
    traceVerbosity = "detailed"
```

**Labels**

```yaml
labels:
  - "traefik.http.routers.my-router.rule=Path(`/foo`)"
  - "traefik.http.routers.my-router.service=service-foo"
  - "traefik.http.routers.my-router.observability.metrics=false"
  - "traefik.http.routers.my-router.observability.accessLogs=false"
  - "traefik.http.routers.my-router.observability.tracing=false"
  - "traefik.http.routers.my-router.observability.traceVerbosity=detailed"
```

**Tags**

```json
{
  // ...
  "Tags": [
    "traefik.http.routers.my-router.rule=Path(`/foo`)",
    "traefik.http.routers.my-router.service=service-foo",
    "traefik.http.routers.my-router.observability.metrics=false",
    "traefik.http.routers.my-router.observability.accessLogs=false",
    "traefik.http.routers.my-router.observability.tracing=false",
    "traefik.http.routers.my-router.observability.traceVerbosity=detailed"
  ]
}
```

## Configuration Options

| Field                                           | Description                                                                                                                                                                                | Default   | Required |
| :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :------- |
| <a id="opt-accessLogs"></a>`accessLogs`         | The `accessLogs` option controls whether the router will produce access-logs.                                                                                                              | `true`    | No       |
| <a id="opt-metrics"></a>`metrics`               | The `metrics` option controls whether the router will produce metrics.                                                                                                                     | `true`    | No       |
| <a id="opt-tracing"></a>`tracing`               | The `tracing` option controls whether the router will produce traces.                                                                                                                      | `true`    | No       |
| <a id="opt-traceVerbosity"></a>`traceVerbosity` | The `traceVerbosity` option controls the tracing verbosity level for the router. Possible values: `minimal` (default), `detailed`. If not set, the value is inherited from the entryPoint. | `minimal` | No       |

#### traceVerbosity

`observability.traceVerbosity` defines the tracing verbosity level for the router.

Possible values are:

- `minimal`: produces a single server span and one client span for each request processed by a router.
- `detailed`: enables the creation of additional spans for each middleware executed for each request processed by a router.
