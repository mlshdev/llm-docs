> Release-pinned source for VictoriaMetrics v1.150.0: [docs/victoriametrics/data-ingestion/OpenTelemetry-Collector.md](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/413f95d65f08d2c3fb03e227b1f3ba42884ca796/docs/victoriametrics/data-ingestion/OpenTelemetry-Collector.md)

[OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) is a vendor-agnostic agent for receiving, processing, and exporting telemetry data.
VictoriaMetrics supports the [OTLP metrics protocol](https://docs.victoriametrics.com/victoriametrics/integrations/opentelemetry/) natively,
so the collector can push metrics directly using the `otlphttp` exporter.

Use the following exporter configuration:

```yaml
exporters:
  otlphttp/victoriametrics:
    compression: gzip
    encoding: proto
    metrics_endpoint: http://<vmsingle>:8428/opentelemetry/v1/metrics
```

> For the [cluster version](https://docs.victoriametrics.com/victoriametrics/cluster-victoriametrics/#url-format) specify the tenant ID:
> `http://<vminsert>:8480/insert/<accountID>/opentelemetry/v1/metrics`.
> See more about [multitenancy](https://docs.victoriametrics.com/victoriametrics/cluster-victoriametrics/#multitenancy).

Add the exporter to the desired service pipeline to activate it:

```yaml
service:
  pipelines:
    metrics:
      exporters:
        - otlphttp/victoriametrics
      receivers:
        - otlp
```

See [OpenTelemetry integration](https://docs.victoriametrics.com/victoriametrics/integrations/opentelemetry/) for details on metric naming and histogram conversion.
