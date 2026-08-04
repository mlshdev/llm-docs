> Release-pinned source for Traefik Proxy v3.7.10: [docs/content/observe/overview.md](https://github.com/traefik/traefik/blob/2a2349356c01b1b1f7ecddb0c17b30c97f5241e7/docs/content/observe/overview.md)

# Observability Overview

Traefik Proxy provides comprehensive monitoring and observability capabilities to maintain reliability and efficiency:

- [Logs and Access Logs](https://doc.traefik.io/traefik/v3.7/observe/logs-and-access-logs) provide real-time insight into the health of your system. They enable swift error detection and intervention through alerts. By centralizing logs, you can streamline the debugging process during incident resolution.

- [Metrics](https://doc.traefik.io/traefik/v3.7/observe/metrics) offer a comprehensive view of your infrastructure's health. They allow you to monitor critical indicators like incoming traffic volume. Metrics graphs and visualizations are helpful during incident triage in understanding the causes and implementing proactive measures.

- [Tracing](https://doc.traefik.io/traefik/v3.7/observe/tracing) enables tracking the flow of operations within your system. Using traces and spans, you can identify performance bottlenecks and pinpoint applications causing slowdowns to optimize response times effectively.

## Configuration Example

You can enable access logs, metrics, and tracing globally:

**Structured (YAML)**

```yaml
accessLog: {}

metrics:
  otlp: {}

tracing: {}
```

**Structured (TOML)**

```toml
[accessLog]

[metrics.otlp]

[tracing.otlp]
```

**Helm Chart Values**

```yaml
# values.yaml
accessLog:
  enabled: true

metrics:
  otlp:
    enabled: true

tracing:
  otlp:
    enabled: true
```

You can disable access logs, metrics, and tracing for a specific [entrypoint](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/entrypoints):

**Structured (YAML)**

```yaml
entryPoints:
  EntryPoint0:
    address: ':8000/udp'
    observability:
      accessLogs: false
      tracing: false
      metrics: false
```

**Structured (TOML)**

```toml
[entryPoints.EntryPoint0.observability]
  accessLogs = false
  tracing = false
  metrics = false
```

**Helm Chart Values**

```yaml
additionalArguments:
  - "--entrypoints.entrypoint0.observability.accesslogs=false"
  - "--entrypoints.entrypoint0.observability.tracing=false"
  - "--entrypoints.entrypoint0.observability.metrics=false"
```

> **Note**
> A router with its own observability configuration will override the global default.
